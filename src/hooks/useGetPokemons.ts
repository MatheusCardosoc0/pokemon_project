'use client'

import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import useSearchState from '@/context/useSearchState'
import { GetAllPokemons } from '@/functions/getAllPokemons'
import SystemGetFilteringPokemons from '@/functions/systemGetFilteringPokemons'
import SystemSearchAndGetPokemons from '@/functions/systemSearchAndGetPokemons'
import { api } from '@/util/axiosConfig'
import axios from 'axios'
import { useEffect } from 'react'

export const useGetPokemons = () => {
  //Functions of context

  const { searchTerm } = useSearchState()

  const { pokemons, loading, setLoading, allPokemons, setAllPokemons, countResults, setCountResults } = usePokemonState()

  const { isFilter } = useCurrentFilterState()

  //Functions of Get Data of Api

  SystemSearchAndGetPokemons()

  const { filterPokemonsByElement } = SystemGetFilteringPokemons()

  GetAllPokemons()
  //Infinite scroll control function

  useEffect(() => {
    if (!!searchTerm == false) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pokemons])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCountResults(countResults + 10)
    }
  }

  console.log(pokemons)

  return {
    pokemons,
    loading,
    isFilter,
    filterPokemonsByElement
  }
}
