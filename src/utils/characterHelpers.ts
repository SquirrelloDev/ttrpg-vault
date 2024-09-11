import CharacterData from "@/types/characterData"
export const initCharData = (): CharacterData => {
    return {
        characterName: '',
        age: -1,
        description: '',
        domicile: '',
        gender: "M",
        ideology: '',
        importantPeople: '',
        importantPlaces: '',
        job: null,
        mysteryItems: '',
        perks: '',
        personalBelongings: '',
        phobias: '',
        placeOfBirth: '',
        scars: '',
        strangeEncounters: ''
    }
}