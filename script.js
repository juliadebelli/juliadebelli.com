window.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("image-gallery");

    // Replace 'images/' with the path to your image folder
    const imageFolder = 'ai-art';

    // An array of image filenames (you can fetch this dynamically if needed)
    const imageFilenames = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    // Loop through the image filenames and create <img> elements
    imageFilenames.forEach(function (filename) {
        const img = document.createElement("img");
        img.src = imageFolder + filename;
        img.alt = filename; // You can set alternative text here
        imageGallery.appendChild(img);