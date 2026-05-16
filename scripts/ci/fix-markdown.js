const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (['node_modules', '.git', '.next', '.venv', 'venv', 'coverage'].includes(f)) return;
      walk(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
};

const targets = ['skills', 'agents', 'commands', 'docs', '.agents', '.factory', '.shared', 'README.md', 'README.zh-CN.md', 'AGENTS.md', 'CLAUDE.md'];
const allFiles = [];

targets.forEach(t => {
  if (fs.existsSync(t)) {
    if (fs.statSync(t).isDirectory()) {
      walk(t, f => { if (f.endsWith('.md')) allFiles.push(f); });
    } else {
      if (t.endsWith('.md')) allFiles.push(t);
    }
  }
});

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let hasH1 = false;

  const newLines = lines.map(line => {
    let l = line.trimEnd();

    // MD030: Ensure exactly one space after list markers
    l = l.replace(/^(\s*[-*+])\s{2,}/, '$1 ');
    l = l.replace(/^(\s*\d+\.)\s{2,}/, '$1 ');

    // MD025: Multiple H1s - convert secondary H1s to H2s
    if (l.startsWith('# ')) {
      if (hasH1) {
        l = '## ' + l.slice(2);
      } else {
        hasH1 = true;
      }
    }

    // MD038: No spaces at start/end of code spans (Safer)
    l = l.replace(/`\s+([^`]+?)`/g, '`$1`');
    l = l.replace(/`([^`]+?)\s+`/g, '`$1`');

    // MD034: Wrap bare URLs in <>
    l = l.replace(/(^|\s)(https?:\/\/[^\s<"']+)/g, (match, p1, p2) => {
      if (p2.endsWith(')') || p2.endsWith(']') || p2.endsWith('>')) return match;
      return p1 + '<' + p2 + '>';
    });

    return l;
  });

  let newContent = newLines.join('\n');
  newContent = newContent.replace(/\n\n+/g, '\n\n');
  newContent = newContent.trimEnd() + '\n';

  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
  }
});

console.log(`Fixed ${allFiles.length} files.`);
