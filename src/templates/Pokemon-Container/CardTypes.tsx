import {
  bug, dark, dragon,
  electric,
  fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water
} from "@/assets/icons"
import Image from "next/image"

import { Elements } from "@/@types/pokemon_type"
import { colorsByTypeOfPokemon } from "@/constants/colorsByTypeOfPokemon"

interface CardTypeProps{
  type: Elements
}

const CardTypes: React.FC<CardTypeProps> = ({
  type
}) => {

  const typeName = type.type.name

  const icons = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    fighting: fighting,
    fire: fire,
    flying: flying,
    ghost: ghost,
    grass: grass,
    ground: ground,
    ice: ice,
    normal: normal,
    poison: poison,
    psychic: psychic,
    rock: rock,
    steel: steel,
    water: water
  }

  return (
    <Image
      src={icons[typeName]}
      alt={typeName}
      width={46}
      height={46}
      className={`
        rounded-full
        p-1
        ${colorsByTypeOfPokemon[typeName]}
        shadow-shadowButton
      `}
    />
  )
}

export default CardTypes
