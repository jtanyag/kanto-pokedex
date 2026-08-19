function PokemonCard(props) {
  const pokeTypes = props.pokemon.types.map(typeInfo => {
    const capTypeName = typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1);
    return (
      <span key={capTypeName} className={`pokemon-type ${typeInfo.type.name}`}>
        {capTypeName}
      </span>
    )
  })
  const capName = props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);

  return (
    <div key={props.pokemon.id} className="pokemon-card">
      <p>#{props.pokemon.id}<br />{capName}</p>
      <div className="pokemon-image">
        <img src={props.pokemon.image} alt={capName} width="" height="" />
      </div>
      <p>Type(s): <span className="pokemon-types">{pokeTypes}</span></p>
    </div>
  )
}

export default PokemonCard