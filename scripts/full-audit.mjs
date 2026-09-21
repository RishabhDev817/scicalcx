// scripts/full-audit.mjs
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Discovered ${htmlFiles.length} HTML files in dist.`);

// Parse sitemap-0.xml
let sitemapUrls = new Set();
const sitemapPath = path.join(distDir, 'sitemap-0.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const locMatches = sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g);
  for (const match of locMatches) {
    sitemapUrls.add(match[1].trim());
  }
}
console.log(`Discovered ${sitemapUrls.size} URLs in sitemap-0.xml`);

const fileAuditResults = [];
const allInternalLinks = [];
const allCanonicals = new Map();
const allTitles = new Map();
const allDescriptions = new Map();

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  // Derive URL pathname
  let urlPath = '/' + relPath.replace(/index\.html$/, '');
  if (relPath === 'index.html') urlPath = '/';
  if (relPath === '404.html') urlPath = '/404/';
  if (relPath === '500.html') urlPath = '/500/';
  
  const content = fs.readFileSync(file, 'utf-8');
  
  // Extract lang attribute
  const langMatch = content.match(/<html[^>]*\blang=["']([^"']*)["']/i);
  const lang = langMatch ? langMatch[1] : null;
  
  // Extract title
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  
  // Extract meta description
  const descMatch = content.match(/<meta[^>]*\bname=["']description["'][^>]*\bcontent=["']([^"']*)["']/i)
    || content.match(/<meta[^>]*\bcontent=["']([^"']*)["'][^>]*\bname=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;
  
  // Extract canonical
  const canonMatch = content.match(/<link[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']*)["']/i)
    || content.match(/<link[^>]*\bhref=["']([^"']*)["'][^>]*\brel=["']canonical["']/i);
  const canonical = canonMatch ? canonMatch[1].trim() : null;
  
  // Extract robots meta
  const robotsMatch = content.match(/<meta[^>]*\bname=["']robots["'][^>]*\bcontent=["']([^"']*)["']/i)
    || content.match(/<meta[^>]*\bcontent=["']([^"']*)["'][^>]*\bname=["']robots["']/i);
  const robots = robotsMatch ? robotsMatch[1].trim() : null;
  const isNoindex = robots ? robots.includes('noindex') : false;
  
  // Extract H1 tags
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  // Extract hreflang links
  const hreflangs = [];
  const hreflangMatches = content.matchAll(/<link[^>]*\brel=["']alternate["'][^>]*\bhreflang=["']([^"']*)["'][^>]*\bhref=["']([^"']*)["']/gi);
  for (const m of hreflangMatches) {
    hreflangs.push({ lang: m[1], href: m[2] });
  }
  // Also reverse attribute order
  const hreflangMatchesRev = content.matchAll(/<link[^>]*\bhreflang=["']([^"']*)["'][^>]*\bhref=["']([^"']*)["'][^>]*\brel=["']alternate["']/gi);
  for (const m of hreflangMatchesRev) {
    hreflangs.push({ lang: m[1], href: m[2] });
  }

  // Extract JSON-LD scripts
  const jsonLdScripts = [];
  const jsonLdMatches = content.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const m of jsonLdMatches) {
    try {
      jsonLdScripts.push(JSON.parse(m[1]));
    } catch (err) {
      jsonLdScripts.push({ error: 'INVALID_JSON', raw: m[1] });
    }
  }

  // Extract links
  const linkMatches = content.matchAll(/<a[^>]*\bhref=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi);
  const links = [];
  for (const m of linkMatches) {
    const href = m[1].trim();
    const anchorText = m[2].replace(/<[^>]+>/g, '').trim();
    links.push({ href, anchorText });
    if (href.startsWith('/') || href.startsWith('https://scicalcx.com')) {
      allInternalLinks.push({ fromUrl: urlPath, toUrl: href, anchorText, file: relPath });
    }
  }

  // KaTeX / Math checks
  // Check for raw unrendered math delimiters outside code tags and scripts
  const contentWithoutCode = content
    .replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, '')
    .replace(/<code[^>]*>[\s\S]*?<\/code>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Look for standalone $ ... $ or $$ ... $$
  const rawMathDouble = contentWithoutCode.match(/\$\$[^\$]+\$\$/g);
  const katexParseErrors = content.includes('class="katex-error"') || content.includes('ParseError: KaTeX');

  // Check for placeholder strings
  const lowerContent = contentWithoutCode.toLowerCase();
  const placeholdersFound = [];
  ['lorem ipsum', 'under construction', 'coming soon', 'todo:', 'fixme:'].forEach(p => {
    if (lowerContent.includes(p)) placeholdersFound.push(p);
  });

  const fullCanonicalUrl = canonical ? canonical : null;
  if (canonical) {
    if (!allCanonicals.has(canonical)) allCanonicals.set(canonical, []);
    allCanonicals.get(canonical).push(urlPath);
  }
  if (title) {
    if (!allTitles.has(title)) allTitles.set(title, []);
    allTitles.get(title).push(urlPath);
  }
  if (description) {
    if (!allDescriptions.has(description)) allDescriptions.set(description, []);
    allDescriptions.get(description).push(urlPath);
  }

  fileAuditResults.push({
    file: relPath,
    urlPath,
    lang,
    title,
    description,
    canonical,
    isNoindex,
    h1Count: h1Matches.length,
    h1s: h1Matches,
    hreflangsCount: hreflangs.length,
    jsonLdCount: jsonLdScripts.length,
    jsonLdErrors: jsonLdScripts.filter(s => s.error),
    linksCount: links.length,
    rawMathDouble: rawMathDouble ? rawMathDouble.length : 0,
    katexParseErrors,
    placeholdersFound,
    inSitemap: sitemapUrls.has(`https://scicalcx.com${urlPath}`),
  });
}

// Write out raw audit JSON to scratch
fs.writeFileSync('scripts/audit-output.json', JSON.stringify({
  totalHtml: htmlFiles.length,
  sitemapCount: sitemapUrls.size,
  results: fileAuditResults,
}, null, 2));

console.log('Audit script completed successfully. Results written to scripts/audit-output.json');
