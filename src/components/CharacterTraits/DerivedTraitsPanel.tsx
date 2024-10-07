import Panel from "@/components/UI/Panel"
import useMainTraitStore from "@/stores/mainTraitStore"
import { useMemo } from "react"
import DerivedTrait from "@/components/CharacterTraits/DerivedTrait"
import { DamageModValues } from "@/types/characterTraits"

function DerivedTraitsPanel(){
    const traits = useMainTraitStore(state => state.traits)
    const hpValue = useMemo<number>(() =>  Math.floor((traits.constitution + traits.size) / 10), [traits.constitution, traits.size])
    const mpValue = useMemo<number>(() => Math.floor(traits.power / 5), [traits.power])
    const damageModBuildValue = useMemo<{damage: DamageModValues, build: number}>(() => {
        const dmgModSum = Math.floor(traits.size + traits.strength)
        if(dmgModSum >= 2 && dmgModSum <= 64) return { damage: -2, build: -2 }
        if(dmgModSum >= 65 && dmgModSum <= 84) return { damage: -1, build: -1 }
        if(dmgModSum >= 85 && dmgModSum <= 124) return { damage: 0, build: -0 }
        if(dmgModSum >= 125 && dmgModSum <= 164) return { damage: "1K4", build: 1 }
        if(dmgModSum >= 165 && dmgModSum <= 204) return { damage: "1K6", build: 2 }
        return { damage: 0, build: 0 }
    }, [traits.size, traits.strength])
    return (
        <Panel classNames="row-span-2" defaultPadding={false}>
            <DerivedTrait title="PŻ" traitKey="healthPoints" traitValue={hpValue}/>
            <DerivedTrait title="PM" traitKey="magicPoints" traitValue={mpValue}/>
            <DerivedTrait title="PP" traitKey="sanityPoints" traitValue={traits.power}/>
            <DerivedTrait title="MO" traitKey="damageMod" traitValue={damageModBuildValue.damage}/>
            <DerivedTrait title="Krzepa" traitKey="build" traitValue={damageModBuildValue.build}/>
        </Panel>
    )
}
export default DerivedTraitsPanel