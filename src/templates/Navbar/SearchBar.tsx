"use client"

import Input from '@/components/Input'

const SearchBar = () => {


  return (
    <>
      <input
        placeholder='Buscar...'
        className='
          p-2
          rounded-lg
          w-[50%]
          border-2
          border-black
          outline-none
        '
      />
    </>
  )
}

export default SearchBar