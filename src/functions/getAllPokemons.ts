"use client"

import { usePokemonState } from "@/context/usePokemonsState"
import { api } from "@/util/axiosConfig"
import axios from "axios"
import { useEffect } from "react"

export async function GetAllPokemons(){

  const {
    setLoading,
    setAllPokemons
  } = usePokemonState()

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
}