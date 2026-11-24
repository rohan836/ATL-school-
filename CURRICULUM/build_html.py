"""Build standalone HTML reading copies of the curriculum Markdown files.

Usage:
    python CURRICULUM/build_html.py

For every .md under CURRICULUM/ a sibling .html is written, plus
CURRICULUM/INDEX.html as the entry page. Markdown stays the source of truth;
re-running the script simply regenerates the HTML. The Markdown files are
never modified.

Only the Markdown constructs actually used in this repository are supported:
headings, paragraphs, bold/italic, inline code, links, bullet and numbered
lists, GFM tables, blockquotes, horizontal rules and fenced code.
"""

import html
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CURR = os.path.join(ROOT, "CURRICULUM")
SKIP_FILENAMES = {"readme.md", "agents.md", "claude.md", "skill.md"}

CSS = """
:root{
  --ink:#182230;--muted:#5b6675;--line:#dbe2ea;--surface:#fff;--page:#f4f7fb;
  --navy:#17365d;--blue:#e8f1ff;--soft:#f8fbff;
}
*{box-sizing:border-box}
body{margin:0;background:var(--page);color:var(--ink);
  font:16px/1.6 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.wrap{max-width:1380px;margin:0 auto;padding:26px 20px 46px}
header.page{background:var(--navy);color:#fff;border-radius:18px;padding:26px 28px;margin-bottom:20px}
.eyebrow{margin:0 0 8px;color:#c9dcf7;font-size:.72rem;font-weight:750;
  letter-spacing:.09em;text-transform:uppercase}
header.page h1{margin:0;font-size:1.65rem;line-height:1.25}
.meta{margin:10px 0 0;color:#dbe8fb;font-size:.88rem}
.crumbs{font-size:.84rem;color:var(--muted);margin:0 0 14px}
.crumbs a{color:var(--navy);text-decoration:none}
.crumbs a:hover{text-decoration:underline}
main{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:24px 26px}
main>h2:first-child{margin-top:0}
h2{font-size:1.2rem;margin:26px 0 10px;padding-bottom:6px;border-bottom:1px solid var(--line)}
h3{font-size:1.03rem;margin:20px 0 8px}
h4,h5,h6{font-size:.97rem;margin:16px 0 6px}
p{margin:10px 0}
a{color:#15437e}
ul,ol{padding-left:22px;margin:10px 0}
li{margin:4px 0}
.table-wrap{width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:16px 0;border:1px solid var(--line);border-radius:10px;background:var(--surface)}
table{border-collapse:collapse;width:100%;margin:0;font-size:.85rem;line-height:1.45}
th{background:var(--blue);text-align:left;font-weight:700;white-space:nowrap}
th,td{border:1px solid var(--line);padding:8px 10px;vertical-align:top}
td.nowrap{white-space:nowrap}
.table-wrap table th:first-child,.table-wrap table td:first-child{border-left:0}
.table-wrap table th:last-child,.table-wrap table td:last-child{border-right:0}
.table-wrap table tr:first-child th{border-top:0}
.table-wrap table tbody tr:last-child td{border-bottom:0}
tbody tr:nth-child(even){background:var(--soft)}
code{background:#eef2f7;padding:1px 5px;border-radius:5px;font-size:.9em}
blockquote{margin:14px 0;padding:10px 16px;border-left:4px solid #8bb7f0;background:var(--blue);border-radius:0 10px 10px 0}
blockquote p{margin:0}
hr{border:0;border-top:1px solid var(--line);margin:22px 0}
.toc{background:var(--soft);border:1px solid var(--line);border-radius:12px;
  padding:14px 18px;margin:0 0 18px}
.toc p{margin:0 0 6px;font-weight:700;font-size:.82rem;letter-spacing:.05em;
  text-transform:uppercase;color:var(--muted)}
.toc ul{margin:0;padding-left:18px}
.toc li{margin:2px 0}
footer{margin-top:18px;color:var(--muted);font-size:.84rem}
footer a{color:var(--navy)}
details.reveal{margin:12px 0;border:1px solid var(--line);border-radius:10px;background:var(--soft);overflow:hidden}
details.reveal summary{list-style:none;cursor:pointer;padding:10px 14px;font-weight:700;color:var(--navy);display:flex;align-items:center;gap:8px;user-select:none}
details.reveal summary::-webkit-details-marker{display:none}
details.reveal summary::before{content:"👁";font-size:1em}
details.reveal[open] summary{border-bottom:1px solid var(--line);background:var(--blue)}
details.reveal .reveal-body{padding:12px 16px;background:var(--surface)}

/* Clean, home-ready study sheet for Student Notes */
body.student-doc{font-size:17px;line-height:1.68}
body.student-doc .wrap{max-width:920px;padding:28px 20px 54px}
body.student-doc header.page{padding:26px 30px;margin-bottom:22px}
body.student-doc header.page h1{font-size:1.8rem}
body.student-doc main{padding:32px 36px}
body.student-doc h2{font-size:1.34rem;color:var(--navy);margin:32px 0 14px;padding-bottom:8px;border-bottom:2px solid var(--blue)}
body.student-doc h3{font-size:1.12rem;color:var(--navy);margin:24px 0 10px}
body.student-doc th,body.student-doc td{padding:11px 14px}
body.student-doc details.reveal{margin:12px 0 18px;border:1.5px solid #cbd5e1;border-radius:12px}
body.student-doc details.reveal summary{padding:12px 16px;font-size:1rem;min-height:46px}
body.student-doc details.reveal .reveal-body{padding:14px 18px;font-size:1rem}

@media (max-width:720px){
  body.student-doc main{padding:22px 18px}
  body.student-doc header.page{padding:20px 20px}
}
@media print{
  body{background:#fff}
  .wrap{max-width:none;padding:0}
  header.page{background:#fff;color:#000;border:1px solid #000}
  .eyebrow,.meta{color:#333}
  main{border:0;padding:0}
  .toc,details.reveal,table{break-inside:avoid}
  a{color:#000}
}
"""

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>{css}</style>
</head>
<body class="{body_class}">
<div class="wrap">
{crumbs}
<header class="page">
  <p class="eyebrow">{eyebrow}</p>
  <h1>{title}</h1>
{meta}
</header>
<main>
{toc}
{body}
</main>
{footer}
</div>
</body>
</html>
"""


def esc(text):
    return html.escape(text, quote=False)


def rel_link(url):
    """Rewrite relative .md links to .html for generated docs (skip README/agent docs)."""
    if re.match(r"^(https?:|mailto:|tel:|#|//)", url):
        return url
    path, sep, frag = url.partition("#")
    base = os.path.basename(path).lower()
    if path.lower().endswith(".md") and base not in SKIP_FILENAMES:
        path = path[:-3] + ".html"
    return path + (("#" + frag) if sep else "")


def inline(text):
    tokens = []

    def stash(m):
        tokens.append("<code>" + esc(m.group(1)) + "</code>")
        return "\x00C%d\x00" % (len(tokens) - 1)

    masked = re.sub(r"`([^`]*)`", stash, text)
    masked = re.sub(r"<br\s*/?>", "\x00BR\x00", masked, flags=re.I)
    rendered = inline_plain(masked)
    rendered = rendered.replace("\x00BR\x00", "<br>")
    for idx, code_html in enumerate(tokens):
        rendered = rendered.replace("\x00C%d\x00" % idx, code_html)
    return rendered


def inline_plain(text):
    s = esc(text)
    s = re.sub(
        r"\[([^\]]+)\]\(([^)\s]+)\)",
        lambda m: '<a href="%s">%s</a>' % (rel_link(m.group(2)), m.group(1)),
        s,
    )
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*([^*\n]+?)\*(?!\*)", r"<em>\1</em>", s)
    return s


def slug(text):
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s or "section"


def split_row(line):
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    return [c.strip() for c in line.split("|")]


def is_separator(line):
    return bool(re.match(r"^\s*\|?[\s:|-]+\|?\s*$", line)) and "-" in line


def render(md):
    lines = md.replace("\r\n", "\n").replace("\r", "\n").split("\n")
    out = []
    headings = []
    seen_ids = {}
    i = 0
    first_h1 = None

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            i += 1
            continue

        # <details><summary>...</summary>...</details> Eye-Reveal block
        if stripped.lower() == "<details>":
            i += 1
            summary = "Show Answer"
            inner_lines = []
            while i < len(lines) and lines[i].strip().lower() != "</details>":
                cur_s = lines[i].strip()
                m_sum = re.match(r"^<summary>(.*?)</summary>$", cur_s, re.I)
                if m_sum:
                    summary = m_sum.group(1).strip()
                else:
                    inner_lines.append(lines[i])
                i += 1
            i += 1
            inner_html, _, _ = render("\n".join(inner_lines))
            out.append(
                '<details class="reveal"><summary>%s</summary><div class="reveal-body">%s</div></details>'
                % (inline(summary), inner_html)
            )
            continue

        # fenced code
        if stripped.startswith("```"):
            lang = stripped[3:].strip()
            i += 1
            buf = []
            while i < len(lines) and not lines[i].strip().startswith("```"):
                buf.append(lines[i])
                i += 1
            i += 1
            cls = ' class="language-%s"' % esc(lang) if lang else ""
            out.append("<pre><code%s>%s</code></pre>" % (cls, esc("\n".join(buf))))
            continue

        # heading
        m = re.match(r"^(#{1,6})\s+(.*?)\s*#*\s*$", line)
        if m:
            level = len(m.group(1))
            title = m.group(2).strip()
            if level == 1 and first_h1 is None:
                first_h1 = title
                i += 1
                continue
            hid = slug(title)
            if hid in seen_ids:
                seen_ids[hid] += 1
                hid = "%s-%d" % (hid, seen_ids[hid])
            else:
                seen_ids[hid] = 0
            headings.append((level, title, hid))
            out.append('<h%d id="%s">%s</h%d>' % (level, hid, inline(title), level))
            i += 1
            continue

        # horizontal rule
        if re.match(r"^\s*(?:-{3,}|\*{3,}|_{3,})\s*$", line):
            out.append("<hr>")
            i += 1
            continue

        # table
        if stripped.startswith("|") and i + 1 < len(lines) and is_separator(lines[i + 1]):
            header = split_row(lines[i])
            aligns = []
            for cell in split_row(lines[i + 1]):
                left, right = cell.startswith(":"), cell.endswith(":")
                aligns.append("center" if left and right else "right" if right else "left" if left else "")
            i += 2
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(split_row(lines[i]))
                i += 1
            width = len(header)
            thead = "".join(
                '<th%s>%s</th>' % (
                    ' style="text-align:%s"' % aligns[c] if c < len(aligns) and aligns[c] else "",
                    inline(header[c]),
                )
                for c in range(width)
            )
            body_rows = []
            for row in rows:
                cells = []
                for c in range(width):
                    value = inline(row[c]) if c < len(row) else ""
                    attrs = []
                    if header[c].strip().lower() in ("#", "class", "term", "month", "week"):
                        attrs.append('class="nowrap"')
                    if c < len(aligns) and aligns[c]:
                        attrs.append('style="text-align:%s"' % aligns[c])
                    attr_str = (" " + " ".join(attrs)) if attrs else ""
                    cells.append("<td%s>%s</td>" % (attr_str, value))
                body_rows.append("<tr>" + "".join(cells) + "</tr>")
            out.append(
                '<div class="table-wrap"><table><thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>'
                % (thead, "".join(body_rows))
            )
            continue

        # blockquote
        if stripped.startswith(">"):
            buf = []
            while i < len(lines) and lines[i].strip().startswith(">"):
                buf.append(re.sub(r"^\s*>\s?", "", lines[i]))
                i += 1
            out.append("<blockquote><p>%s</p></blockquote>" % inline(" ".join(buf)))
            continue

        # unordered list
        if re.match(r"^\s*[-*+]\s+", line):
            items = []
            while i < len(lines) and re.match(r"^\s*[-*+]\s+", lines[i]):
                items.append(re.sub(r"^\s*[-*+]\s+", "", lines[i]))
                i += 1
            out.append("<ul>" + "".join("<li>%s</li>" % inline(x) for x in items) + "</ul>")
            continue

        # ordered list
        if re.match(r"^\s*\d+[.)]\s+", line):
            items = []
            while i < len(lines) and re.match(r"^\s*\d+[.)]\s+", lines[i]):
                items.append(re.sub(r"^\s*\d+[.)]\s+", "", lines[i]))
                i += 1
            out.append("<ol>" + "".join("<li>%s</li>" % inline(x) for x in items) + "</ol>")
            continue

        # paragraph: consecutive plain lines, soft breaks kept visible
        buf = []
        while i < len(lines):
            cur = lines[i]
            s = cur.strip()
            if not s:
                break
            if (
                s.startswith("|")
                or s.startswith(">")
                or s.startswith("```")
                or s.lower().startswith("<details")
                or s.lower() == "</details>"
                or re.match(r"^#{1,6}\s", cur)
                or re.match(r"^\s*[-*+]\s+", cur)
                or re.match(r"^\s*\d+[.)]\s+", cur)
                or re.match(r"^\s*(?:-{3,}|\*{3,}|_{3,})\s*$", cur)
            ):
                break
            buf.append(s)
            i += 1
        out.append("<p>" + "<br>".join(inline(x) for x in buf) + "</p>")

    return "\n".join(out), first_h1, headings


def describe(rel):
    """Breadcrumb + eyebrow + meta line for one file path (relative to CURRICULUM)."""
    parts = rel.replace("\\", "/").split("/")
    track = ""
    klass = ""
    section = ""
    if len(parts) > 1 and parts[0] == "CLASSES":
        track = parts[1]
        for p in parts:
            m = re.match(r"^Class-(\d+)$", p)
            if m:
                klass = "Class " + m.group(1)
            m = re.match(r"^Class-(\d+)-([A-Z])$", p)
            if m:
                klass = "Class " + m.group(1)
                section = "Section " + m.group(2)
    elif parts[0] == "SHARED-RESOURCES":
        track = "SHARED-RESOURCES"
    return track, klass, section


TRACK_NAME = {
    "AI": "AI & Computing",
    "ELECTRONICS-ROBOTICS": "Electronics & Robotics",
    "SHARED-RESOURCES": "Shared resources",
}


def crumbs_for(rel):
    parts = rel.replace("\\", "/").split("/")
    depth = len(parts) - 1
    up = "../" * depth
    links = ['<a href="%sINDEX.html">Curriculum</a>' % up]
    if len(parts) > 1 and parts[0] == "CLASSES" and len(parts) > 2:
        links.append(esc(TRACK_NAME.get(parts[1], parts[1])))
    track, klass, section = describe(rel)
    name = esc(klass) + ((" &middot; " + esc(section)) if section else "")
    if name:
        links.append(name)
    return '<p class="crumbs">' + " &rsaquo; ".join(links) + "</p>"


def render_file(path):
    rel = os.path.relpath(path, CURR)
    base = os.path.basename(path).lower()
    is_student_doc = base == "student-notes.md" or "lesson-sheet" in base
    is_lesson_handout = is_student_doc

    with open(path, "r", encoding="utf-8") as fh:
        md = fh.read()
    body, title, headings = render(md)
    title = title or os.path.splitext(os.path.basename(path))[0]
    track, klass, section = describe(rel)

    if is_student_doc:
        body_class = "student-doc"
        eyebrow = "Home Study & Quiz Notes"
    elif rel.lower().endswith("readme.md"):
        body_class = ""
        eyebrow = "Curriculum hub" if rel.lower() == "readme.md" else TRACK_NAME.get(track, "Curriculum")
    else:
        body_class = ""
        eyebrow = TRACK_NAME.get(track, "Curriculum")

    meta_bits = [b for b in (klass, section) if b]
    if is_lesson_handout:
        m_month = re.search(r"MONTH-0*(\d+)", rel, re.I)
        m_week = re.search(r"WEEK-(\d+)", rel, re.I)
        if m_month:
            meta_bits.append("Month " + m_month.group(1))
        if m_week:
            meta_bits.append("Week " + m_week.group(1))
    meta = '<p class="meta">%s</p>\n' % " &middot; ".join(meta_bits) if meta_bits else ""

    toc = ""
    if not is_lesson_handout:
        majors = [h for h in headings if h[0] == 2]
        majors = [h for h in majors if h[1].lower() not in ("contents", "on this page")]
        if len(majors) >= 4:
            toc = '<nav class="toc"><p>On this page</p><ul>%s</ul></nav>' % "".join(
                '<li><a href="#%s">%s</a></li>' % (h[2], esc(re.sub(r"[*`]", "", h[1]))) for h in majors
            )

    source = os.path.basename(path)
    crumbs = "" if is_lesson_handout else crumbs_for(rel)
    footer = "" if is_lesson_handout else (
        '<footer>\n'
        '  <p>Source: <a href="%s">%s</a> &middot; Markdown is the source of truth.\n'
        '  Regenerate with <code>python CURRICULUM/build_html.py</code>.</p>\n'
        '</footer>' % (source, source)
    )
    out = TEMPLATE.format(
        body_class=body_class,
        title=esc(title),
        css=CSS,
        crumbs=crumbs,
        eyebrow=esc(eyebrow),
        meta=meta,
        toc=toc,
        body=body,
        footer=footer,
    )
    return out


def build_index(files):
    """INDEX.html: grouped links to every generated page."""
    groups = [
        ("Start here", []),
        ("AI & Computing", []),
        ("Electronics & Robotics", []),
        ("Shared resources", []),
    ]
    index = {name: [] for name, _ in groups}

    for path in files:
        rel = os.path.relpath(path, CURR).replace("\\", "/")
        with open(path, "r", encoding="utf-8") as fh:
            text = fh.read()
        m = re.search(r"^#\s+(.+?)\s*$", text, re.M)
        title = m.group(1) if m else os.path.splitext(os.path.basename(path))[0]
        if rel.startswith("CLASSES/AI/"):
            key = "AI & Computing"
        elif rel.startswith("CLASSES/ELECTRONICS-ROBOTICS/"):
            key = "Electronics & Robotics"
        elif rel.startswith("SHARED-RESOURCES/"):
            key = "Shared resources"
        else:
            key = "Start here"
        index[key].append((rel, title))

    def card(rel, title):
        where = rel.rsplit("/", 1)[0]
        return (
            '<li><a href="%s">%s</a> <span class="where">%s</span></li>'
            % (rel[:-3] + ".html", esc(title), esc(where))
        )

    sections = []
    for name, _ in groups:
        items = index[name]
        if not items:
            continue
        sections.append("<section><h2>%s</h2><ul>%s</ul></section>" % (
            esc(name), "".join(card(r, t) for r, t in sorted(items))))

    body = "\n".join(sections)
    extra = """
  .where{color:var(--muted);font-size:.8rem;margin-left:6px}
  section+section{margin-top:22px}
  ul{list-style:none;padding-left:0}
  li{padding:7px 0;border-bottom:1px solid var(--line)}
