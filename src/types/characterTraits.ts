export type BasicTraits = {
    strength: number
    constitution: number
    dexterity: number
    power: number
    intelligence: number
    apperance: number
    size: number
    education: number
    move: number
}
type damageModValues = number | "1K4" | "1K6"
export type DerivedTraits = {
    healthPoints: number
    sanityPoints: number
    magicPoints: number
    luckPoints: number
    damageMod: damageModValues
    build: number
}
export type CharacterTraits = BasicTraits & DerivedTraits