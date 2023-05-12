'use client'

import { Pokemon } from '@/@types/pokemon_type'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import useSearchState from '@/context/useSearchState'
import { api } from '@/util/axiosConfig'
import axios from 'axios'
import { useEffect, useState } from 'react'

function SystemSearchAndGetPokemons(){

  const { 
    pokemons,
    allPokemons,
    countResults,
    loading,
    setCountResults,
    setPokemons,
    setLoading
  } = usePokemonState()

  const {isFilter} = useCurrentFilterState()

  const { searchTerm } = useSearchState()

  async function GetPokemonsBySearchTerm() {
    setLoading(true)
    try {

      const pokemonsWithSearchTerm = allPokemons.filter(
        (pokemon: Pokemon) => pokemon.name.includes(searchTerm)
      )

      setPokemons(pokemonsWithSearchTerm.slice(0, 30))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  async function GetPokemons() {
    setLoading(true)

      setPokemons(allPokemons.slice(0, countResults))
    setLoading(false)
  }

  useEffect(() => {
    if(isFilter == false){
      GetPokemons()
    }
  }, [countResults, isFilter, allPokemons])

  useEffect(() => {
    if (!!searchTerm == true) {
      GetPokemonsBySearchTerm()
    } else {
      GetPokemons()
    }
  }, [searchTerm])

  return {
    loading,
    GetPokemons,
  }
}

export default SystemSearchAndGetPokemons
