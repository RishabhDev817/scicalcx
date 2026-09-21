// scripts/audit-forms.mjs
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
let formControlsWithoutLabels = [];

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  const content = fs.readFileSync(file, 'utf-8');

  // Check inputs
  const inputMatches = content.matchAll(/<input([^>]*)>/gi);
  for (const m of inputMatches) {
    const attrs = m[1];
    if (attrs.includes('type="hidden"') || attrs.includes("type='hidden'")) continue;
    const hasAriaLabel = attrs.includes('aria-label=') || attrs.includes('aria-labelledby=');
    const idMatch = attrs.match(/id=["']([^"']*)["']/);
    const id = idMatch ? idMatch[1] : null;
    let hasAssociatedLabel = false;
    if (id) {
      hasAssociatedLabel = content.includes(`for="${id}"`) || content.includes(`for='${id}'`);
    }
    if (!hasAriaLabel && !hasAssociatedLabel) {
      formControlsWithoutLabels.push({ file: relPath, element: 'input', tag: m[0].slice(0, 80) });
    }
  }

  // Check textareas
  const textareaMatches = content.matchAll(/<textarea([^>]*)>/gi);
  for (const m of textareaMatches) {
    const attrs = m[1];
    const hasAriaLabel = attrs.includes('aria-label=') || attrs.includes('aria-labelledby=');
    const idMatch = attrs.match(/id=["']([^"']*)["']/);
    const id = idMatch ? idMatch[1] : null;
    let hasAssociatedLabel = false;
    if (id) {
      hasAssociatedLabel = content.includes(`for="${id}"`) || content.includes(`for='${id}'`);
    }
    if (!hasAriaLabel && !hasAssociatedLabel) {
      formControlsWithoutLabels.push({ file: relPath, element: 'textarea', tag: m[0].slice(0, 80) });
    }
  }

  // Check selects
  const selectMatches = content.matchAll(/<select([^>]*)>/gi);
  for (const m of selectMatches) {
    const attrs = m[1];
    const hasAriaLabel = attrs.includes('aria-label=') || attrs.includes('aria-labelledby=');
    const idMatch = attrs.match(/id=["']([^"']*)["']/);
    const id = idMatch ? idMatch[1] : null;
    let hasAssociatedLabel = false;
    if (id) {
      hasAssociatedLabel = content.includes(`for="${id}"`) || content.includes(`for='${id}'`);
    }
    if (!hasAriaLabel && !hasAssociatedLabel) {
      formControlsWithoutLabels.push({ file: relPath, element: 'select', tag: m[0].slice(0, 80) });
    }
  }
}

console.log(`Unlabelled form controls found: ${formControlsWithoutLabels.length}`);
if (formControlsWithoutLabels.length > 0) {
  console.log(formControlsWithoutLabels);
}
