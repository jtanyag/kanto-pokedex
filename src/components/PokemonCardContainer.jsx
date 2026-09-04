import PokemonCard from "./PokemonCard"

function PokemonCardContainer({loading, pokemonList}) {
  if (loading) {
    return (
      <div className="text-center">Loading....</div>
    )
  }
  
  return (
    <section className="pokemon-cards bg-neutral p-8 rounded-md flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
      {pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </section>
  )
}

export default PokemonCardContainer