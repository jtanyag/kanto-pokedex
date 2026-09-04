function PokemonCard({pokemon}) {
  const {types, name, id, image} = pokemon;

  const pokeTypes = types.map(typeInfo => {
    const capTypeName = typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1);
    return (
      <span key={capTypeName} className={`pokemon-type ${typeInfo.type.name} rounded-md text-center w-31.25 p-1`}>
        {capTypeName}
      </span>
    )
  })
  const capName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="pokemon-card bg-zinc-100 rounded-md text-xs w-40 p-4">
      <p>#{id}<br />{capName}</p>
      <div className="pokemon-image">
        <img src={image} alt={capName} width="" height="" className="h-12.5 object-contain w-full" />
      </div>
      <p>Type(s): <span className="pokemon-types flex flex-col justify-center items-center gap-2 mt-2 text-neutral-700">{pokeTypes}</span></p>
    </div>
  )
}

export default PokemonCard