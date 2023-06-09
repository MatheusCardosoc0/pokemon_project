import { ElementsVariations } from '@/@types/pokemon_type'
import { create } from 'zustand'

type ElementsVariationWithDefaultValue = ElementsVariations | 'All'
type WeightVariations = 'heavy' | 'light' | 'none'
type HeightVariations = 'tall' | 'small' | 'none'

interface UseCurrentFilterState {
  isFilter: boolean
  currentElementFilter: ElementsVariationWithDefaultValue
  currentWeightFilter: WeightVariations
  currentHeightFilter:  HeightVariations
  setCurrentElementFilter: (value: ElementsVariations) => void
  setResetFilter: () => void,
  setCurrentWeightFilter: (value: WeightVariations) => void
  setCurrentHeightFilter: (value: HeightVariations) => void
}

export const useCurrentFilterState = create<UseCurrentFilterState>(set => ({
  isFilter: false,
  currentElementFilter: 'All',
  currentWeightFilter: 'none',
  currentHeightFilter: 'none',
  setCurrentElementFilter: (value: ElementsVariations) =>
    set({ currentElementFilter: value, isFilter: true }),
  setResetFilter: () =>
    set({
      isFilter: false,
      currentElementFilter: 'All',
      currentWeightFilter: 'none'
    }),
  setCurrentWeightFilter: (value: WeightVariations) => set({currentWeightFilter: value}),
  setCurrentHeightFilter: (value: HeightVariations) => set({currentHeightFilter: value})
}))
