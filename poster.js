const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

const fs = require('fs');
const path = require('path');

const inputDir = 'md_texts';
const outputDir = 'blog';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter out non-md files
  const mdFiles = files.filter(file => path.extname(file) === '.md');

  // Process each md file
  mdFiles.forEach(file => {
    const filePath = path.join(inputDir, file);
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const html = marked(data);
      const outputFilePath = path.join(outputDir, `${path.parse(file).name}.html`);
      fs.writeFile(outputFilePath, html, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`${outputFilePath} created`);
        }
      });
    });
  });
});