"use client"

import Input from '@/components/Input'
import useSearchState from '@/context/useSearchState'

const SearchBar = () => {

  const {
    isSearch,
    searchTerm,
    setSearchTerm,
    setIsSearch
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
          w-[50%]
        '
      />

      <button
        onClick={() => setIsSearch(!isSearch)}
        className={`
          px-1
          py-3
          bg-purple-500
          rounded-full
          text-white
          font-bold
          shadow-shadowButton
          hover:shadow-shadowButtonHover
          ${isSearch && 'bg-yellow-500'}
        `}
      >
        Buscar
      </button>
    </div>
  )
}

export default SearchBar