import {create} from 'zustand'

interface UseSearchStateProps{
  searchTerm: string
  setSearchTerm: (value: string) => void
}

const useSearchState = create<UseSearchStateProps>(set => ({
  searchTerm: '',
  setSearchTerm: (value: string) => set({searchTerm: value}),
}))

export default useSearchState
