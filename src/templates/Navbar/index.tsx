"use client"

import Filters from "./FilterButton"
import Logo from "./Logo"
import SearchBar from "./SearchBar"

export default function NavbarTemplate() {
  return (
    <nav
      className="
        bg-red-600
        fixed
        top-0
        w-full
        flex
        justify-between
        px-5
        py-3
        md:px-8
        border-b-4
        border-red-800
        rounded-bl-full
        rounded-br-full
        items-center
        z-20
      "
    >
      <Logo />
      <SearchBar />
      <Filters />

    </nav>
  )
}