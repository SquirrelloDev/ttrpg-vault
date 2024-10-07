import useHoverTraitStore from "@/stores/hoverStateStore"
import useMainTraitStore from "@/stores/mainTraitStore"
import { DamageModValues, DerivedTraits } from "@/types/characterTraits"
import { useEffect } from "react"

interface DerivedTraitProps{
    title: string
    traitKey: keyof DerivedTraits
    traitValue: number | DamageModValues
}
function DerivedTrait({ title, traitKey, traitValue }: DerivedTraitProps){
    const setHoveredTrait = useHoverTraitStore(state => state.setTraitsHoverKey)
    const setDerivedTrait = useMainTraitStore(state => state.setDerivedTrait)
    useEffect(() => {
        setDerivedTrait(traitKey, traitValue === 0 ? +0 : traitValue)
    }, [traitKey, traitValue, setDerivedTrait])
    return (
        <div className="flex justify-between text-2xl p-3 first:rounded-t-lg hover:bg-lime-700 transition-colors" onMouseMove={() => setHoveredTrait(traitKey)}>
        <p>{title}</p>
        <p>{traitValue}</p>
    </div>
    )
}
export default DerivedTrait