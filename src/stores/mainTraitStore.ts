import { BasicTraits, DerivedTraits } from "@/types/characterTraits";
import { create } from "zustand";

interface MainTraitStore{
    traits: BasicTraits
    derivedTraits: DerivedTraits
    setLuck: (luckValue: number) => void
    lastSelectedTraits: (keyof BasicTraits)[]
    setTrait: (traitKey: keyof BasicTraits, value: number) => void
    setDerivedTrait: <K extends keyof DerivedTraits>(traitKey: K, value: DerivedTraits[K]) => void
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
    derivedTraits: {
        build: 0,
        damageMod: 0,
        healthPoints: 0,
        luckPoints: 0,
        magicPoints: 0,
        sanityPoints: 0
    },
    setLuck: (luckValue) => {
        set(state => ({ derivedTraits: { ...state.derivedTraits, luckPoints: luckValue } }))
    },
    lastSelectedTraits: [],
    setTrait: (traitKey, value) => {
        set(state =>  { 
            const helperTraitObj = state.traits
            helperTraitObj[traitKey] = value
            return { traits: helperTraitObj, lastSelectedTraits: [traitKey, ...state.lastSelectedTraits] }
         })
    },
    setDerivedTrait: <K extends keyof DerivedTraits>(traitKey: K, value: DerivedTraits[K]) => {
        set(state =>  { 
            const helperTraitObj = state.derivedTraits
            helperTraitObj[traitKey] = value
            return { derivedTraits: helperTraitObj }
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