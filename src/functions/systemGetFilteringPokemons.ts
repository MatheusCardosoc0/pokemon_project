'use client'

import { Pokemon } from '@/@types/pokemon_type'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import { api } from '@/util/axiosConfig'
import axios from 'axios'
import { useEffect } from 'react'

function SystemGetFilteringPokemons() {
  const { pokemons, setPokemons, countResults, loading, setLoading } =
    usePokemonState()

  const { currentElementFilter, currentWeightFilter, isFilter } =
    useCurrentFilterState()

  async function GetFilteredByElementPokemons() {
    setLoading(true)
    try {
      let endpoints = []
      for (let i = 1; i < 1281; i++) {
        if (i > 1281) {
          return
        }
        endpoints.push(i)
      }

      const responses = await axios.all(
        endpoints
          .slice(0, (countResults + 10) * 15)
          .map(endpoint => api.get(`/${endpoint}`))
      )
      const data = responses.map(response => response.data)

      const addFilterElement = data.filter(
        (pokemon: Pokemon) =>
          pokemon.types[0].type.name === currentElementFilter
      )

      setPokemons(addFilterElement.slice(0, countResults))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

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
