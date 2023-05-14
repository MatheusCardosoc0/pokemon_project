import { Pokemon } from "@/@types/pokemon_type";

export const pokemonsExamples: Pokemon[] = [
  {
    id: '1',
    name: 'Bulbasaur',
    sprites: {
      back_default: '',
      front_default: '',
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    weight: 10,
    height: 20,
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
        },
      },
    ],
  }
]