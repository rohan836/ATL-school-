const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const curriculumRoot = path.join(root, "CURRICULUM");
const port = Number(process.env.PORT || 3000);

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (pathname === "/" || pathname === "/index.html") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    fs.createReadStream(path.join(root, "index.html")).pipe(res);
    return;
  }
  if (pathname === "/school-data.json") {
    res.writeHead(200, {
      "content-type": "application/json; charset=utf-8",
      "content-disposition": 'attachment; filename="school-data.json"'
    });
    fs.createReadStream(path.join(root, "school-data.json")).pipe(res);
    return;
  }
  if (pathname.startsWith("/CURRICULUM/")) {
    const rel = pathname.slice("/CURRICULUM/".length);
    const target = path.resolve(curriculumRoot, rel);
    if (target.startsWith(curriculumRoot + path.sep) && fs.existsSync(target) && fs.statSync(target).isFile()) {
      const ext = path.extname(target).toLowerCase();
      res.writeHead(200, { "content-type": MIME_TYPES[ext] || "application/octet-stream" });
      fs.createReadStream(target).pipe(res);
      return;
    }
  }
  res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
  res.end("Not found");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`ATL School preview listening on port ${port}`);
});
