import { useState, useEffect } from 'react';

function App() {
  const [kantoPokemon, setKantoPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
      .then(res => res.json())
      .then(pokemonData => setKantoPokemon(pokemonData.results))
  }, []);

  console.log(kantoPokemon);

  const pokemonList = kantoPokemon.map((pokemon, index) => {
    return (
      <li key={index}>{pokemon.name}</li>
    )
  })

  return (
    <main>
      <h1>Pokedex - Kanto</h1>
      <section>
        <ul>
          {pokemonList}
        </ul>
      </section>
    </main>
  )
}

export default App
