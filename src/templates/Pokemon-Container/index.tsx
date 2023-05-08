"use client"

import useSearchState from "@/context/useSearchState"
import { api } from "@/util/axiosConfig"
import axios from "axios"
import { useEffect, useState } from "react"

type Pokemon = {
  id: string
  name: string
}

interface PokemonContainerProps {
  pokemons: Pokemon[]
}

export default function PokemonContainerTemplate() {

  const [pokemons, setPokemons] = useState<any[]>([])
  const [countResults, setCountResults] = useState(20)

  const {
    isSearch,
    searchTerm,
  } = useSearchState()

  async function GetPokemonsBySearchTerm() {
    const response = await api('?limit=1281')

    const pokemonsWithSearchTerm = response.data.results.filter((pokemon: Pokemon) => pokemon.name.includes(searchTerm));

    const pokemonNames = pokemonsWithSearchTerm.slice(0, 20).map((pokemon: any,) => pokemon);

    setPokemons(pokemonNames);
  }

  async function GetPokemons() {
    let endpoints = []
    for (let i = 1; i < countResults; i++) {
      endpoints.push(i)
    }
    const responses = await axios.all(endpoints.map((endpoint) => api.get(`/${endpoint}`)))
    const data = responses.map(response => response.data)

    
    if(isSearch == false){
      setPokemons(data)
    }
  }

  useEffect(() => {
    if (isSearch == false) {
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pokemons])

  useEffect(() => {
    GetPokemons()
  }, [countResults])

  useEffect(() => {
    if (isSearch == true) {
      GetPokemonsBySearchTerm()
    }else {
      GetPokemons()
    }
  }, [isSearch])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCountResults((prevPage) => prevPage + 10);
    }
  };

  return (
    <div className="w-full h-full flex flex-wrap gap-20 items-center justify-center">
      {pokemons.map(pokemon => (
        <p
          key={pokemon.name}
          className="
            w-[200px]
            h-[300px]
          "
        >
          {pokemon.name}
        </p>
      ))}
    </div>
  )
}
