import { Pokemon } from "@/@types/pokemon_type"
import axios from "axios"
import { useEffect } from "react"

interface PokemonImageProps {
  pokemon: Pokemon
}

const PokemonPageInfoTable = async ({
  pokemon
}: PokemonImageProps) => {

  const response = await axios.get(`${pokemon.species.url}`)

  function formatValue(value: number) {
    const metros = Math.floor(value / 10);
    const centimetros = value % 10;
    return `${metros},${centimetros}`;
  }
  

  return (
    <div
      className="
          w-[90%]
          max-w-[600px]
          bg-white
          h-full
          rounded-[40px]
          flex
          flex-col
          gap-4
          items-center
          p-4
          text-2xl
          font-semibold
        "
    >
      <span>Nome: {pokemon.name}</span>
      <span>Habitat: {response.data.habitat?.name || '???'}</span>
      <span>Altura: {formatValue(pokemon.height)} m</span>
      <span>Peso: {formatValue(pokemon.weight)} kg</span>
    </div>
  )
}

export default PokemonPageInfoTable