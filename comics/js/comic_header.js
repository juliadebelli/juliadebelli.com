//the header of the site would be handled in this javascript file, so you don't have to copypaste it onto every page.
//There are much better methods of handling the header out there but you can stick with this one if you want
document.write(`
    <header align="center">
        <a href="index.html"><img src="./img/logo.png" alt="" /></a>

        <div id="nav">
            <a href="index.html">Início</a> •
            <a href="archive.html">Arquivo</a> •
            <a href="about.html">Sobre</a>
        </div>
    </header>
`);