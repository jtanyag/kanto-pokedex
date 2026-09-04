import { useState, useEffect } from 'react';
import PokemonCardContainer from './components/PokemonCardContainer';
import Buttons from './components/Buttons'

function App() {
  const [kantoPokemon, setKantoPokemon] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0');
        const pokemonData = await pokemonResponse.json();
        const pokemonList = await Promise.all(
          pokemonData.results.map(async pokemon => {
            const detailsResponse = await fetch(pokemon.url);
            const pokemonDetails = await detailsResponse.json();
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image: pokemonDetails.sprites.front_default,
              types: pokemonDetails.types
            };
          })
        );
        setKantoPokemon(pokemonList);
      } catch(error) {
        console.error("Error fetching Pokemon: ", error);
      } finally {
        isLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 20);
  }

  return (
    <main className="min-h-screen py-10 px-6">
      <h1 className="text-4xl text-center mb-8">Pokedex - Kanto</h1>
      <PokemonCardContainer
        pokemonList={kantoPokemon.slice(0, visibleCount)}
        loading={loading}
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
