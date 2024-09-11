import CharacterData from "@/types/characterData";
import { initCharData } from "@/utils/characterHelpers";
import { create } from "zustand";
interface InteractiveFormStore{
    characterData: CharacterData
    setCharacterName: (characterName: string) => void
}
const useInteractiveFormStore = create<InteractiveFormStore>()((set, get) => ({
    characterData: initCharData(),
    setCharacterName: (characterName) => {
        set((state) => ({ ...state, characterData: { ...state.characterData, characterName: characterName } }))
    },
    
}))
export default useInteractiveFormStore