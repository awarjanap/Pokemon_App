import React from 'react';
import { Header } from "./Header";
import './App.css';
import { Footer } from './Footer';
import { PokemonContainer } from './PokemonContainer';
import './Container.css';
import './Header.css';




function App() {
  return (
    <div className="App">
      <Header />
      <PokemonContainer />
      <Footer />
    </div >

  );
}
export default App;

