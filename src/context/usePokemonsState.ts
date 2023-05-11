import { Pokemon } from "@/@types/pokemon_type";
import { create } from "zustand";

interface UsePokemonsState{
  pokemons: Pokemon[]
  setPokemons: (pokemons: Pokemon[]) => void
}

export const usePokemonState = create<UsePokemonsState>(set => ({
  pokemons: [],
  setPokemons: (pokemons: Pokemon[]) => set({pokemons: pokemons})
}))