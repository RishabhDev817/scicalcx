// scripts/check-heading-math.mjs
import fs from 'node:fs';
import path from 'node:path';

const blogDir = path.resolve('src/content/blog');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  }
  return results;
}

const files = getAllMarkdownFiles(blogDir);
const mathHeadings = [];

for (const file of files) {
  const relPath = path.relative(blogDir, file);
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (/^#{1,6}\s+.*(\$|\\frac|\\sqrt)/.test(line)) {
      mathHeadings.push({ file: relPath, lineNum: idx + 1, text: line });
    }
  });
}

console.log(`Headings with math syntax found: ${mathHeadings.length}`);
for (const h of mathHeadings) {
  console.log(`  ${h.file}:${h.lineNum} -> ${h.text}`);
}
