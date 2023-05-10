type PokemonsTypes = {
  name: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" |"water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy"
}

type Elements = {
  slot: number
  type: PokemonsTypes
}

type Pokemon = {
  id: string
  name: string
  sprites: {
    back_default: string
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: Elements[]
}

export type {Pokemon, Elements, PokemonsTypes}
