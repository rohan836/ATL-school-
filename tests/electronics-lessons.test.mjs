import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ELEC_DIR = path.join(ROOT, 'CURRICULUM/CLASSES/ELECTRONICS-ROBOTICS');
const MASTER_MD = path.join(
  ELEC_DIR,
  'FRAMEWORK-AND-GUIDES/ELECTRONICS-ROBOTICS-CURRICULUM-CLASSES-5-TO-9.md',
);

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
    .slice(1) // skip header row
    .map((line) =>
      line
        .slice(1, line.endsWith('|') ? -1 : undefined)
        .split('|')
        .map((cell) => cell.trim()),
    )
    .filter((cells) => cells.length === expectedCols);
}

test('Classes 5-9 each have a single 10-column unified curriculum+projects MD and HTML with real months, Weeks 01-28, and starter essentials', () => {
  for (let grade = 5; grade <= 9; grade += 1) {
    const mdPath = path.join(ELEC_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.md`);
    const htmlPath = path.join(ELEC_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.html`);
    assert.equal(fs.existsSync(mdPath), true, `Class-${grade} MD missing`);
    assert.equal(fs.existsSync(htmlPath), true, `Class-${grade} HTML missing`);

    const md = fs.readFileSync(mdPath, 'utf8');
    assert.match(
      md,
      /\|\s*Term\s*\|\s*Month\s*\|\s*Week\s*\|\s*Module\s*\|\s*Component \/ Topic\s*\|\s*Project 1\s*\|\s*Project 2\s*\|\s*Project 3\s*\|\s*Project 4\s*\|\s*Project 5\s*\|/,
    );
    assert.doesNotMatch(
      md,
      /(\b\d+\s*min\b|Passport|Timetable|Day 1|Day 2|Day 3|artificial intelligence|\bLLM\b|PROJECTS\.md)/i,
      `Class-${grade} curriculum must not contain timetable numbers, AI topics, or PROJECTS.md refs`,
    );

    const rows = parseTableRows(md, 10);
    assert.ok(rows.length >= 28, `Class-${grade} should have at least 28 rows (got ${rows.length})`);

    let prevWeek = 0;
    let prevMonthIdx = 0;
    const seenWeeks = new Set();

    for (const [term, month, week, mod, component, ...projects] of rows) {
      assert.ok(term === 'Term 1' || term === 'Term 2', `Unexpected term ${term} in Class ${grade}`);
      if (term === 'Term 1') {
        assert.ok(TERM1_MONTHS.has(month), `Term 1 month ${month} invalid in Class ${grade}`);
      } else {
        assert.ok(TERM2_MONTHS.has(month), `Term 2 month ${month} invalid in Class ${grade}`);
      }

      const monthIdx = ALL_MONTHS_ORDER.indexOf(month);
      assert.ok(monthIdx >= prevMonthIdx, `Months went backwards in Class ${grade}: ${month}`);
      prevMonthIdx = monthIdx;

      const mWeek = /^Week\s+(\d{2})$/.exec(week);
      assert.ok(mWeek, `Bad week format "${week}" in Class ${grade}`);
      const weekNum = Number(mWeek[1]);
      assert.ok(weekNum >= 1 && weekNum <= 28, `Week out of range 01-28 in Class ${grade}: ${weekNum}`);
      assert.ok(weekNum >= prevWeek, `Weeks went backwards in Class ${grade}: ${weekNum}`);
      prevWeek = weekNum;
      seenWeeks.add(weekNum);

      assert.ok(mod.startsWith('Module '), `Invalid module name in Class ${grade}: ${mod}`);
      assert.ok(component.length > 0, `Empty component in Class ${grade}`);
      assert.equal(projects.length, 5, `Must have 5 projects in Class ${grade} (${component})`);
      for (const p of projects) {
        assert.ok(p.length >= 4 && p.length <= 60, `Project title "${p}" out of range in Class ${grade}`);
      }
    }

    for (let w = 1; w <= 28; w += 1) {
      assert.equal(seenWeeks.has(w), true, `Class-${grade} missing Week ${String(w).padStart(2, '0')}`);
    }

    // Essential starters must appear explicitly in early weeks / Term 1 of every grade 5-9
    const juneJulyText = rows
      .filter(([, month]) => month === 'June' || month === 'July')
      .map((r) => r[4])
      .join(' | ');
    for (const essential of [/AC vs DC/i, /Resistor/i, /LED/i, /DMM|Multimeter/i]) {
      assert.match(juneJulyText, essential, `Class-${grade} June-July rows missing starter ${essential}`);
    }
    const term1Text = rows
      .filter(([term]) => term === 'Term 1')
      .map((r) => r[4])
      .join(' | ');
    for (const essential of [/Capacitor/i, /Diode/i, /Transistor/i]) {
      assert.match(term1Text, essential, `Class-${grade} Term 1 missing essential component ${essential}`);
    }
  }
});

