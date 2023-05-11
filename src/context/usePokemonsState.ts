import { Pokemon } from '@/@types/pokemon_type'
import { create } from 'zustand'

interface UsePokemonsState {
  pokemons: Pokemon[]
  countResults: number
  loading: boolean
  setPokemons: (pokemons: Pokemon[]) => void
  setCountResults: (value: number) => void
  setLoading: (value: boolean) => void
}

export const usePokemonState = create<UsePokemonsState>(set => ({
  pokemons: [],
  countResults: 20,
  loading: false,
  setPokemons: (pokemons: Pokemon[]) => set({ pokemons: pokemons }),
  setCountResults: (value: number) => set({ countResults: value }),
  setLoading: (value: boolean) => set({ loading: value })
}))
