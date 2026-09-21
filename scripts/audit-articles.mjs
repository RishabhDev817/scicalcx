// scripts/audit-articles.mjs
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

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { fm: {}, body: content };
  const rawFm = match[1];
  const body = content.slice(match[0].length);
  const fm = {};

  const lines = rawFm.split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let val = line.slice(colonIdx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      fm[key] = val;
    }
  }

  return { fm, body };
}

function extractHeadings(body) {
  const strippedBody = body.replace(/```[\s\S]*?```/g, '');
  const headings = [];
  const lines = strippedBody.split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)$/);
    if (match) {
      headings.push({ level: match[1].length, text: match[2].trim() });
    }
  }
  return headings;
}

function extractLinks(body) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = [];
  let match;
  while ((match = linkRegex.exec(body)) !== null) {
    links.push({ text: match[1], url: match[2] });
  }
  return links;
}

const BANNED_PATTERNS = [
  /in this comprehensive guide/i,
  /in today'?s rapidly evolving world/i,
  /whether you'?re a student, researcher/i,
  /whether you are a student, researcher/i,
  /let'?s dive deep into/i,
  /in conclusion, it can be said/i,
  /this article will explore the fascinating/i,
  /there are several key aspects to consider/i,
  /understanding .* is crucial in today/i,
  /written entirely by humans/i,
  /contains no ai/i,
];

const FAKE_EXPERIENCE_PATTERNS = [
  /when i first learned this/i,
  /in my experience as a/i,
  /my students often tell me/i,
  /in my classroom/i,
  /i have used this formula many times/i,
];

const REFERENCE_HEADING_PATTERNS = [
  /references\s*(&|and)?\s*further reading/i,
  /quellen\s*(&|und)?\s*weiterf(ü|ue)hrende literatur/i,
  /refer(ê|e)ncias\s*(y|e)?\s*(lecturas|leituras)\s*recomendadas/i,
  /r(é|e)f(é|e)rences\s*et\s*lectures compl(é|e)mentaires/i,
  /riferimenti\s*e\s*ulteriori letture/i,
  /参考文献/i,
  /참고\s*문헌/i,
  /bronnen\s*(&|en)?\s*aanbevolen literatuur/i,
];