"""
    return TEMPLATE.format(
        body_class="",
        title="ATL Curriculum - HTML reading copy",
        css=CSS + extra,
        crumbs='<p class="crumbs">ATL Curriculum</p>',
        eyebrow="Offline reading copy",
        meta='<p class="meta">Every curriculum document, one click away. Markdown is the source of truth.</p>',
        toc="",
        body=body,
        footer='<footer><p>Source: <a href="README.md">README.md</a></p></footer>',
    )


def main():
    files = []
    for dirpath, dirnames, filenames in os.walk(CURR):
        dirnames[:] = sorted(d for d in dirnames if not d.startswith("."))
        for name in sorted(filenames):
            if name.lower().endswith(".md") and name.lower() not in SKIP_FILENAMES:
                files.append(os.path.join(dirpath, name))
    files.sort()

    count = 0
    for path in files:
        out = render_file(path)
        target = os.path.splitext(path)[0] + ".html"
        with open(target, "w", encoding="utf-8", newline="") as fh:
            fh.write(out.replace("\n", "\r\n"))
        count += 1

    index_path = os.path.join(CURR, "INDEX.html")
    with open(index_path, "w", encoding="utf-8", newline="") as fh:
        fh.write(build_index(files).replace("\n", "\r\n"))

    print("wrote %d html files + 1 index" % count)


if __name__ == "__main__":
    main()
