import useInteractiveFormStore from "@/stores/interactiveFormStore"

interface FormStepProps{
    id: number
    isActive: boolean
    setCurrentStepHandler: (id: number) => void
}
function FormStep({ id, isActive, setCurrentStepHandler }: FormStepProps){
    const completedSteps = useInteractiveFormStore(state => state.completedSteps)
    return (
        <div onClick={() => { setCurrentStepHandler(id) }} className={`w-10 h-10 mr-10 ${isActive ? 'bg-lime-700 border-4 border-lime-900' : 'bg-lime-700' } ${id > completedSteps && 'bg-transparent border-4 border-lime-900 after:left-9'} cursor-pointer rounded-full relative after:bg-lime-600 after:block last:after:hidden after:absolute after:-z-10 ${isActive ? 'after:left-9' : 'after:left-10' } after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-2`}>
        </div>
    )
}
export default FormStep