"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '@/util/axiosConfig';

interface Pokemon {
  id: number;
  name: string;
  weight: number;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get('?limit=1281')
      .then(response => response.data)
      .then(data => {
        const pokemonPromises = data.results.map((result: { url: string }) =>
          axios.get(result.url).then(response => response.data)
        );
        Promise.all(pokemonPromises).then(pokemonData => {
          const sortedPokemons = pokemonData.sort(
            (a: Pokemon, b: Pokemon) => b.weight - a.weight
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