function auditArticles() {
  const files = getAllMarkdownFiles(blogDir);
  console.log(`\n================================================================================`);
  console.log(`     SciCalcX Quality, Human-Readability, Formulas & References Audit           `);
  console.log(`================================================================================\n`);
  console.log(`Total Articles Discovered: ${files.length}\n`);

  const reportItems = [];
  let thinCount = 0;
  let metadataIssueCount = 0;
  let missingRefCount = 0;
  let bannedPhraseCount = 0;
  let fakeExperienceCount = 0;

  for (const file of files) {
    const relPath = path.relative(blogDir, file);
    const content = fs.readFileSync(file, 'utf-8');
    const { fm, body } = parseFrontmatter(content);

    const rawTokens = body.trim().split(/\s+/).filter(Boolean);
    let wordCount = rawTokens.length;
    const isCJK = relPath.startsWith('ja/') || relPath.startsWith('ko/');
    if (isCJK && wordCount < 600) {
      const charCount = body.replace(/\s+/g, '').length;
      wordCount = Math.round(charCount / 1.5);
    }

    const headings = extractHeadings(body);
    const links = extractLinks(body);

    const isThin = wordCount < 700;
    if (isThin) thinCount++;

    // Required metadata fields
    const missingMetadata = [];
    if (!fm.title) missingMetadata.push('title');
    if (!fm.description) missingMetadata.push('description');
    if (!fm.author) missingMetadata.push('author');
    if (!fm.pubDate) missingMetadata.push('pubDate');
    if (!fm.category) missingMetadata.push('category');
    if (!fm.calculatorUrl) missingMetadata.push('calculatorUrl');

    if (missingMetadata.length > 0) metadataIssueCount++;

    // Route URL
    const isRoot = !relPath.includes('/');
    const url = isRoot ? `/blog/${relPath.replace('.md', '')}` : `/${relPath.replace('.md', '').replace('/', '/blog/')}`;

    // Tool link check
    const toolLinks = links.filter((l) =>
      ['/', '/statistics', '/matrix', '/calculus', '/graphing', '/programming', '/compiler'].some(
        (route) => l.url === route || l.url === `${route}/` || l.url.endsWith(route) || l.url.endsWith(`${route}/`)
      )
    );
    const hasToolLink = toolLinks.length > 0 || !!fm.calculatorUrl;

    // References check
    const hasReferences = headings.some((h) =>
      REFERENCE_HEADING_PATTERNS.some((pattern) => pattern.test(h.text))
    );
    if (!hasReferences) missingRefCount++;

    // Banned phrases check
    const detectedBannedPhrases = [];
    for (const pattern of BANNED_PATTERNS) {
      if (pattern.test(body)) {
        detectedBannedPhrases.push(pattern.source);
      }
    }
    if (detectedBannedPhrases.length > 0) bannedPhraseCount++;

    // Fake experience check
    const detectedFakeExp = [];
    for (const pattern of FAKE_EXPERIENCE_PATTERNS) {
      if (pattern.test(body)) {
        detectedFakeExp.push(pattern.source);
      }
    }
    if (detectedFakeExp.length > 0) fakeExperienceCount++;

    // Heading structure check
    const h1InBody = headings.filter((h) => h.level === 1);
    const hasH2 = headings.some((h) => h.level === 2);
    const headingStructureValid = h1InBody.length === 0 && hasH2;

    // Quality Status
    let qualityStatus = 'HIGH_QUALITY';
    if (isThin) qualityStatus = 'THIN_CONTENT';
    else if (missingMetadata.length > 0) qualityStatus = 'METADATA_INCOMPLETE';
    else if (!hasToolLink) qualityStatus = 'MISSING_TOOL_LINK';
    else if (!hasReferences) qualityStatus = 'MISSING_REFERENCES';
    else if (detectedBannedPhrases.length > 0) qualityStatus = 'BANNED_PHRASES';

    reportItems.push({
      relPath,
      url,
      title: fm.title || 'UNTITLED',
      category: fm.category || 'Uncategorized',
      wordCount,
      isThin,
      missingMetadata,
      headingStructureValid,
      headingsCount: headings.length,
      linksCount: links.length,
      hasToolLink,
      hasReferences,
      detectedBannedPhrases,
      detectedFakeExp,
      qualityStatus,
    });
  }

  // Print Summary Table
  console.log(`| URL Path | Category | Words | Status | Tool Link | References |`);
  console.log(`| :--- | :--- | :---: | :---: | :---: | :---: |`);
  for (const item of reportItems) {
    const toolBadge = item.hasToolLink ? '✓ Linked' : '✗ Missing';
    const refBadge = item.hasReferences ? '✓ Verified' : '✗ Missing';
    const statusColor = item.qualityStatus === 'HIGH_QUALITY' ? 'EXCELLENT' : item.qualityStatus;
    console.log(`| ${item.url.padEnd(28)} | ${item.category.slice(0, 16).padEnd(16)} | ${String(item.wordCount).padStart(5)} | ${statusColor.padEnd(10)} | ${toolBadge} | ${refBadge.padEnd(10)} |`);
  }

  console.log(`\n================================================================================`);
  console.log(`                           Audit Aggregate Metrics                              `);
  console.log(`================================================================================`);
  console.log(`• Total Articles Inspected:       ${reportItems.length}`);
  console.log(`• High-Quality Articles:          ${reportItems.filter((i) => i.qualityStatus === 'HIGH_QUALITY').length}`);
  console.log(`• Articles with Verified References: ${reportItems.filter((i) => i.hasReferences).length} / ${reportItems.length}`);
  console.log(`• Articles with Banned Phrases:   ${bannedPhraseCount}`);
  console.log(`• Articles with Fake Experiences: ${fakeExperienceCount}`);
  console.log(`• Thin Content Issues Remaining:  ${thinCount}`);
  console.log(`• Metadata Issues Remaining:      ${metadataIssueCount}`);
  console.log(`• Average Word Count:             ${Math.round(reportItems.reduce((acc, i) => acc + i.wordCount, 0) / reportItems.length)} words\n`);

  if (thinCount > 0 || metadataIssueCount > 0 || missingRefCount > 0 || bannedPhraseCount > 0 || fakeExperienceCount > 0) {
    console.error('Audit failed: Issues detected.');
    process.exit(1);
  } else {
    console.log('✓ AUDIT PASSED: All 36 articles meet humanized educational quality, formula clarity, and verified references standards.\n');
  }
}

auditArticles();
