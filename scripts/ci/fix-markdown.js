const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

const dirs = ['skills', 'agents', 'commands', 'docs'];
const files = ['README.md', 'README.zh-CN.md', 'AGENTS.md', 'CLAUDE.md'];

const allFiles = [];
dirs.forEach(d => {
  if (fs.existsSync(d)) walk(d, f => { if (f.endsWith('.md')) allFiles.push(f); });
});
files.forEach(f => { if (fs.existsSync(f)) allFiles.push(f); });

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // MD009: Trim trailing spaces
  content = content.split('\n').map(line => line.trimEnd()).join('\n');
  // MD012: Multiple consecutive blank lines
  content = content.replace(/\n\n+/g, '\n\n');
  // MD047: File should end with a single newline
  content = content.trimEnd() + '\n';
  fs.writeFileSync(file, content, 'utf8');
});

console.log(`Fixed ${allFiles.length} files.`);
