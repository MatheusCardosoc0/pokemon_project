import { Pokemon } from "@/@types/pokemon_type"
import addIconElementPokemon from "@/functions/addIconElementPokemon"

interface PokemoCardProps {
  pokemon: Pokemon
}

const PokemoCard: React.FC<PokemoCardProps> = ({
  pokemon
}) => {

  

  return (
    <div
      className="
        w-[200px]
        h-[300px]
        bg-yellow-500
        p-1
        flex
        flex-col
        items-center
        justify-center
      "
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
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt="My Image"
        width={500}
        height={500}
      />

      <b>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}
      </b>
    </div>
  )
}

export default PokemoCard