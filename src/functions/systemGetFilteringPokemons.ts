'use client'

import { Pokemon } from '@/@types/pokemon_type'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import { api } from '@/util/axiosConfig'
import axios from 'axios'
import { useEffect, useState } from 'react'

function SystemGetFilteringPokemons() {

  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])

  const { pokemons, setPokemons, countResults, loading, setLoading } =
    usePokemonState()

  const { currentElementFilter, currentWeightFilter, isFilter } =
    useCurrentFilterState()

  async function GetAllPokemons() {
    setLoading(true)
    try {
      const response = await api.get('?limit=1281')

      const responses = await axios.all(
        response.data.results.map((pokemon: any) => axios.get(`${pokemon.url}`))
      )

      const data = responses.map((response: any) => response.data)

      setAllPokemons(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  console.log(allPokemons)

  async function GetFilteredByElementPokemons() {
    setLoading(true)
    try {
      if(currentElementFilter !== 'All'){
        const addFilterElement = allPokemons.filter(pokemon => pokemon.types[0].type.name == currentElementFilter)

        setPokemons(addFilterElement.slice(0, countResults))
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    GetAllPokemons()
  },[])

  useEffect(() => {
    if (currentElementFilter !== 'All') {
      GetFilteredByElementPokemons()
    }
  }, [currentElementFilter])

  useEffect(() => {
    if (currentElementFilter !== 'All') {
      GetFilteredByElementPokemons()
    }
  }, [countResults])

  return {
    GetFilteredByElementPokemons
  }
}

export default SystemGetFilteringPokemons
