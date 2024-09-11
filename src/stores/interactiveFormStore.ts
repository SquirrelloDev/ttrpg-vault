import CharacterData from "@/types/characterData";
import CharacterSkills from "@/types/characterSkills";
import { CharacterTraits } from "@/types/characterTraits";
import { initCharacterSkills, initCharacterTraits, initCharData } from "@/utils/characterHelpers";
import { create } from "zustand";
interface InteractiveFormStore{
    characterData: CharacterData
    characterTraits: CharacterTraits
    characterSkills: CharacterSkills
    setCharacterName: (characterName: string) => void
}
const useInteractiveFormStore = create<InteractiveFormStore>()((set) => ({
    characterData: initCharData(),
    characterTraits: initCharacterTraits(),
    characterSkills: initCharacterSkills(),
    setCharacterName: (characterName) => {
        set((state) => ({ ...state, characterData: { ...state.characterData, characterName: characterName } }))
    },

}))
export default useInteractiveFormStore