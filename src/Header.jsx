import React from "react";
//import logo from './logo.svg';
import logo from './pokeapp.png';
import './Header.css';

export const Header = () => {
    return (
        <div className="Header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                PokeAPI App
            </h1>
        </div>
    )
}


