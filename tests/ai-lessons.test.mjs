import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const AI_DIR = path.join(ROOT, 'CURRICULUM/CLASSES/AI');
const MASTER_MD = path.join(AI_DIR, 'AI-CURRICULUM-CLASSES-5-TO-9.md');
const SOURCE_ATTACHMENT = path.join(ROOT, 'public/assets/aistudio/gemini-code-1795200700748_c76e9917.md');

function parseTables(md, expectedCols) {
  const lines = md.split('\n');
  const tables = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith('|') && i + 1 < lines.length && /^\|\s*---/.test(lines[i + 1].trim())) {
      const parseRow = (rowLine) =>
        rowLine
          .trim()
          .slice(1, rowLine.trim().endsWith('|') ? -1 : undefined)
          .split('|')
          .map((c) => c.trim());
      const header = parseRow(lines[i]);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = parseRow(lines[i]);
        if (cells.length === expectedCols) rows.push(cells);
        i += 1;
      }
      tables.push({ header, rows });
    } else {
      i += 1;
    }
  }
  return tables;
}

test('AI Master curriculum matches attached source MD file word-for-word with zero extra words', () => {
  const masterMd = fs.readFileSync(MASTER_MD, 'utf8').trim();
  const sourceMd = fs.readFileSync(SOURCE_ATTACHMENT, 'utf8').trim();
  assert.equal(masterMd, sourceMd, 'AI Master MD must match attached MD verbatim');

  const masterHtmlPath = MASTER_MD.replace(/\.md$/, '.html');
  assert.equal(fs.existsSync(masterHtmlPath), true, 'AI Master HTML missing');

  const tables = parseTables(masterMd, 7);
  assert.equal(tables.length, 2, 'Master AI curriculum must have Term 1 and Term 2 tables');
  assert.equal(tables[0].rows.length, 6, 'Term 1 must have 6 contents');
  assert.equal(tables[1].rows.length, 6, 'Term 2 must have 6 contents');
});

test('AI Classes 5-9 each match Term 1 and Term 2 rows from Master curriculum word-for-word', () => {
  const masterMd = fs.readFileSync(MASTER_MD, 'utf8');
  const masterTables = parseTables(masterMd, 7);
  const masterRows = [...masterTables[0].rows, ...masterTables[1].rows];

  for (let grade = 5; grade <= 9; grade += 1) {
    const mdPath = path.join(AI_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.md`);
    const htmlPath = path.join(AI_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.html`);
    assert.equal(fs.existsSync(mdPath), true, `AI Class-${grade} MD missing`);
    assert.equal(fs.existsSync(htmlPath), true, `AI Class-${grade} HTML missing`);

    const md = fs.readFileSync(mdPath, 'utf8');
    assert.match(md, /^# Class \d AI & Python Curriculum/m);
    assert.match(md, /## Term 1: The Connected Foundations \(Contents 1–6\)/);
    assert.match(md, /## Term 2: Building Real AI Systems \(Contents 7–12\)/);
    assert.doesNotMatch(md, /\bWeek\s+\d+\b/i, `AI Class-${grade} must have no weeks`);
    assert.doesNotMatch(md, /(ELECTRONICS-ROBOTICS|electronics class|PROJECTS\.md)/i);

    const tables = parseTables(md, 3);
    assert.equal(tables.length, 2, `AI Class-${grade} must have Term 1 and Term 2 tables`);
    assert.equal(tables[0].rows.length, 6, `AI Class-${grade} Term 1 must have 6 rows`);
    assert.equal(tables[1].rows.length, 6, `AI Class-${grade} Term 2 must have 6 rows`);

    const gradeRows = [...tables[0].rows, ...tables[1].rows];
    const colIdx = grade - 3; // Class 5 -> col 2 ... Class 9 -> col 6
    gradeRows.forEach((row, idx) => {
      assert.equal(row[0], masterRows[idx][0], `Class ${grade} row ${idx + 1} # mismatch`);
      assert.equal(row[1], masterRows[idx][1], `Class ${grade} row ${idx + 1} Content mismatch`);
      assert.equal(row[2], masterRows[idx][colIdx], `Class ${grade} row ${idx + 1} cell mismatch`);
    });
  }
});

test('Generated AI HTML renders real <br> breaks instead of escaped &lt;br&gt;', () => {
  const masterHtml = fs.readFileSync(MASTER_MD.replace(/\.md$/, '.html'), 'utf8');
  assert.doesNotMatch(masterHtml, /&lt;br&gt;/i, 'HTML must not contain escaped &lt;br&gt;');
  assert.match(masterHtml, /<br><strong>Project:<\/strong>/, 'HTML must render clean <br><strong>Project:</strong>');
});

test('No separate PROJECTS.md or forbidden HTML files exist under CURRICULUM/CLASSES/AI', () => {
  const forbidden = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/^projects\.(md|html)$/i.test(entry.name) || /^(readme|agents|claude|skill)\.html$/i.test(entry.name)) {
        forbidden.push(full);
      }
    }
  }
  walk(AI_DIR);
  assert.deepEqual(forbidden, [], `Found forbidden files under AI/: ${forbidden.join(', ')}`);
});
