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
    listHTML += '<li><a href="./blog/' + file + '">' + file + '</a></li>\n';
  });

  // create a string of HTML code for the page
  const pageHTML = '<!DOCTYPE html>\n<html>\n<head>\n<section>\n<p>menu vai aqui</p>\n</section>\n<title>Blog</title>\n</head>\n<body>\n<h1>Blog</h1>\n<ul>\n' + listHTML + '</ul>\n</body>\n</html>';

  // write the page HTML to a file
  fs.writeFile('blog.html', pageHTML, function (err) {
    if (err) throw err;
    console.log('Blog page created!');
  });
});