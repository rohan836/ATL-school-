import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const AI_DIR = path.join(ROOT, 'CURRICULUM/CLASSES/AI');
const MASTER_MD = path.join(AI_DIR, 'AI-CURRICULUM-CLASSES-5-TO-9.md');

const TERM1_MONTHS = new Set(['June', 'July', 'August', 'September', 'October']);
const TERM2_MONTHS = new Set(['November', 'December', 'January', 'February', 'March']);
const ALL_MONTHS_ORDER = [
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
  'March',
];

function parseTableRows(md, expectedCols) {
  return md
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('|') && !/^\|\s*-/.test(line))
    .slice(1) // skip header
    .map((line) =>
      line
        .slice(1, line.endsWith('|') ? -1 : undefined)
        .split('|')
        .map((cell) => cell.trim()),
    )
    .filter((cells) => cells.length === expectedCols);
}

test('AI Classes 5-9 each have a single 10-column curriculum+projects MD and HTML with June-March months, Weeks 01-28, and zero Electronics class cross-mentions', () => {
  for (let grade = 5; grade <= 9; grade += 1) {
    const mdPath = path.join(AI_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.md`);
    const htmlPath = path.join(AI_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.html`);
    assert.equal(fs.existsSync(mdPath), true, `AI Class-${grade} MD missing`);
    assert.equal(fs.existsSync(htmlPath), true, `AI Class-${grade} HTML missing`);

    const md = fs.readFileSync(mdPath, 'utf8');
    assert.match(
      md,
      /\|\s*Term\s*\|\s*Month\s*\|\s*Week\s*\|\s*Module\s*\|\s*Concept \/ Topic\s*\|\s*Project 1\s*\|\s*Project 2\s*\|\s*Project 3\s*\|\s*Project 4\s*\|\s*Project 5\s*\|/,
    );
    assert.doesNotMatch(
      md,
      /(\b\d+\s*min\b|ELECTRONICS-ROBOTICS|electronics class|PROJECTS\.md)/i,
      `AI Class-${grade} must not reference timetable minutes, electronics classes, or PROJECTS.md`,
    );

    const rows = parseTableRows(md, 10);
    assert.ok(rows.length >= 28, `AI Class-${grade} must have >= 28 rows (got ${rows.length})`);

    let prevWeek = 0;
    let prevMonthIdx = 0;
    const seenWeeks = new Set();

    for (const [term, month, week, mod, topic, ...projects] of rows) {
      assert.ok(term === 'Term 1' || term === 'Term 2', `Unexpected term ${term} in AI Class ${grade}`);
      if (term === 'Term 1') {
        assert.ok(TERM1_MONTHS.has(month), `Invalid Term 1 month ${month} in AI Class ${grade}`);
      } else {
        assert.ok(TERM2_MONTHS.has(month), `Invalid Term 2 month ${month} in AI Class ${grade}`);
      }

      const monthIdx = ALL_MONTHS_ORDER.indexOf(month);
      assert.ok(monthIdx >= prevMonthIdx, `Months went backwards in AI Class ${grade}: ${month}`);
      prevMonthIdx = monthIdx;

      const mWeek = /^Week\s+(\d{2})$/.exec(week);
      assert.ok(mWeek, `Bad week format "${week}" in AI Class ${grade}`);
      const weekNum = Number(mWeek[1]);
      assert.ok(weekNum >= 1 && weekNum <= 28, `Week out of range in AI Class ${grade}: ${weekNum}`);
      assert.ok(weekNum >= prevWeek, `Weeks went backwards in AI Class ${grade}: ${weekNum}`);
      prevWeek = weekNum;
      seenWeeks.add(weekNum);

      assert.ok(mod.startsWith('Module '), `Invalid module name in AI Class ${grade}: ${mod}`);
      assert.ok(topic.length > 0, `Empty topic in AI Class ${grade}`);
      assert.equal(projects.length, 5, `Must have 5 projects in AI Class ${grade} (${topic})`);
      for (const p of projects) {
        assert.ok(p.length >= 4 && p.length <= 60, `Project title "${p}" invalid length in AI Class ${grade}`);
      }
    }

    for (let w = 1; w <= 28; w += 1) {
      assert.equal(seenWeeks.has(w), true, `AI Class-${grade} missing Week ${String(w).padStart(2, '0')}`);
    }

    // Core required AI pillars across all classes 5-9
    const fullText = rows.map((r) => `${r[3]} | ${r[4]}`).join('\n');
    for (const core of [/GPU/i, /Logic Gate|Boolean|ALU/i, /Python/i, /Vision|Pixel|OpenCV/i, /NLP|Language|Transformer|ChatGPT/i, /Reinforcement Learning|AlphaGo|RL/i, /AlphaGenome|AlphaFold/i, /Robotics|Physical AI|Raspberry Pi/i]) {
      assert.match(fullText, core, `AI Class-${grade} missing core AI pillar ${core}`);
    }
  }
});

