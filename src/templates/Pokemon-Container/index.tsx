"use client"

import PokemoCard from "@/templates/Pokemon-Container/PokemoCard"
import { useGetPokemons } from "@/hooks/useGetPokemons"
import Button from "@/components/Button"
import { Pokemon } from "@/@types/pokemon_type"
import Skeleton from "@/components/Skeleton"

interface PokemonContainerTemplateProps{
  allPokemons: Pokemon[]
}


export default function PokemonContainerTemplate({
  allPokemons
}: PokemonContainerTemplateProps) {

  

  const {
    pokemons,
    loading,
    isFilter,
    filterPokemonsByElement
  } = useGetPokemons()

  return (
    <div
      className="
        w-full 
        h-full 
        flex 
        flex-wrap 
        gap-16
        lg:gap-20
        px-4
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
      {loading && <Skeleton qt={10} />}

      {isFilter == true && pokemons.length <= 10 && (
        <Button
          label="Buscar mais"
          onClick={() => filterPokemonsByElement()}
          custom_style="hidden md:block"
        />
      )}
    </div>
  )
}
