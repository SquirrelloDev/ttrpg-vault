import Panel from "@/components/UI/Panel"
import useHoverTraitStore from "@/stores/hoverStateStore"
import traitData from '@/assets/data/mainTraits.json'
import { useMemo } from "react"
function TraitDesc() {
    const hoveredTraitKey = useHoverTraitStore(state => state.mainTraitsHoverKey)
    const traitName = useMemo<string>(() => hoveredTraitKey  ? traitData[hoveredTraitKey].name: '', [hoveredTraitKey]) 
    const traitDesc = useMemo<string>(() => hoveredTraitKey  ? traitData[hoveredTraitKey].description : '', [hoveredTraitKey]) 
    return (
        <Panel classNames="row-span-2">
            <div>
                <p className="text-2xl mb-2">{traitName}</p>
                <p className="text-lg">{traitDesc}</p>
            </div>
        </Panel>
    )
}
export default TraitDesc