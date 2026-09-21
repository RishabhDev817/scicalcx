// scripts/audit-structured-data.mjs
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const sampleFiles = [
  'index.html',
  'matrix/index.html',
  'compiler/index.html',
  'blog/quadratic-formula/index.html',
  'es/blog/pointers-cpp/index.html',
  'about/index.html',
  'privacy/index.html',
];

for (const rel of sampleFiles) {
  const fullPath = path.join(distDir, rel);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf-8');
  console.log(`\n================== ${rel} ==================`);
  const matches = content.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const m of matches) {
    try {
      const parsed = JSON.parse(m[1]);
      console.log(JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.error('Invalid JSON-LD:', e.message);
    }
  }
}
