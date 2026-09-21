// scripts/check-duplicate-content.mjs
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
const enFiles = files.filter(f => !path.relative(blogDir, f).includes('/'));

console.log(`Analyzing ${enFiles.length} English articles for cross-article duplicate paragraphs...`);

const paragraphMap = new Map(); // normalized paragraph -> [articleSlug]

for (const file of enFiles) {
  const slug = path.basename(file, '.md');
  const content = fs.readFileSync(file, 'utf-8');
  // Strip frontmatter
  const body = content.replace(/^---[\s\S]*?---/, '');
  // Split into paragraphs
  const paragraphs = body.split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => {
      // Ignore headings, code blocks, tables, lists, short lines, math blocks
      if (p.startsWith('#')) return false;
      if (p.startsWith('```')) return false;
      if (p.startsWith('|')) return false;
      if (p.startsWith('$$')) return false;
      if (p.length < 80) return false;
      return true;
    });

  for (const p of paragraphs) {
    // Normalize paragraph: remove markdown formatting and whitespace
    const norm = p.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`]/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    
    if (!paragraphMap.has(norm)) paragraphMap.set(norm, []);
    paragraphMap.get(norm).push(slug);
  }
}

const duplicates = [...paragraphMap.entries()].filter(([p, slugs]) => new Set(slugs).size > 1);
console.log(`Exact Duplicate Paragraphs Found across English articles: ${duplicates.length}`);
for (const [p, slugs] of duplicates) {
  console.log(`  Found in [${[...new Set(slugs)].join(', ')}]: "${p.slice(0, 80)}..."`);
}
