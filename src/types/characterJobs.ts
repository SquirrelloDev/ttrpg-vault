import CharacterSkills from "./characterSkills"

export type CharacterJobType = {
    name: string
    essentialSkills: (keyof CharacterSkills)[]
}
export default class CharacterJob {
    name: string
    essentialSkills: (keyof CharacterSkills)[]
    constructor(name: string, essentialSkills: (keyof CharacterSkills)[]) {
        this.name = name
        this.essentialSkills = essentialSkills
    }
}