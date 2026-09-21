// scripts/analyze-audit.mjs
import fs from 'node:fs';
import path from 'node:path';

const raw = JSON.parse(fs.readFileSync('scripts/audit-output.json', 'utf-8'));
const { results, totalHtml, sitemapCount } = raw;

console.log(`=== SUMMARY AUDIT ANALYSIS ===`);
console.log(`Total HTML files: ${totalHtml}`);
console.log(`Sitemap URLs: ${sitemapCount}`);

// 1. Missing or empty title
const missingTitles = results.filter(r => !r.title);
console.log(`Missing Titles: ${missingTitles.length}`);
if (missingTitles.length) console.log(missingTitles.map(r => r.urlPath));

// 2. Duplicate titles
const titleMap = new Map();
for (const r of results) {
  if (!r.title) continue;
  if (!titleMap.has(r.title)) titleMap.set(r.title, []);
  titleMap.get(r.title).push(r.urlPath);
}
const duplicateTitles = [...titleMap.entries()].filter(([t, urls]) => urls.length > 1);
console.log(`Duplicate Titles: ${duplicateTitles.length}`);
for (const [t, urls] of duplicateTitles) {
  console.log(`  Title: "${t}" -> URLs: ${urls.join(', ')}`);
}

// 3. Missing or empty descriptions
const missingDescriptions = results.filter(r => !r.description);
console.log(`Missing Descriptions: ${missingDescriptions.length}`);
if (missingDescriptions.length) console.log(missingDescriptions.map(r => r.urlPath));

// 4. Duplicate descriptions
const descMap = new Map();
for (const r of results) {
  if (!r.description) continue;
  if (!descMap.has(r.description)) descMap.set(r.description, []);
  descMap.get(r.description).push(r.urlPath);
}
const duplicateDescriptions = [...descMap.entries()].filter(([d, urls]) => urls.length > 1);
console.log(`Duplicate Descriptions: ${duplicateDescriptions.length}`);
for (const [d, urls] of duplicateDescriptions) {
  console.log(`  Desc: "${d.slice(0, 40)}..." -> URLs: ${urls.join(', ')}`);
}

// 5. Canonical analysis
const canonIssues = [];
for (const r of results) {
  if (!r.canonical) {
    canonIssues.push({ url: r.urlPath, issue: 'Missing canonical' });
    continue;
  }
  const expectedUrl = `https://scicalcx.com${r.urlPath}`;
  if (r.canonical !== expectedUrl) {
    canonIssues.push({ url: r.urlPath, canonical: r.canonical, expected: expectedUrl });
  }
}
console.log(`Canonical Mismatches: ${canonIssues.length}`);
for (const c of canonIssues) {
  console.log(`  URL: ${c.url} -> Canonical: ${c.canonical} vs Expected: ${c.expected}`);
}

// 6. H1 issues
const h1Issues = results.filter(r => r.h1Count !== 1);
console.log(`H1 Issues (count != 1): ${h1Issues.length}`);
for (const h of h1Issues) {
  console.log(`  URL: ${h.urlPath} has ${h.h1Count} H1 tags: ${JSON.stringify(h.h1s)}`);
}

// 7. Sitemap vs Indexability
const sitemapIssues = results.filter(r => {
  if (r.isNoindex && r.inSitemap) return true; // noindex in sitemap
  if (!r.isNoindex && !r.inSitemap) return true; // indexable not in sitemap
  return false;
});
console.log(`Sitemap / Indexability Discrepancies: ${sitemapIssues.length}`);
for (const s of sitemapIssues) {
  console.log(`  URL: ${s.urlPath} isNoindex: ${s.isNoindex}, inSitemap: ${s.inSitemap}`);
}

// 8. Placeholders
const placeholderIssues = results.filter(r => r.placeholdersFound.length > 0);
console.log(`Placeholder Issues: ${placeholderIssues.length}`);
for (const p of placeholderIssues) {
  console.log(`  URL: ${p.urlPath} placeholders: ${p.placeholdersFound.join(', ')}`);
}

// 9. KaTeX / Math
const katexIssues = results.filter(r => r.katexParseErrors || r.rawMathDouble > 0);
console.log(`KaTeX / Math issues: ${katexIssues.length}`);
for (const k of katexIssues) {
  console.log(`  URL: ${k.urlPath} katexError: ${k.katexParseErrors}, rawMath: ${k.rawMathDouble}`);
}

// 10. JSON-LD errors
const jsonLdIssues = results.filter(r => r.jsonLdErrors.length > 0);
console.log(`JSON-LD Parse Errors: ${jsonLdIssues.length}`);
