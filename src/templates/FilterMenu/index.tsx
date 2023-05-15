"use client"

import { ElementsVariations } from '@/@types/pokemon_type'
import Button from '@/components/Button'
import Radio from '@/components/Inputs/Radio'
import Select from '@/templates/FilterMenu/Select'
import { useCurrentFilterState } from '@/context/useCurrentFilterState'
import { useMenuFilterState } from '@/context/useMenuFilterState'
import React from 'react'

interface FilterMenuProps {
  type_name: ElementsVariations[]
}

function FilterMenu({
  type_name
}: FilterMenuProps) {

  const { isOpen } = useMenuFilterState()
  const {
    currentWeightFilter,
    isFilter,
    currentHeightFilter,
    setCurrentWeightFilter,
    setResetFilter,
    setCurrentHeightFilter
  } = useCurrentFilterState()

  if (isOpen == false) {
    return <div />
  }

  console.log(isFilter)

  return (
    <div
      aria-label='filter-menu'
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
        md:w-[50%]
        bg-white
        py-6
        px-4
        sm:pl-20
        md:rounded-tl-[20%]
        flex
        flex-col
        items-center
        sm:items-end
        gap-8
      '
    >
      <h2 className='text-2xl font-bold'>Filtros:</h2>
      <Select type_names={type_name} />

      <Radio
        title='Peso:'
        label={'heavy'}
        secondaryLabel='light'
        action={setCurrentWeightFilter}
        value={currentWeightFilter}
      />

      <Radio
        title='Altura:'
        label={'tall'}
        secondaryLabel='small'
        action={setCurrentHeightFilter}
        value={currentHeightFilter}
      />

      <Button
        label='Resetar filtros'
        onClick={() => setResetFilter()}
        color='done'
      />
    </div>
  )
}

export default FilterMenu