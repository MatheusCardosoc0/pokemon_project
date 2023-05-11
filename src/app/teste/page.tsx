"use client"

import React, { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1281')
      .then(response => response.json())
      .then(data => {
        const pokemonPromises = data.results.map(result =>
          fetch(result.url).then(response => response.json())
        );
        Promise.all(pokemonPromises).then(pokemonData => {
          const sortedPokemons = pokemonData.sort(
            (a, b) => b.weight - a.weight
          );
          setPokemons(sortedPokemons.slice(0, 20));
        });
      });
  }, []);

  return (
    <div>
      <h1>Top 20 Pokémon mais pesados</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.name} - {pokemon.weight / 10} kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;