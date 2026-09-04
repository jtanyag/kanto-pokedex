import PokemonCard from "./PokemonCard"

function PokemonCardContainer(props) {
  if (props.loading) {
    return (
      <div className="text-center">Loading....</div>
    )
  }
  return (
    <section className="pokemon-cards bg-neutral p-8 rounded-md flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
      {props.pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </section>
  )
}

export default PokemonCardContainer