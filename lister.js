// get a reference to the file system module
const fs = require('fs');

// get a reference to the directory containing the HTML files
const directoryPath = __dirname + '/blog';

// create an empty array to hold the list of HTML files
const fileList = [];

// read the contents of the directory
fs.readdir(directoryPath, function (err, files) {
  // handle errors
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  // loop through each file
  files.forEach(function (file) {
    // check if the file is an HTML file
    if (file.endsWith('.html')) {
      // add the file name to the list
      fileList.push(file);
    }
  });

  // create a string of HTML code for the list
  let listHTML = '';
  fileList.forEach(function (file) {
    listHTML += '<li><a href="./blog/' + file + '" target="_blank">' + file + '</a></li>\n';
  });

  // create a string of HTML code for the page
  const pageHTML = '<!DOCTYPE html>\n<html>\n<head>\n<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n<link rel="stylesheet" type="text/css" href="main.css">\n<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">\n<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">\n<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">\n<link rel="manifest" href="assets/favicon/site.webmanifest">\n<title>Julia`s Blog</title>\n</head>\n<body>\n<section id="top-nav">\n<nav class="navbar navbar-expand-lg navbar-light container pt-4">\n<a class="navbar-brand" href="#">\n<img src="assets/logo.png" alt="" width="128" class="d-inline-block align-text-top"></a>\n<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n<span class="navbar-toggler-icon"></span></button>\n<div class="collapse navbar-collapse" id="navbarNav">\n<ul class="navbar-nav">\n<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>\n<li class="nav-item"><a class="nav-link" href="work.html">Work</a></li>\n<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>\n<li class="nav-item active">\n<a class="nav-link" href="#">Blog <span class="sr-only">(current)</span></a></li>\n</ul>\n</div>\n</nav>\n</section>\n<div class="container">\n<h1>Blog</h1>\n<br>\n<ul>\n' + listHTML + '</ul>\n</div>\n</body>\n</html>';

  // write the page HTML to a file
  fs.writeFile('blog.html', pageHTML, function (err) {
    if (err) throw err;
    console.log('Blog page created!');
  });
});