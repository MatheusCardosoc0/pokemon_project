"use client"

import { useMenuFilterState } from '@/context/useMenuFilterState'
import React from 'react'

function FilterMenu() {

  const { isOpen } = useMenuFilterState()

  if(isOpen == false){
    return <div />
  }

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
      '
    >
      FilterMenuoooo
    </div>
  )
}

export default FilterMenu