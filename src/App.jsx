import { useState, useEffect } from 'react';

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

  const pokemonList = kantoPokemon.slice(0, visibleCount).map(pokemon => {
    const pokeTypes = pokemon.types.map(typeInfo => {
      const capTypeName = typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1);
      return (
        <span key={capTypeName} className={`pokemon-type ${typeInfo.type.name}`}>
          {capTypeName}
        </span>
      )
    })

    const capName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
      <div key={pokemon.id} className="pokemon-card">
        <p>#{pokemon.id} {capName}</p>
        <div className="pokemon-image">
          <img src={pokemon.image} alt={capName} width="" height="" />
        </div>
        <p>Type(s): <span className="pokemon-types">{pokeTypes}</span></p>
      </div>
    )
  })

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 20);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <main>
      <h1>Pokedex - Kanto</h1>
      <section className="pokemon-cards">
        {pokemonList}
      </section>
      
      <section className="buttons">
      {visibleCount < kantoPokemon.length && <button onClick={handleLoadMore}>Load More</button>}
      <button onClick={scrollToTop}>Back to Top</button>
      </section>
    </main>
  )
}

export default App
