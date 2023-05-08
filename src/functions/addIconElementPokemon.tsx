import {
  bug, dark, dragon,
  electric,
  fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water
} from "@/assets/icons"
import Image from "next/image"

import { Elements } from "@/@types/pokemon_type"

export default function addIconElementPokemon(type: Elements) {

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

  const stylesByType = {
    bug: 'bg-purple-700',
    dark: 'bg-indigo-700',
    dragon: 'bg-sky-600',
    electric: 'bg-yellow-500',
    fairy: 'bg-pink-500',
    fighting: 'bg-red-700',
    fire: 'bg-orange-600',
    flying: 'bg-sky-300',
    ghost: 'bg-gray-700',
    grass: 'bg-green-500',
    ground: 'bg-amber-900',
    ice: 'bg-blue-400',
    normal: 'bg-neutral-300',
    poison: 'bg-purple-400',
    psychic: 'bg-rose-700',
    rock: 'bg-orange-950',
    steel: 'bg-zinc-500',
    water: 'bg-cyan-400'
  }

  return (
    <Image
      src={icons[typeName]}
      alt={typeName}
      width={30}
      height={30}
      className={`
        rounded-full
        ${stylesByType[typeName]}
      `}
    />
  )
}
