// scripts/audit-page-lengths.mjs
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
const pageMetrics = [];

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  let urlPath = '/' + relPath.replace(/index\.html$/, '');
  if (relPath === 'index.html') urlPath = '/';
  if (relPath === '404.html') urlPath = '/404/';
  if (relPath === '500.html') urlPath = '/500/';

  const content = fs.readFileSync(file, 'utf-8');
  
  // Extract visible body text (strip head, scripts, styles, svg, and tags)
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const rawBody = bodyMatch ? bodyMatch[1] : content;
  
  const textContent = rawBody
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const words = textContent.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  
  pageMetrics.push({
    url: urlPath,
    words: wordCount,
    chars: textContent.length,
    isCJK: urlPath.startsWith('/ja/') || urlPath.startsWith('/ko/'),
  });
}

pageMetrics.sort((a, b) => a.words - b.words);

console.log(`=== PAGE WORD COUNT AUDIT (Lowest 15 Pages) ===`);
for (const p of pageMetrics.slice(0, 15)) {
  console.log(`  ${p.url.padEnd(35)} : ${String(p.words).padStart(5)} words (${p.chars} chars)`);
}

console.log(`\n=== PAGE WORD COUNT AUDIT (Highest 10 Pages) ===`);
for (const p of pageMetrics.slice(-10)) {
  console.log(`  ${p.url.padEnd(35)} : ${String(p.words).padStart(5)} words (${p.chars} chars)`);
}

const under300 = pageMetrics.filter(p => !p.isCJK && p.words < 300);
console.log(`\nNon-CJK Pages under 300 words: ${under300.length}`);
if (under300.length > 0) {
  console.log(under300);
}
