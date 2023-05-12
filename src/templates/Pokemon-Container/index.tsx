"use client"

import PokemoCard from "@/templates/Pokemon-Container/PokemoCard"
import { useGetPokemons } from "@/hooks/useGetPokemons"
import Button from "@/components/Button"
import { Pokemon } from "@/@types/pokemon_type"

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
    AddElementFilter
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
      {loading && <div>Carregando</div>}

      {isFilter == true && pokemons.length <= 10 && (
        <Button
          label="Buscar mais"
          onClick={() => AddElementFilter()}
          custom_style="hidden md:block"
        />
      )}
    </div>
  )
}
