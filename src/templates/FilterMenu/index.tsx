"use client"

import { PokemonsTypes } from '@/@types/pokemon_type'
import Select from '@/components/Inputs/Select'
import { useMenuFilterState } from '@/context/useMenuFilterState'
import React from 'react'

interface FilterMenuProps{
  type_name: PokemonsTypes[]
}

function FilterMenu({
  type_name
}: FilterMenuProps) {

  const { isOpen } = useMenuFilterState()

  if(isOpen == false){
    return <div />
  }

  console.log(type_name)

  return (
    <div
      className='
        fixed
        top-[20%]
        right-0
        z-30
        transition-all
        duration-1000
        fluidity
        h-[80%]
        w-[50%]
        bg-white
        py-6
        pr-4
        pl-20
        rounded-tl-[20%]
        flex
        flex-col
        items-end
      '
    >
      <Select type_names={type_name} />
    </div>
  )
}

export default FilterMenu