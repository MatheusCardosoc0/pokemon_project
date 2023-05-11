'use client'

import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import useSearchState from '@/context/useSearchState'
import SystemGetFilteringPokemons from '@/functions/systemGetFilteringPokemons'
import SystemSearchAndGetPokemons from '@/functions/systemSearchAndGetPokemons'
import { useEffect } from 'react'

export const useGetPokemons = () => {
  //Functions of context

  const { searchTerm } = useSearchState()

  const { pokemons, countResults, setCountResults } = usePokemonState()

  const { isFilter } = useCurrentFilterState()

  //Functions of Get Data of Api

  const { loading } = SystemSearchAndGetPokemons()

  const { GetFilteredByElementPokemons } = SystemGetFilteringPokemons()

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

  return {
    pokemons,
    loading,
    isFilter,
    GetFilteredByElementPokemons
  }
}
