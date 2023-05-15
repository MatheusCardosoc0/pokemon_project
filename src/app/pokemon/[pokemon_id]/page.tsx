import { Pokemon } from "@/@types/pokemon_type"
import { colorsByTypeOfPokemon } from "@/constants/colorsByTypeOfPokemon"
import PokemonPageImage from "@/templates/Pokemon-Page/PokemonPageImage"
import PokemonPageInfoTable from "@/templates/Pokemon-Page/PokemonPageInfoTable"
import { api } from "@/util/axiosConfig"
import Image from "next/image"

type Params = {
  params: {
    pokemon_id: string
  }
}

export default async function PokemonPage({
  params
}: Params) {

  const response = await api(`/${params.pokemon_id}`)

  const pokemon: Pokemon = response.data

  return (
    <section
      className={`
        ${colorsByTypeOfPokemon[pokemon.types[0].type.name]}
        w-full
        h-full
        flex
        flex-col
        items-center
        py-12
        gap-8
      `}
    >

      <PokemonPageImage pokemon={pokemon} />
      {/* @ts-expect-error Server Component */}
      <PokemonPageInfoTable  pokemon={pokemon} />
    </section>
  )
}
