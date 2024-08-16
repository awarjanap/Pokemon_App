import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import { Pagination } from './Pagination';
import './Container.css';
import { PokeDetails } from "./PokeDetails";



export const PokemonContainer = () => {
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [pokemonList, setPokemonList] = useState({});
    const [selectedPage, setSelectedPage] = useState(8);



    useEffect(() => {
        let offset = selectedPage - 1;
        let mainUrl = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offset}`
        const pokemonListData = async () => {
            await fetch(mainUrl)
                .then(response => response.json()
                    .then(pokemonSet => setPokemonList(pokemonSet.results)))
        }
        pokemonListData()
    }, [])


    return (
        <div className="Name">
            {
                pokemonList.length > 0 ?
                    (pokemonList.map((listItem) =>
                        <Pokemon
                            name={listItem.name}
                            url={listItem.url}
                            key={listItem.name} />
                    )) : null
            }
            <Pagination />
            {
                pokemonList.length > 0 ?
                    (pokemonList.map((listItem) =>
                        <PokeDetails
                            name={listItem.name}
                            url={listItem.url}
                            key={listItem.name} />
                    )) : null
            }

        </div>
    )

}