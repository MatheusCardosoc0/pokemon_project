"use client"

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

  async function AA(){
    let endpoints = []
    for (let i = 1; i < countResults; i++) {
      endpoints.push(i)
    }
    const responses = await axios.all(endpoints.map((endpoint) => api.get(`${endpoint}`) ))
    const data = responses.map(response => response.data)

    return setPokemons(prevData => [...prevData, ...data])
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll);
  },[pokemons])

  useEffect(() => {
    AA()
  },[countResults])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCountResults((prevPage) => prevPage + 10);
    }
  };

  console.log(pokemons)

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
