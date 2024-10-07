import { HoverKeys } from "@/types/characterTraits";
import { create } from "zustand";

interface HoverTraitStore{
    mainTraitsHoverKey:  keyof HoverKeys | ''
    setTraitsHoverKey: (key: keyof HoverKeys) => void
}
const useHoverTraitStore = create<HoverTraitStore>()((set) => ({
    mainTraitsHoverKey: '',
    setTraitsHoverKey: (key) => {
        set({ mainTraitsHoverKey:  key })
    }
}))
export default useHoverTraitStore