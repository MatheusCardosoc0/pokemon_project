import { Pokemon } from '@/@types/pokemon_type'
import { create } from 'zustand'

interface UsePokemonsState {
  pokemons: Pokemon[]
  allPokemons: Pokemon[]
  countResults: number
  loading: boolean
  setAllPokemons: (pokemons: Pokemon[]) => void,
  setPokemons: (pokemons: Pokemon[]) => void
  setCountResults: (value: number) => void
  setLoading: (value: boolean) => void
}

export const usePokemonState = create<UsePokemonsState>(set => ({
  pokemons: [],
  countResults: 20,
  loading: false,
  allPokemons: [],
  setPokemons: (pokemons: Pokemon[]) => set({ pokemons: pokemons }),
  setCountResults: (value: number) => set({ countResults: value }),
  setLoading: (value: boolean) => set({ loading: value }),
  setAllPokemons: (pokemons: Pokemon[]) => set({ allPokemons: pokemons })
}))
