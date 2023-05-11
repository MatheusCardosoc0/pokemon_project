import { ElementsVariations } from "@/@types/pokemon_type";
import { create } from "zustand";

type ElementsVariationWithDefaultValue = ElementsVariations | 'Todos'

interface UseCurrentFilterState{
  isFilter: boolean
  currentElementFilter: ElementsVariationWithDefaultValue
  setCurrentElementFilter: (value: ElementsVariations) => void
}

export const useCurrentFilterState = create<UseCurrentFilterState>(set => ({
  isFilter: false,
  currentElementFilter: "Todos",
  setCurrentElementFilter: (value: ElementsVariations) => set({currentElementFilter: value, isFilter: true})
}))