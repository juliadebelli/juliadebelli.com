//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the toggle-able settings are here

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 3; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files.
//MUST UPDATE NUMBER MANUALLY EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "jpg"; //file extension of your comic pages

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/*
    {
        pgNum: ,
        title: ,
        date: ,
        altText: ,
        imageFiles: ,
        authorNotes:
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.
const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "O que meus pais me ensinaram parte 1", //the title of the page (leaving this blank will default it to "Page X")
        date: "28/09/2021", //the date on which the page was posted (mainly for the archive)
        altText: "mom's got anger issues!", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
            <p>Tirinha inaugural, uhul</p>
            <p>Tá em inglês porque work hard,play hard é em inglês e gosto de manter num idioma só sempre que possível</p>
            `
            //You can even use whatever html tags you want in here to format it, the script called on your html page should spit out anything you type between these backticks.
    },
    {
        pgNum: 2,
        title: "O que meus pais me ensinaram parte 2",
        date: "28/09/2021",
        altText: "dad's got manchild issues!",
        imageFiles: 1,
        authorNotes: `
            <p>Complementando a tirinha anterior pra ninguém dizer que eu sou parcial.</p>

            `
    },

    {
        pgNum: 3,
        title: "Cachorros e comida",
        date: "29/09/2021",
        altText: "considerando que cachorros sejam capazes de entender conceitos abstratos",
        imageFiles: 1,
        authorNotes: `
            <p>Tudo que é meu é meu, tudo que é seu é nosso</p>

            `
    },

];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
