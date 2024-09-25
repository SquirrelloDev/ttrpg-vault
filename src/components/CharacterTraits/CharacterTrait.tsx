import useMainTraitStore from "@/stores/mainTraitStore"
import { BasicTraits } from "@/types/characterTraits"

interface CharacterTraitProps{
    traitName: string
    traitKey: keyof BasicTraits
    currentValueToAssign: number
    selectTraitFn: () => void
}
function CharacterTrait({ traitName, traitKey,  currentValueToAssign, selectTraitFn }: CharacterTraitProps){
    const traits = useMainTraitStore(state => state.traits)
    const setTrait = useMainTraitStore(state => state.setTrait)
    const selectTraitHandler = () => {
        if(traits[traitKey] === 0) {
            setTrait(traitKey, currentValueToAssign)
            selectTraitFn()
        }
    }
    return (
        <div onClick={selectTraitHandler}  className="flex justify-between text-2xl p-3 cursor-pointer hover:bg-lime-700 transition-colors">
            <p>{traitName}</p>
            <p>{traits[traitKey]}</p>
        </div>
    )
}
export default CharacterTrait