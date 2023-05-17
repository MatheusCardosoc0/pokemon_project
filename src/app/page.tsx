import { Elements } from "@/@types/pokemon_type";
import FilterMenu from "@/templates/FilterMenu";
import NavbarTemplate from "@/templates/Navbar";
import PokemonContainerTemplate from "@/templates/Pokemon-Container";
import axios from "axios";

export default async function Home() {

  const typeOfPokemons = await axios.get('https://pokeapi.co/api/v2/type')
  const type_name = typeOfPokemons.data.results.map((
    type: Elements['type']) => type.name)

  

  return (
    <>
      <NavbarTemplate />
      <main
        className="
        h-full
        w-full
        flex
        justify-center
        items-center
        mt-60
        relative
      "
      >
        <FilterMenu type_name={type_name} />
        <PokemonContainerTemplate />
      </main>
    </>
  )
}
