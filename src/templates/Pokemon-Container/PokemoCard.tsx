import { Pokemon } from "@/@types/pokemon_type"
import { pokeball, default_pokemon } from '../../assets/icons'
import Image from "next/image"
import { colorsByTypeOfPokemon } from "@/constants/colorsByTypeOfPokemon"
import CardTypes from "./CardTypes"

interface PokemoCardProps {
  pokemon: Pokemon
}

const PokemoCard: React.FC<PokemoCardProps> = ({
  pokemon
}) => {

  return (
    <button
      aria-label={pokemon.name}
      className={`
      w-[200px]
      h-[300px]
      p-1
      flex
      flex-col
      items-center
      justify-center
      rounded-xl
      relative
      brightness-105
      shadow-shadowButton
      z-10
      transition-all
      duration-500
      hover:scale-110
      ${colorsByTypeOfPokemon[pokemon.types[0].type.name]}
    `}
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
              <CardTypes type={type} />
            </span>
          )
        })}
      </div>
      {pokemon.sprites.other["official-artwork"].front_default ?
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="My Image"
          width={500}
          height={500}
        /> :
        <Image
          src={default_pokemon}
          alt="My Image"
          width={500}
          height={500}
        />}

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
    </button>
  )
}

export default PokemoCard