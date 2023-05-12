'use client'

import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { usePokemonState } from '@/context/usePokemonsState'
import useSearchState from '@/context/useSearchState'
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

  const { AddElementFilter } = SystemGetFilteringPokemons()

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

  useEffect(() => {
    GetAllPokemons()
  },[])

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
    AddElementFilter
  }
}
