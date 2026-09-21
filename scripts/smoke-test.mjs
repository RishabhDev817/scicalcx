// scripts/smoke-test.mjs
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const sampleRoutes = [
  { name: 'Homepage (Scientific)', path: 'index.html', checks: ['fx', 'key-action', 'data-key="equals"'] },
  { name: 'Matrix Tool', path: 'matrix/index.html', checks: ['Matrix', 'cell-a', 'data-op="add"'] },
  { name: 'Calculus Suite', path: 'calculus/index.html', checks: ['Calculus', 'btn-integrate-definite', 'def-expr'] },
  { name: 'Statistics Tool', path: 'statistics/index.html', checks: ['Statistics', 'data-input', 'stat-mean'] },
  { name: 'Graphing Tool', path: 'graphing/index.html', checks: ['Graph', 'graph-canvas'] },
  { name: 'Programmer Bitboard', path: 'programming/index.html', checks: ['Programmer', 'bit-grid', 'btn-bit-action'] },
  { name: 'Code Tutor & Compiler', path: 'compiler/index.html', checks: ['Code Tutor', 'code-editor', 'btn-run-code'] },
  { name: 'Blog Index', path: 'blog/index.html', checks: ['Articles', 'Quadratic Formula', 'Derivative Rules'] },
  { name: 'Math Article: Quadratic Formula', path: 'blog/quadratic-formula/index.html', checks: ['Solving Quadratic Equations', 'katex', 'discriminant'] },
  { name: 'Math Article: Derivative Rules', path: 'blog/derivative-rules/index.html', checks: ['Essential Derivative Rules', 'katex', 'Power Rule'] },
  { name: 'Math Article: Standard Deviation', path: 'blog/standard-deviation/index.html', checks: ['Standard Deviation', 'katex', 'variance'] },
  { name: 'Math Article: Matrix Multiplication', path: 'blog/matrix-multiplication/index.html', checks: ['Matrix Multiplication', 'katex', 'dot product'] },
  { name: 'Programming Article (C++ Pointers)', path: 'blog/pointers-cpp/index.html', checks: ['C++ Pointers', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'Localized Article: Spanish (es)', path: 'es/blog/pointers-cpp/index.html', checks: ['Punteros en C++', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'Localized Article: Japanese (ja)', path: 'ja/blog/pointers-cpp/index.html', checks: ['C++ポインタ完全解説', 'スタック', 'ヒープ'] },
  { name: 'Localized Article: French (fr)', path: 'fr/blog/pointers-cpp/index.html', checks: ['Pointeurs en C++', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'Localized Article: German (de)', path: 'de/blog/pointers-cpp/index.html', checks: ['Zeiger in C++', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'Localized Article: Dutch (nl)', path: 'nl/blog/pointers-cpp/index.html', checks: ['Pointers in C++', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'Localized Article: Portuguese (pt)', path: 'pt/blog/pointers-cpp/index.html', checks: ['Ponteiros em C++', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'Localized Article: Korean (ko)', path: 'ko/blog/pointers-cpp/index.html', checks: ['C++ 포인터', '스택', '힙'] },
  { name: 'Localized Article: Italian (it)', path: 'it/blog/pointers-cpp/index.html', checks: ['Puntatori in C++', 'Stack', 'Heap', 'unique_ptr'] },
  { name: 'About Us', path: 'about/index.html', checks: ['About SciCalcX', 'Rishabh', 'Riya', 'GitHub'] },
  { name: 'Contact Support', path: 'contact/index.html', checks: ['Contact Support', 'support@scicalcx.com', 'form'] },
  { name: 'Privacy Policy', path: 'privacy/index.html', checks: ['Privacy Policy', 'Google AdSense', 'localStorage', 'cookies'] },
  { name: 'Terms of Service', path: 'terms/index.html', checks: ['Terms of Service', 'Intellectual Property', 'Limitation of Liability'] },
  { name: 'Editorial Integrity', path: 'editorial-integrity/index.html', checks: ['Editorial Integrity', 'Academic Rigor'] },
  { name: '404 Page Not Found', path: '404.html', checks: ['404', 'Page Not Found', 'Available Tools & Resources', 'noindex'] },
];

console.log(`Executing production smoke tests on ${sampleRoutes.length} representative pages...\n`);

let passedCount = 0;
let failedCount = 0;

for (const sample of sampleRoutes) {
  const fullPath = path.join(distDir, sample.path);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ [FAIL] Missing file: ${sample.path} (${sample.name})`);
    failedCount++;
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  const titleMatch = content.match(/<title>([^<]*)<\/title>/);
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const descMatch = content.match(/name="description" content="([^"]*)"/);
  const canonicalMatch = content.match(/rel="canonical" href="([^"]*)"/);

  let failedChecks = [];
  for (const check of sample.checks) {
    if (!content.includes(check)) {
      failedChecks.push(check);
    }
  }

  if (failedChecks.length > 0 || !titleMatch || !h1Match || !descMatch || !canonicalMatch) {
    console.error(`❌ [FAIL] ${sample.name} (${sample.path})`);
    if (failedChecks.length > 0) console.error(`   Missing substrings: ${failedChecks.join(', ')}`);
    if (!titleMatch) console.error(`   Missing <title>`);
    if (!h1Match) console.error(`   Missing <h1>`);
    if (!descMatch) console.error(`   Missing meta description`);
    if (!canonicalMatch) console.error(`   Missing canonical link`);
    failedCount++;
  } else {
    console.log(`✓ [PASS] ${sample.name.padEnd(38)} -> Title: "${titleMatch[1].slice(0, 35)}...", H1: Verified, Canon: ${canonicalMatch[1]}`);
    passedCount++;
  }
}

console.log(`\nSmoke Test Summary: ${passedCount} Passed, ${failedCount} Failed.`);
if (failedCount > 0) process.exit(1);
