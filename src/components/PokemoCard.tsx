import { Pokemon } from "@/@types/pokemon_type"
import { pokeball } from '../assets/icons'
import addIconElementPokemon from "@/functions/addIconElementPokemon"
import Image from "next/image"
import AddBackgroundByPokemonType from "@/functions/addBackgroundByPokemonType"

interface PokemoCardProps {
  pokemon: Pokemon
}

const PokemoCard: React.FC<PokemoCardProps> = ({
  pokemon
}) => {



  return (
    <AddBackgroundByPokemonType pokemon={pokemon}
      
    >
      <div className="
        flex
        gap-2
        w-full
        justify-start
      ">
        {pokemon.types.map(type => {
          return (
            <span key={type.slot}>
              {addIconElementPokemon(type)}
            </span>
          )
        })}
      </div>
      <Image
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt="My Image"
        width={500}
        height={500}
      />

      <Image
        src={pokeball}
        alt="pokeball"
        className="
          absolute
          z-[-1]
          w-[140px]
          right-1
        "
      />

      <b
        className="
          text-xl
          text-white
        
          tracking-wider
        "
      >
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
      </b>
    </AddBackgroundByPokemonType>
  )
}

export default PokemoCard