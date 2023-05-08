import {create} from 'zustand'

interface UseSearchStateProps{
  searchTerm: string
  setSearchTerm: (value: string) => void
  isSearch: boolean
  setIsSearch: (value: boolean) => void
}

const useSearchState = create<UseSearchStateProps>(set => ({
  searchTerm: '',
  setSearchTerm: (value: string) => set({searchTerm: value}),
  isSearch: false,
  setIsSearch: (value: boolean) => set({isSearch: value})
}))

export default useSearchState
