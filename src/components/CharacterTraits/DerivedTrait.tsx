import useHoverTraitStore from "@/stores/hoverStateStore"
import { DamageModValues, DerivedTraits } from "@/types/characterTraits"

interface DerivedTraitProps{
    title: string
    traitKey: keyof DerivedTraits
    traitValue: number | DamageModValues
}
function DerivedTrait({ title, traitKey, traitValue }: DerivedTraitProps){
    const setHoveredTrait = useHoverTraitStore(state => state.setTraitsHoverKey)
    return (
        <div className="flex justify-between text-2xl p-3 first:rounded-t-lg hover:bg-lime-700 transition-colors" onMouseMove={() => setHoveredTrait(traitKey)}>
        <p>{title}</p>
        <p>{traitValue}</p>
    </div>
    )
}
export default DerivedTrait