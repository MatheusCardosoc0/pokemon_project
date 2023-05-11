type Elements = {
  slot: number
  type: {
    name: "normal" | "fighting" | "flying" | "poison" | "ground" | "rock" | "bug" | "ghost" | "steel" | "fire" |"water" | "grass" | "electric" | "psychic" | "ice" | "dragon" | "dark" | "fairy"
  }
}

type ElementsVariations = Elements['type']['name']

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
  weight: number
  types: Elements[]
}

export type {Pokemon, Elements, ElementsVariations}