test('Master unified curriculum file combines all Class 5-9 rows in ONE single 11-column table matching class files', () => {
  const masterMd = fs.readFileSync(MASTER_MD, 'utf8');
  const masterHtmlPath = MASTER_MD.replace(/\.md$/, '.html');
  assert.equal(fs.existsSync(masterHtmlPath), true, 'Master curriculum HTML missing');

  assert.match(
    masterMd,
    /\|\s*Class\s*\|\s*Term\s*\|\s*Month\s*\|\s*Week\s*\|\s*Module\s*\|\s*Component \/ Topic\s*\|\s*Project 1\s*\|\s*Project 2\s*\|\s*Project 3\s*\|\s*Project 4\s*\|\s*Project 5\s*\|/,
  );

  // Only one table header separator line inside master MD
  const separators = masterMd.split('\n').filter((line) => /^\|\s*---/.test(line.trim()));
  assert.equal(separators.length, 1, 'Master curriculum must contain exactly ONE table');

  const masterRows = parseTableRows(masterMd, 11);
  const expectedRows = [];
  for (let grade = 5; grade <= 9; grade += 1) {
    const md = fs.readFileSync(path.join(ELEC_DIR, `Class-${grade}/CLASS-${grade}-CURRICULUM.md`), 'utf8');
    for (const row of parseTableRows(md, 10)) {
      expectedRows.push([`Class ${grade}`, ...row]);
    }
  }
  assert.deepEqual(masterRows, expectedRows, 'Master unified table rows must match Class 5-9 files verbatim');
});

test('No separate PROJECTS.md, TEACHER-NOTES, or Class-5/LESSONS remain, and no broken PROJECTS.md links exist', () => {
  assert.equal(fs.existsSync(path.join(ELEC_DIR, 'Class-5/LESSONS')), false);

  const forbidden = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/^(projects|teacher-notes)\.(md|html)$/i.test(entry.name)) forbidden.push(full);
    }
  }
  walk(ELEC_DIR);
  assert.deepEqual(forbidden, [], `Found forbidden separate files: ${forbidden.join(', ')}`);

  const navFiles = [
    path.join(ROOT, 'INDEX.md'),
    path.join(ROOT, 'CURRICULUM/README.md'),
    path.join(ROOT, 'CURRICULUM/CLASSES/README.md'),
    path.join(ELEC_DIR, 'README.md'),
    path.join(ELEC_DIR, 'AGENTS.md'),
    path.join(ELEC_DIR, 'FRAMEWORK-AND-GUIDES/TEACHING-FRAMEWORK-AND-MASTER-PLAN.md'),
    path.join(ELEC_DIR, 'FRAMEWORK-AND-GUIDES/SINGLE-PAGE-LESSON-TEMPLATE.md'),
    path.join(ROOT, '.agents/skills/build-electronics-lesson/SKILL.md'),
  ];
  for (const file of navFiles) {
    const txt = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(txt, /\]\([^)]*PROJECTS\.(md|html)/i, `Broken PROJECTS link in ${file}`);
  }
});

test('No README.html, AGENTS.html, CLAUDE.html, SKILL.html, or TEACHER-NOTES.html remain under CURRICULUM/', () => {
  const forbidden = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/^(readme|agents|claude|skill|teacher-notes)\.html$/i.test(entry.name)) forbidden.push(full);
    }
  }
  walk(path.join(ROOT, 'CURRICULUM'));
  assert.deepEqual(forbidden, []);
});
