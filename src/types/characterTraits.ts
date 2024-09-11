type BasicTraits = {
    strength: number
    constitution: number
    dexterity: number
    intelligence: number
    apperance: number
    size: number
    education: number
    move: 8
}
type damageModValues = number | "1K4" | "1K6"
type DerivedTraits = {
    healthPoints: number
    sanityPoints: number
    magicPoints: number
    luckPoints: number
    damageMod: damageModValues
    build: number
}
export type CharacterTraits = BasicTraits & DerivedTraits