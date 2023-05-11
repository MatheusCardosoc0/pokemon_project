if (isFilter == true) {

  let endpoints = []
  for (let i = 1; i < 1281; i++) {
    if (i > 1281) {
      return
    }
    endpoints.push(i)
  }

  const responses = await axios.all(
    endpoints
      .slice(0, (countResults + customCount) * 15)
      .map(endpoint => api.get(`/${endpoint}`))
  )
  const data = responses.map(response => response.data)

  const addFilterElement = data.filter(
    (pokemon: Pokemon) =>
      pokemon.types[0].type.name === currentElementFilter
  )

  setPokemons(addFilterElement.slice(0, countResults))
}