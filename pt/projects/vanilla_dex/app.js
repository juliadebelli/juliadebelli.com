const fetchPokemon = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []

  for (let i = 1; i <= 151; i++) {
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name )
        
        accumulator += 
        `<li class＝"pokemon-card>
        <div>
          <h2 class="pokemon-id"><span class="hash">#</span>${pokemon.id}</h2>
          <h3 class="pokemon-nome">${pokemon.name}</h3>
          <!-- <h4 class="pokemon-tipo">${pokemon.types}</h4> -->
          <img class="card-img" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${pokemon.id}.png" />
          </div>
        </li>`
        return accumulator
      }, '')

      const ul = document.querySelector('[data-js="pokedex"]')

      ul.innerHTML = lisPokemons
    })
}

fetchPokemon()

