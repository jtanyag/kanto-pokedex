import PokemonCard from "./PokemonCard"

function PokemonCardContainer(props) {
  return (
    <section className="pokemon-cards">
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