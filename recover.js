const fs = require('fs');

const logPath = 'C:\\Users\\Dev\\.gemini\\antigravity-ide\\brain\\4fde06ae-c9d2-492e-9b46-173ec4744ece\\.system_generated\\logs\\transcript.jsonl';
const content = fs.readFileSync(logPath, 'utf8');

// Match any line like "12:   some code"
const regex = /"\\n(\d+):\s(.*?)(?=\\n\d+:|\\nThe above content|\\n$)/g;
let extracted = [];
const lines = content.split('\n');
for (const line of lines) {
  if (line.includes('view_file') && line.includes('WhyChooseUs.tsx') && !line.includes('old_why_utf8.tsx')) {
    const matches = [...line.matchAll(/\\n(\d+):\s(.*?)(?=\\n)/g)];
    if (matches.length > 0) {
      matches.forEach(m => {
        extracted.push(`${m[1]}: ${m[2].replace(/\\"/g, '"').replace(/\\\\/g, '\\')}`);
      });
    }
  }
}

fs.writeFileSync('extracted_why.txt', extracted.join('\n'));
console.log("Extracted " + extracted.length + " lines from view_file logs.");
