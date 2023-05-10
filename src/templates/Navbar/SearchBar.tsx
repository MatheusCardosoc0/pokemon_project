"use client"

import Input from '@/components/Inputs/Input'
import useSearchState from '@/context/useSearchState'

const SearchBar = () => {

  const {
    searchTerm,
    setSearchTerm,
  } = useSearchState()

  return (
    <div className='flex w-full gap-1 justify-center'>
      <input
        placeholder='Buscar...'
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        className='
          p-2
          rounded-lg
          border-2
          border-black
          outline-none
          focus:border-2
          focus:border-yellow-500
          w-[90%]
          sm:w-[50%]
        '
      />
    </div>
  )
}

export default SearchBar