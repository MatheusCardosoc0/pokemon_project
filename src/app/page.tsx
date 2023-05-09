import FilterMenu from "@/templates/FilterMenu";
import Form from "@/templates/Form-Component";
import LoginModal from "@/templates/LoginModal";
import NavbarTemplate from "@/templates/Navbar";
import PokemonContainerTemplate from "@/templates/Pokemon-Container";
import axios from "axios";



export default async function Home() {


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
        <FilterMenu />
        <PokemonContainerTemplate />
      </main>
    </>
  )
}
