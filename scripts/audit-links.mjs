// scripts/audit-links.mjs
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
const existingPaths = new Set();

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  let urlPath = '/' + relPath.replace(/index\.html$/, '');
  if (relPath === 'index.html') urlPath = '/';
  if (relPath === '404.html') urlPath = '/404/';
  if (relPath === '500.html') urlPath = '/500/';
  existingPaths.add(urlPath);
  // Also add without trailing slash for testing
  if (urlPath.endsWith('/') && urlPath.length > 1) {
    existingPaths.add(urlPath.slice(0, -1));
  }
}

// Add static assets in dist
function getAllDistFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllDistFiles(filePath));
    } else {
      results.push(filePath);
    }
  }
  return results;
}
const allDistFiles = getAllDistFiles(distDir);
const staticAssetPaths = new Set();
for (const file of allDistFiles) {
  const relPath = '/' + path.relative(distDir, file);
  staticAssetPaths.add(relPath);
}

let totalLinksChecked = 0;
let brokenLinks = [];
let internalLinkCounts = new Map(); // url -> incoming link count
let outgoingLinkCounts = new Map(); // url -> outgoing link count

for (const p of existingPaths) {
  if (p.endsWith('/') || p === '/') {
    internalLinkCounts.set(p, 0);
    outgoingLinkCounts.set(p, 0);
  }
}

const externalLinks = new Set();

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  let sourceUrl = '/' + relPath.replace(/index\.html$/, '');
  if (relPath === 'index.html') sourceUrl = '/';
  if (relPath === '404.html') sourceUrl = '/404/';
  if (relPath === '500.html') sourceUrl = '/500/';

  const content = fs.readFileSync(file, 'utf-8');
  const linkMatches = content.matchAll(/<a[^>]*\bhref=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi);

  let outgoing = 0;
  for (const m of linkMatches) {
    let href = m[1].trim();
    if (!href || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      continue;
    }
    totalLinksChecked++;

    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (href.startsWith('https://scicalcx.com')) {
        href = href.replace('https://scicalcx.com', '');
        if (!href) href = '/';
      } else {
        externalLinks.add(href);
        continue;
      }
    }

    outgoing++;

    // Strip hash or query
    const cleanHref = href.split('#')[0].split('?')[0];
    if (!cleanHref) continue; // just an anchor on the same page

    // Check if cleanHref exists in existingPaths or staticAssetPaths
    const exists = existingPaths.has(cleanHref) || staticAssetPaths.has(cleanHref) || cleanHref === '/sitemap.xml';
    if (!exists) {
      brokenLinks.push({
        source: sourceUrl,
        target: href,
        cleanTarget: cleanHref,
        text: m[2].replace(/<[^>]+>/g, '').trim().slice(0, 30),
      });
    } else {
      // Normalize target to directory slash if in existingPaths
      let targetDir = cleanHref;
      if (!targetDir.endsWith('/') && existingPaths.has(targetDir + '/')) {
        targetDir += '/';
      }
      if (internalLinkCounts.has(targetDir)) {
        internalLinkCounts.set(targetDir, internalLinkCounts.get(targetDir) + 1);
      }
    }
  }

  if (outgoingLinkCounts.has(sourceUrl)) {
    outgoingLinkCounts.set(sourceUrl, outgoing);
  }
}

console.log(`Total Links Inspected: ${totalLinksChecked}`);
console.log(`Unique External Links: ${externalLinks.size}`);
console.log(`Broken Internal Links: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log('Broken link details:');
  console.log(brokenLinks.slice(0, 20));
}

// Find orphan pages (0 incoming links, ignoring 404 and 500)
const orphanPages = [];
for (const [url, count] of internalLinkCounts.entries()) {
  if (count === 0 && url !== '/404/' && url !== '/500/' && url !== '/') {
    orphanPages.push(url);
  }
}
console.log(`Orphan Pages (0 incoming links): ${orphanPages.length}`);
if (orphanPages.length > 0) {
  console.log(orphanPages);
}

// Pages with 0 outgoing links
const deadEndPages = [];
for (const [url, count] of outgoingLinkCounts.entries()) {
  if (count === 0 && url !== '/500/') {
    deadEndPages.push(url);
  }
}
console.log(`Dead End Pages (0 outgoing links): ${deadEndPages.length}`);
if (deadEndPages.length > 0) {
  console.log(deadEndPages);
}

// External links summary
fs.writeFileSync('scripts/external-links.json', JSON.stringify([...externalLinks], null, 2));
