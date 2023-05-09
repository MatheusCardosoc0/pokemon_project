'use client'

import { Pokemon } from '@/@types/pokemon_type'
import useSearchState from '@/context/useSearchState'
import { api } from '@/util/axiosConfig'
import axios, { AxiosPromise } from 'axios'
import { useEffect, useState } from 'react'

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [countResults, setCountResults] = useState(20)

  const { searchTerm } = useSearchState()

  async function GetPokemonsBySearchTerm() {
    setLoading(true)
    try {
      const response = await api('?limit=1281')

      const pokemonsWithSearchTerm = response.data.results.filter(
        (pokemon: Pokemon) => pokemon.name.includes(searchTerm)
      )

      const pokemonNames = pokemonsWithSearchTerm
        .slice(0, 20)
        .map((pokemon: any) => pokemon)

      const responses = await axios.all(
        pokemonNames.map((pokemon: any) => axios.get(`${pokemon.url}`))
      )

      const data = responses.map((response: any) => response.data)

      console.log(data)

      setPokemons(data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  async function GetPokemons() {
    setLoading(true)
    try {
      let endpoints = []
      for (let i = 1; i < countResults; i++) {
        endpoints.push(i)
      }
      const responses = await axios.all(
        endpoints.map(endpoint => api.get(`/${endpoint}`))
      )
      const data = responses.map(response => response.data)

      if (!!searchTerm == false) {
        setPokemons(data)
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCountResults(prevPage => prevPage + 10)
    }
  }

  useEffect(() => {
    if (!!searchTerm == false) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pokemons])

  useEffect(() => {
    GetPokemons()
  }, [countResults])

  useEffect(() => {
    if (!!searchTerm == true) {
      GetPokemonsBySearchTerm()
    } else {
      GetPokemons()
    }
  }, [searchTerm])

  return {
    pokemons,
    loading
  }
}
