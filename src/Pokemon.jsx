import React, { useEffect } from "react";
import { useState } from "react";

export function Pokemon({ name, url }) {

    const [pokemonTypes, setPokemonTypes] = useState(null);
    const [pokemonId, setPokemonId] = useState();

    useEffect(() => {
        const getPokemonData = async () => {
            await fetch(url)
                .then(response => response.json()
                    .then(pokemonDetails => {
                        setPokemonTypes(pokemonDetails.types[0].type.name)
                        setPokemonId(pokemonDetails.id)
                    }))
        }
        getPokemonData()
    }, [])


    return (
        <div className="PokemonBox">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} className="PokemonImg" />
            <h4>Name:  {name}</h4>
            {
                pokemonTypes != null ?
                    <p>Type:   {pokemonTypes}</p> : null
            }
        </div>
    );
}
