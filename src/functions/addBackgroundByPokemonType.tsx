import { Elements, Pokemon } from '@/@types/pokemon_type'

interface AddBackgroundByPokemonTypeProps{
  pokemon: Pokemon
  children: React.ReactNode
}

export default function AddBackgroundByPokemonType({
  pokemon,
  children
}: AddBackgroundByPokemonTypeProps) {

  const type = pokemon.types[0]

  const background = {
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
    <div
      className={`
        w-[200px]
        h-[300px]
        ${background[type.type.name]}
        p-1
        flex
        flex-col
        items-center
        justify-center
        rounded-xl
        relative
        z-[-2]
        brightness-105
        shadow-shadowButton
      `}
    >
      {children}
    </div>
  )
}
