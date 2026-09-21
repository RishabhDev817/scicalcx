// scripts/audit-hreflang.mjs
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
const validUrls = new Set();
for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  let urlPath = '/' + relPath.replace(/index\.html$/, '');
  if (relPath === 'index.html') urlPath = '/';
  if (relPath === '404.html') urlPath = '/404/';
  if (relPath === '500.html') urlPath = '/500/';
  validUrls.add(`https://scicalcx.com${urlPath}`);
}

let hreflangIssues = [];
let totalHreflangs = 0;

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  let pageUrl = 'https://scicalcx.com/' + relPath.replace(/index\.html$/, '');
  if (relPath === 'index.html') pageUrl = 'https://scicalcx.com/';

  const content = fs.readFileSync(file, 'utf-8');
  const hreflangMatches = [...content.matchAll(/<link[^>]*\brel=["']alternate["'][^>]*\bhreflang=["']([^"']*)["'][^>]*\bhref=["']([^"']*)["']/gi)]
    .concat([...content.matchAll(/<link[^>]*\bhreflang=["']([^"']*)["'][^>]*\bhref=["']([^"']*)["'][^>]*\brel=["']alternate["']/gi)]);

  for (const m of hreflangMatches) {
    totalHreflangs++;
    const targetLang = m[1];
    const targetHref = m[2];
    if (!validUrls.has(targetHref)) {
      hreflangIssues.push({
        sourcePage: pageUrl,
        targetLang,
        targetHref,
        issue: 'Target hreflang URL does not exist in build',
      });
    }
  }
}

console.log(`Total Hreflang Tags Checked: ${totalHreflangs}`);
console.log(`Hreflang Issues Found: ${hreflangIssues.length}`);
if (hreflangIssues.length > 0) {
  console.log(hreflangIssues);
}
