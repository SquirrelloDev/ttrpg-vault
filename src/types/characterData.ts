import { CharacterJobType } from "./characterJobs"

type CharacterData = {
    characterName: string
    age: number
    job: CharacterJobType | null
    gender: "M" | "K"
    domicile: string
    placeOfBirth: string
    description: string
    ideology: string
    importantPeople: string
    importantPlaces: string
    personalBelongings: string
    perks: string
    scars: string
    phobias: string
    mysteryItems: string
    strangeEncounters: string
}
export default CharacterData