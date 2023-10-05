const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

const inputDir = 'md_texts'; // Source directory for .md files
const outputDir = 'blog';    // Destination directory for generated .html files

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Create an array to store HTML file entries
const htmlFileEntries = [];

// Function to format a date object as a string in DD/MM/YYYY format
function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

// Function to process Markdown files and generate HTML files
function processMarkdownFiles() {
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

      // Get file stats to retrieve creation date (mtime)
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        // Extract the creation date from stats
        const creationDate = stats.mtime; // Use mtime instead of birthtime

        // Read the content of the Markdown file
        fs.readFile(filePath, 'utf-8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }

          const html = marked(data);

          // Create the HTML file with the same name as the MD file
          const outputFilePath = path.join(outputDir, `${path.parse(file).name}.html`);
          fs.writeFile(outputFilePath, html, err => {
            if (err) {
              console.error(err);
            } else {
              console.log(`${outputFilePath} created`);
              console.log(`Creation Date: ${formatDate(creationDate)}`);

              // Add the HTML file entry to the array
              htmlFileEntries.push({
                fileName: path.parse(file).name, // Remove .html extension
                creationDate,
              });

              // Call the listHTMLFiles function after processing Markdown files
              listHTMLFiles();
            }
          });
        });
      });
    });
  });
}

// Function to list HTML files and generate an HTML page
function listHTMLFiles() {
  // Sort the HTML file entries by creation date in descending order
  htmlFileEntries.sort((a, b) => b.creationDate - a.creationDate);

  // Create a string of HTML code for the list
  let listHTML = '';
  htmlFileEntries.forEach(entry => {
    listHTML += `<a href="./${outputDir}/${entry.fileName}.html" target="_blank">${entry.fileName}</a><br><p>${formatDate(entry.creationDate)}</p>\n`;
  });

  // Create a string of HTML code for the page
  const pageHTML = `<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Julia's Blog</title>
  <script src="jquery.min.js"></script>
  <script src="js/typing.js"></script>
  <script src="poster.js"></script>
  <script src="js/main.js"></script>
  <script src="js/dark-mode.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <link rel="stylesheet" type="text/css" href="main.css">
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <link rel="shortcut icon" href="https://juliadebelli.com/favicon.ico" type="image/x-icon">
  <meta name="description" content="Writings about design, technology, maker culture">
  <meta name="keywords" content="blog, designer blog, developer blog, design, developer, tech">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--  favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
  <link rel="manifest" href="assets/favicon/site.webmanifest">
  <!-- favicon --></link>
  
  \n\n</head>\n<body>\n<section id="top-nav">\n<nav class="w-75 navbar navbar-expand-lg navbar-light container pt-4">
  <a class="navbar-brand" href="https://www.behance.net/gallery/73953177/Personal-logo" target="_blank">
    <img src="assets/monogram.svg" alt="personal branding" width="48" class="d-inline-block align-text-top">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse mt-2" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="work.html">Work</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="#">Blog <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>\n</section>\n<div class="container w-75 pt-4 pl-5">\n<br><h1>I wrote these</h1><br>\n<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08980d56-6116-424b-bbfa-fef1dd46a501/d7i0pj0-be679d43-f4a5-422f-b3f3-dc3911c32373.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OTgwZDU2LTYxMTYtNDI0Yi1iYmZhLWZlZjFkZDQ2YTUwMVwvZDdpMHBqMC1iZTY3OWQ0My1mNGE1LTQyMmYtYjNmMy1kYzM5MTFjMzIzNzMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ftJrBWBYjrfIh6ykpxxYSJ_Hu1WXoopO85q0dCF7hb4" style="mix-blend-mode: multiply;" alt="a very old gif I made over a decade ago">\n<br><br>\n<div>${listHTML}</div>\n</div>\n</body>\n</html>`;

  // Write the page HTML to a file
  fs.writeFile('blog.html', pageHTML, function (err) {
    if (err) {
      console.error('Error writing blog.html:', err);
    } else {
      console.log('Blog page created!');
    }
  });
}

// Call the function to process Markdown files
processMarkdownFiles();
