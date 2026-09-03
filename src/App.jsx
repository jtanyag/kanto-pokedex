import { useState, useEffect } from 'react';
import PokemonCardContainer from './components/PokemonCardContainer';
import Buttons from './components/Buttons'

function App() {
  const [kantoPokemon, setKantoPokemon] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

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

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 20);
  }

  return (
    <main className="h-screen py-10 px-6">
      <h1 className="text-4xl text-center mb-8">Pokedex - Kanto</h1>
      <PokemonCardContainer
        pokemonList={kantoPokemon.slice(0, visibleCount)}
      />

      <Buttons
        visibleCount={visibleCount}
        totalPokemon={kantoPokemon.length}
        handleLoadMore={handleLoadMore}
      />
    </main>
  )
}

export default App
