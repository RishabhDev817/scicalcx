// scripts/audit-a11y.mjs
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
let totalImages = 0;
let missingAltImages = [];
let totalButtons = 0;
let unlabelledButtons = [];

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  const content = fs.readFileSync(file, 'utf-8');

  // Check <img> tags
  const imgMatches = content.matchAll(/<img([^>]*)>/gi);
  for (const m of imgMatches) {
    totalImages++;
    const attrs = m[1];
    if (!attrs.includes('alt=')) {
      missingAltImages.push({ file: relPath, tag: m[0] });
    }
  }

  // Check <button> tags
  const buttonMatches = content.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/gi);
  for (const m of buttonMatches) {
    totalButtons++;
    const attrs = m[1];
    const innerText = m[2].replace(/<[^>]+>/g, '').trim();
    const hasAriaLabel = attrs.includes('aria-label=') || attrs.includes('aria-labelledby=');
    const hasTitle = attrs.includes('title=');
    if (!innerText && !hasAriaLabel && !hasTitle) {
      unlabelledButtons.push({ file: relPath, tag: m[0].slice(0, 80) });
    }
  }
}

console.log(`Total <img> tags checked: ${totalImages}`);
console.log(`Missing alt images: ${missingAltImages.length}`);
if (missingAltImages.length > 0) console.log(missingAltImages.slice(0, 10));

console.log(`Total <button> tags checked: ${totalButtons}`);
console.log(`Unlabelled buttons: ${unlabelledButtons.length}`);
if (unlabelledButtons.length > 0) console.log(unlabelledButtons.slice(0, 10));