test('Age-scaled programming progression across AI Classes 5-9 (Python Basics -> OOP Python + PyTorch + C++)', () => {
  const c5 = fs.readFileSync(path.join(AI_DIR, 'Class-5/CLASS-5-CURRICULUM.md'), 'utf8');
  const c6 = fs.readFileSync(path.join(AI_DIR, 'Class-6/CLASS-6-CURRICULUM.md'), 'utf8');
  const c7 = fs.readFileSync(path.join(AI_DIR, 'Class-7/CLASS-7-CURRICULUM.md'), 'utf8');
  const c8 = fs.readFileSync(path.join(AI_DIR, 'Class-8/CLASS-8-CURRICULUM.md'), 'utf8');
  const c9 = fs.readFileSync(path.join(AI_DIR, 'Class-9/CLASS-9-CURRICULUM.md'), 'utf8');

  assert.match(c5, /Jupyter/i);
  assert.match(c6, /Jupyter/i);
  assert.match(c7, /\bC\+\+/i);
  assert.match(c7, /PyTorch/i);
  assert.match(c8, /Object-Oriented Python/i);
  assert.match(c8, /\bC\+\+/i);
  assert.match(c8, /PyTorch/i);
  assert.match(c9, /Object-Oriented Python/i);
  assert.match(c9, /C\+\+ OOP/i);
  assert.match(c9, /PyTorch/i);
  assert.match(c9, /TinyML/i);
});

test('AI Master unified curriculum combines all Class 5-9 rows in ONE single 11-column table matching class files', () => {
  const masterMd = fs.readFileSync(MASTER_MD, 'utf8');
  const masterHtmlPath = MASTER_MD.replace(/\.md$/, '.html');
  assert.equal(fs.existsSync(masterHtmlPath), true, 'AI Master HTML missing');

  assert.match(
    masterMd,
    /\|\s*Class\s*\|\s*Term\s*\|\s*Month\s*\|\s*Week\s*\|\s*Module\s*\|\s*Concept \/ Topic\s*\|\s*Project 1\s*\|\s*Project 2\s*\|\s*Project 3\s*\|\s*Project 4\s*\|\s*Project 5\s*\|/,
  );

  const separators = masterMd.split('\n').filter((line) => /^\|\s*---/.test(line.trim()));
  assert.equal(separators.length, 1, 'AI Master curriculum must contain exactly ONE table');

  const masterRows = parseTableRows(masterMd, 11);
  const expectedRows = [];
  for (let grade = 5; grade <= 9; grade += 1) {
    const md = fs.readFileSync(path.join(AI_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.md`), 'utf8');
    for (const row of parseTableRows(md, 10)) {
      expectedRows.push([`Class ${grade}`, ...row]);
    }
  }
  assert.deepEqual(masterRows, expectedRows, 'AI Master table must match Class 5-9 files verbatim');
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
