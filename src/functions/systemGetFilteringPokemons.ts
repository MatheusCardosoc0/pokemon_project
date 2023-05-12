'use client'

import { useEffect } from 'react'
import { Pokemon } from '@/@types/pokemon_type'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'

function SystemGetFilteringPokemons() {
  const { pokemons, allPokemons, setPokemons, countResults, setLoading } =
    usePokemonState()

  const { currentElementFilter, currentHeightFilter, currentWeightFilter } =
    useCurrentFilterState()

  const allPokemonsTest = [...allPokemons]

  async function filterPokemonsByElement() {
    try {
      const addFilterElement = allPokemonsTest.filter(
        pokemon => pokemon.types[0].type.name === currentElementFilter
      )
      setPokemons(addFilterElement.slice(0, countResults))
    } catch (error) {
      console.log(error)
    }
  }

  async function filterPokemonsByWeight() {
    const sortedPokemons = allPokemonsTest.sort((a: Pokemon, b: Pokemon) => {
      if (currentWeightFilter === 'heavy') {
        return b.weight - a.weight
      } else if (currentWeightFilter === 'light') {
        return a.weight - b.weight
      }
      return 0
    })
    setPokemons(sortedPokemons.slice(0, countResults))
  }

  async function filterPokemonsByHeight() {
    const sortedPokemons = allPokemonsTest.sort((a: Pokemon, b: Pokemon) => {
      if (currentHeightFilter === 'tall') {
        return b.height - a.height
      } else if (currentHeightFilter === 'small') {
        return a.height - b.height
      }
      return 0
    })
    setPokemons(sortedPokemons.slice(0, countResults))
  }

  useEffect(() => {
    setLoading(true)

    filterPokemonsByWeight()
    filterPokemonsByHeight()
    if (currentWeightFilter == 'none' && currentHeightFilter == 'none') {
      setPokemons(allPokemons.slice(0, countResults))
    }
    if (currentElementFilter !== 'All') {
      filterPokemonsByElement()
    }

    setLoading(false)
  }, [
    currentElementFilter,
    countResults,
    currentWeightFilter,
    currentHeightFilter
  ])

  return {
    filterPokemonsByElement
  }
}

export default SystemGetFilteringPokemons
