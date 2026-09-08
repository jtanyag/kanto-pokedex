import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const PokemonDetailsPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const pokemonDetailsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const pokemonDetails = await pokemonDetailsResponse.json();
        setPokemon(pokemonDetails);
      } catch (error) {
        console.log("Error fetching Pokemon details: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonDetails();
  }, [id])

  if (loading) {
    return (
      <div className="text-center">Loading....</div>
    )
  }
  
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const capName = capitalize(pokemon.name);
  
  return (
    <section className="flex flex-wrap gap-2">
      <section className="pokemon-main card rounded-md bg-white p-4 w-full flex flex-col gap-2">
        <h2 className="text-2xl text-center">#{pokemon.id} {capName}</h2>
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={capName} className="w-1/2 mx-auto" />
        <div className="specs grid grid-cols-2 gap-2">
          <div className="measurements flex flex-col gap-2 text-sm">
            <span>Height: {pokemon.height / 10}m</span>
            <span>Weight: {pokemon.weight / 10}kg</span>
          </div>
          <div className="type text-sm">
            <span>Type(s): </span>
            <span className="flex flex-wrap gap-2 mt-1">
              {pokemon.types.map(typeInfo => {
                const capTypeName = typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1);
                return (
                  <span key={capTypeName} className={`pokemon-type ${typeInfo.type.name} rounded-md text-center w-31.25 p-1`}>
                    {capTypeName}
                  </span>
                )
              })}
            </span>
          </div>
        </div>
      </section>

      <section className="pokemon-stats card rounded-md bg-white p-4 w-full">
        <h3 className="text-xl text-center mb-2">Base Stats</h3>
        <div className="base-stats md:grid md:grid-cols-2 gap-x-4 gap-y-2">
          {pokemon.stats.map(stat => {
            return (
              <div className="base-stat flex justify-between" key={stat.stat.name}>
                <span className="base-stat-name">{capitalize(stat.stat.name)}</span>
                <span className="base-stat-value">{stat.base_stat}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="pokemon-moves card rounded-md bg-white p-4 w-full">
        <h3 className="text-xl text-center mb-2">Moves</h3>
        <ul className="moves grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-3">
          {pokemon.moves.map(move => {
            return (
              <li key={move.move.name}>{capitalize(move.move.name)}</li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default PokemonDetailsPage