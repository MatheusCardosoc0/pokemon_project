import { Pokemon } from "@/@types/pokemon_type"
import { default_pokemon } from "@/assets/icons"
import { colorsByTypeOfPokemon } from "@/constants/colorsByTypeOfPokemon"
import Image from "next/image"

interface PokemonImageProps {
  pokemon: Pokemon
}

const PokemonPageImage = ({
  pokemon
}: PokemonImageProps) => {

  return (
    <div className=" p-2 bg-white rounded-full" >
      <div className={`p-2 rounded-full ${colorsByTypeOfPokemon[pokemon.types[0].type.name]}`}>

        <div className=" p-2 bg-white rounded-full">
          {pokemon.sprites.other["official-artwork"].front_default ?
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={400}
              height={400}
            /> :
            <Image
              src={default_pokemon}
              alt={pokemon.name}
              width={500}
              height={500}
            />}
        </div>
      </div>
    </div>
  )
}

export default PokemonPageImage