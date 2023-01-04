const projectsList = [
  {
    projectTags:'',
    projectName:'Gorila App',
    projectDate:'2019 - 2020',
    projectCover:'../assets/cover/cover_gorila-app.png'
  },
  {
    projectTags:'',
    projectName:'Batalha de Carteiras',
    projectDate:'2019',
    projectCover:'../assets/cover/cover_batalha.png'
  },
  {
    projectTags:'',
    projectName:'Pixel Brazil',
    projectDate:'2022',
    projectCover:'../assets/cover/cover_brazil.png'
  },
  {
    projectTags:'',
    projectName:'Vanilla Pokédex',
    projectDate:'2022',
    projectCover:'../assets/cover/cover_dex.png'
  },
  {
    projectTags:'',
    projectName:'Navegue App',
    projectDate:'2021',
    projectCover:'../assets/cover/cover_navegue.png'
  },
  {
    projectTags:'',
    projectName:'Freecodecamp.org',
    projectDate:'2019 -',
    projectCover:'../assets/cover/cover_freecodecamp.png'
  },
  {
    projectTags:'',
    projectName:'Lojong',
    projectDate:'2019',
    projectCover:'../assets/cover/cover_lojong.png'
  },
  {
    projectTags:'',
    projectName:'This site',
    projectDate:'2017 -',
    projectCover:'../assets/cover/cover_v3.png'
  }
]

function drawCards(arr) {
  let i = 0;
  while (i <= projectsList.length) {
    let projects = document.createElement("li");
    const li = `<li><span class="${projectsList[i].projectTags}"></span><h3 class="${projectsList[i].projectName}"></h3><p class="${projectsList[i].projectDate}"></p><img class="${projectsList[i].projectCover}" src="#"></li>`;
    document.getElementById("projectsUL").appendChild(projects);
    i++;
  }
}

drawCards(projectsList);
