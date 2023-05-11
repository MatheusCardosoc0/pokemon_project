import { ElementsVariations } from '@/@types/pokemon_type'
import { create } from 'zustand'

type ElementsVariationWithDefaultValue = ElementsVariations | 'All'
type WeightVariations = 'heavy' | 'light' | 'none'

interface UseCurrentFilterState {
  isFilter: boolean
  currentElementFilter: ElementsVariationWithDefaultValue
  currentWeightFilter: WeightVariations
  setCurrentElementFilter: (value: ElementsVariations) => void
  setResetFilter: () => void
}

export const useCurrentFilterState = create<UseCurrentFilterState>(set => ({
  isFilter: false,
  currentElementFilter: 'All',
  currentWeightFilter: 'none',
  setCurrentElementFilter: (value: ElementsVariations) =>
    set({ currentElementFilter: value, isFilter: true }),
  setResetFilter: () =>
    set({
      isFilter: false,
      currentElementFilter: 'All',
      currentWeightFilter: 'none'
    })
}))
