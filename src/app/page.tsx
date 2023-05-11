import { Elements } from "@/@types/pokemon_type";
import FilterMenu from "@/templates/FilterMenu";
import Form from "@/templates/Form-Component";
import LoginModal from "@/templates/LoginModal";
import NavbarTemplate from "@/templates/Navbar";
import PokemonContainerTemplate from "@/templates/Pokemon-Container";
import { api } from "@/util/axiosConfig";
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
      "
      >
        <LoginModal />
        <FilterMenu type_name={type_name} />
        <PokemonContainerTemplate />
      </main>
    </>
  )
}
