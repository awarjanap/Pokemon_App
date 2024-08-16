import React, { useEffect } from "react";
import { useState } from "react";

export function PokeDetails({ name, url, height, weight, abilities, moves }) {

    const [pokemonId, setPokemonId] = useState();
    const [pokemonType, setPokemonType] = useState(null);
    const [pokemonHeight, setPokemonHeight] = useState();
    const [pokemonWeight, setPokemonWeight] = useState();
    const [pokemonAbilities, setPokemonAbilities] = useState();
    const [pokemonMoves, setPokemonMoves] = useState();

    //const [pokemonMoves, setPokemonMoves] = useState();


    useEffect(() => {
        const getPokemonData = async () => {
            await fetch(url)
                .then(response => response.json()
                    .then(pokemonDetails => {
                        setPokemonType(pokemonDetails.types[0].type.name)
                        setPokemonId(pokemonDetails.id)
                        setPokemonHeight(pokemonDetails.height)
                        setPokemonWeight(pokemonDetails.weight)
                        setPokemonAbilities(pokemonDetails.abilities[0].ability.name)
                        setPokemonMoves(pokemonDetails.moves[0].move.name)
                    }))
        }
        getPokemonData()
    }, [])


    return (
        <div className="PokemonDetails">
            <h3>{name}</h3>
            {
                pokemonHeight != null ?
                    <p>Height: {pokemonHeight}m</p> : null
            }
            {
                pokemonWeight != null ?
                    <p>Weight: {pokemonWeight}kg</p> : null
            }
            {
                pokemonAbilities != null ?
                    <p>Abilities: {pokemonAbilities}</p> : null
            }
            {
                pokemonMoves != null ?
                    <p>Moves: {pokemonMoves}</p> : null
            }
        </div>
    );
}

