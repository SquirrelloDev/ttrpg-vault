import { BasicTraits } from "@/types/characterTraits";
import { create } from "zustand";

interface MainTraitStore{
    traits: BasicTraits
    lastSelectedTraits: (keyof BasicTraits)[]
    setTrait: (traitKey: keyof BasicTraits, value: number) => void
    shiftLastSelectedTraits: () => void
}
const useMainTraitStore = create<MainTraitStore>()((set) => ({
    traits: {
        strength: 0,
        apperance: 0,
        constitution: 0,
        power: 0,
        dexterity: 0,
        education: 0,
        intelligence: 0,
        move: 8,
        size: 0,
    },
    lastSelectedTraits: [],
    setTrait: (traitKey, value) => {
        set(state =>  { 
            const helperTraitObj = state.traits
            helperTraitObj[traitKey] = value
            return { traits: helperTraitObj, lastSelectedTraits: [traitKey, ...state.lastSelectedTraits] }
         })
    },
    shiftLastSelectedTraits: () => {
        set(state => {
            const currentSelectedTraits = state.lastSelectedTraits
            const helperTraitObj = state.traits
            helperTraitObj[currentSelectedTraits[0]] = 0
            currentSelectedTraits.shift()
            return { lastSelectedTraits: currentSelectedTraits }
        })
    }
}))
export default useMainTraitStore