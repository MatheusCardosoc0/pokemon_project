"use client"

import PokemoCard from "@/templates/Pokemon-Container/PokemoCard"
import { useGetPokemons } from "@/hooks/useGetPokemons"
import Button from "@/components/Button"
import Skeleton from "@/components/Skeleton"


export default function PokemonContainerTemplate() {
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
          aria_label="reload_button"
          label="Buscar mais"
          onClick={() => filterPokemonsByElement()}
          custom_style="hidden md:block"
        />
      )}
    </div>
  )
}
