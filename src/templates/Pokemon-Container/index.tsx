"use client"

import PokemoCard from "@/components/PokemoCard"
import { useGetPokemons } from "@/hooks/useGetPokemons"


export default function PokemonContainerTemplate() {

  const { pokemons, loading } = useGetPokemons()

  return (
    <div
      className="
        w-full 
        h-full 
        flex 
        flex-wrap 
        gap-20
        pb-20 
        items-center 
        justify-center
      ">
      {pokemons && pokemons.map(pokemon => (
        <PokemoCard
          key={pokemon.name}
          pokemon={pokemon}
        />
      ))}
      {loading && <div>Carregando</div>}
    </div>
  )
}
