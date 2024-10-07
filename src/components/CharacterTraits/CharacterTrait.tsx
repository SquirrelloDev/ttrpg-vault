import useHoverTraitStore from "@/stores/hoverStateStore"
import useMainTraitStore from "@/stores/mainTraitStore"
import { BasicTraits, HoverKeys } from "@/types/characterTraits"

interface CharacterTraitProps{
    traitName: string
    traitKey: keyof HoverKeys
    currentValueToAssign: number
    selectTraitFn: () => void
}
function CharacterTrait({ traitName, traitKey,  currentValueToAssign, selectTraitFn }: CharacterTraitProps){
    const traits = useMainTraitStore(state => state.traits)
    const setTrait = useMainTraitStore(state => state.setTrait)
    const setHoveredTrait = useHoverTraitStore(state => state.setTraitsHoverKey)
    const selectTraitHandler = () => {
        if(traits[traitKey as keyof BasicTraits] === 0) {
            setTrait(traitKey as keyof BasicTraits, currentValueToAssign)
            selectTraitFn()
        }
    }
    return (
        <div onClick={selectTraitHandler} onMouseOver={() => setHoveredTrait(traitKey)} className="flex justify-between text-2xl p-3 cursor-pointer last:rounded-b-lg hover:bg-lime-700 transition-colors">
            <p>{traitName}</p>
            <p>{traits[traitKey as keyof BasicTraits]}</p>
        </div>
    )
}
export default CharacterTrait