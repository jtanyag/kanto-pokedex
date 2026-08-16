import { useState, useEffect } from 'react';

function App() {
  const [kantoPokemon, setKantoPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
      .then(res => res.json())
      .then(pokemonData =>
        Promise.all(
          pokemonData.results.map(pokemon =>
            fetch(pokemon.url)
              .then(res => res.json())
              .then(pokemonDetails => ({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                image: pokemonDetails.sprites.front_default,
                types: pokemonDetails.types
              }))
          )
        )
      )
      .then(pokemonDetails => {
        setKantoPokemon(pokemonDetails);
      })
  }, []);

  const pokemonList = kantoPokemon.map(pokemon => {
    console.log(pokemon.types)
    const pokeTypes = pokemon.types.map(typeInfo => {
      return (
        <span key={typeInfo.type.name} className={`pokemon-type ${typeInfo.type.name}`}>
          {typeInfo.type.name}
        </span>
      )
    })

    return (
      <div key={pokemon.id} className="pokemon-card">
        <p>#{pokemon.id} {pokemon.name}</p>
        <div className="pokemon-image">
          <img src={pokemon.image} alt={pokemon.name} width="" height="" />
        </div>
        <p>Type(s): {pokeTypes}</p>
      </div>
    )
  })

  return (
    <main>
      <h1>Pokedex - Kanto</h1>
      <section>
        {pokemonList}
      </section>
    </main>
  )
}

export default App
