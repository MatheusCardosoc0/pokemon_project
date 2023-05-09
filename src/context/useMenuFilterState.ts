import { create } from "zustand"

interface UseMenuFilterStateProps{
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const useMenuFilterState = create<UseMenuFilterStateProps>(set => ({
  isOpen: false,
  setIsOpen: value => set({isOpen: value})
}))