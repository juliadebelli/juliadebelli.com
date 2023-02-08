const pokeSprite = document.querySelector(".pokemon-sprite");
const pokeName = document.getElementById("pokemon-name");
const pokeType1 = document.getElementById("type1");
const pokeType2 = document.getElementById("type2");

const getPokemon = () => {
  console.log('começou')
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`).then((data) => {
    console.log('chegou a requisiçao')
    data.json().then((pokeData) => {

      pokeData.results.forEach((item) => {
        fetch(item.url).then((pokeRes) => {
          pokeRes.json().then((poke) => {
            //pokeSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}`;
            //pokeName.innerHTML = poke.name;
            //pokeType1.innerHTML = poke.types[0].type.name;
            //pokeType2.innerHTML = poke.types[1].type.name;

          })
        })
      });
    })
  })


}
getPokemon()
