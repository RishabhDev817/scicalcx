// scripts/audit-math-rendering.mjs
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
const articleFiles = htmlFiles.filter(f => f.includes('/blog/') && !f.endsWith('/blog/index.html'));

console.log(`Inspecting ${articleFiles.length} article pages for mathematical formula rendering...`);

let totalInlineMath = 0;
let totalBlockMath = 0;
let parseErrors = 0;
let unrenderedMathDelimiters = [];

for (const file of articleFiles) {
  const relPath = path.relative(distDir, file);
  const content = fs.readFileSync(file, 'utf-8');

  // Count KaTeX rendered elements
  const katexMatches = content.matchAll(/<span class="katex">/gi);
  for (const _ of katexMatches) {
    totalInlineMath++;
  }
  const katexDisplayMatches = content.matchAll(/<span class="katex-display">/gi);
  for (const _ of katexDisplayMatches) {
    totalBlockMath++;
  }

  // Check for KaTeX parse errors
  if (content.includes('class="katex-error"') || content.includes('ParseError: KaTeX')) {
    parseErrors++;
  }

  // Strip scripts, styles, pre, code, katex spans
  const stripped = content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, '')
    .replace(/<code[^>]*>[\s\S]*?<\/code>/gi, '')
    .replace(/<span class="katex"[\s\S]*?<\/span>\s*<\/span>\s*<\/span>/gi, '');

  // Look for unrendered dollar math like $x^2$ or $$x^2$$
  const unrenderedMatch = stripped.match(/\$[a-zA-Z0-9\\_^{}\(\)+=-]{2,}\$/g);
  if (unrenderedMatch) {
    unrenderedMathDelimiters.push({ file: relPath, unrendered: unrenderedMatch });
  }
}

console.log(`Total KaTeX Expressions Rendered: ${totalInlineMath}`);
console.log(`Total KaTeX Block Math Elements: ${totalBlockMath}`);
console.log(`KaTeX Parse Errors: ${parseErrors}`);
console.log(`Unrendered Math Delimiters: ${unrenderedMathDelimiters.length}`);
if (unrenderedMathDelimiters.length > 0) {
  console.log(unrenderedMathDelimiters);
}
