"use client"

import { ElementsVariations } from '@/@types/pokemon_type'
import Button from '@/components/Button'
import Select from '@/components/Inputs/Select'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { useMenuFilterState } from '@/context/useMenuFilterState'
import React from 'react'

interface FilterMenuProps{
  type_name: ElementsVariations[]
}

function FilterMenu({
  type_name
}: FilterMenuProps) {

  const { isOpen } = useMenuFilterState()
  const {
    setResetFilter,
    isFilter
  } = useCurrentFilterState()

  if(isOpen == false){
    return <div />
  }

  console.log(isFilter)

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
        w-[90%]
        sm:w-[50%]
        bg-white
        py-6
        px-4
        sm:pl-20
        sm:rounded-tl-[20%]
        flex
        flex-col
        items-center
        sm:items-end
      '
    >
      <Select type_names={type_name} />

      

      <Button
        label='Resetar filtros'
        onClick={() => setResetFilter()}
        color='done'
      />
    </div>
  )
}

export default FilterMenu