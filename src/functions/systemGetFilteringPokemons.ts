'use client'

import { Pokemon } from '@/@types/pokemon_type'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import { api } from '@/util/axiosConfig'
import axios from 'axios'
import { useEffect, useState } from 'react'

function SystemGetFilteringPokemons() {
  const {
    pokemons,
    allPokemons,
    setAllPokemons,
    setPokemons,
    countResults,
    loading,
    setLoading
  } = usePokemonState()

  const allPokemonsTest = [...allPokemons]

  const { currentElementFilter, currentWeightFilter, isFilter } =
    useCurrentFilterState()

  console.log(allPokemons)

  async function AddElementFilter() {
    setLoading(true)
    try {
      if (currentElementFilter !== 'All') {
        const addFilterElement = allPokemonsTest.filter(
          pokemon => pokemon.types[0].type.name == currentElementFilter
        )

        setPokemons(addFilterElement.slice(0, countResults))
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  async function AddWeightFilter() {
    setLoading(true)
    
    if (currentWeightFilter == 'none') {

      setPokemons(allPokemons.slice(0, countResults))
    }

    if (currentWeightFilter == 'heavy') {
      const orderByHeavyWeight = allPokemonsTest.sort(
        (a: Pokemon, b: Pokemon) => b.weight - a.weight
      )

      setPokemons(orderByHeavyWeight.slice(0, countResults))
    }

    if (currentWeightFilter == 'light') {
      const orderByLightWeight = allPokemonsTest.sort(
        (a: Pokemon, b: Pokemon) => a.weight - b.weight
      )

      setPokemons(orderByLightWeight.slice(0, countResults))
    }

    setLoading(false)
  }

  useEffect(() => {
    AddWeightFilter()
    if (currentElementFilter !== 'All') {
      AddElementFilter()
    }
  }, [currentElementFilter, countResults, currentWeightFilter])

  return {
    AddElementFilter
  }
}

export default SystemGetFilteringPokemons
