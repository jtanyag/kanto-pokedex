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

  return (
    <div>{pokemon.name}</div>
  )
}

export default PokemonDetailsPage