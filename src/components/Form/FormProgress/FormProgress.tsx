import FormStep from "@/components/Form/FormProgress/FormStep"
import useInteractiveFormStore from "@/stores/interactiveFormStore"
import { FormStepType } from "@/types/formSteps"
import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
interface FormProgressProps{
    currentStep: number
    setCurrentStep: Dispatch<SetStateAction<number>>
    steps: FormStepType[]
}
function FormProgress({ steps, currentStep, setCurrentStep }:FormProgressProps){

    const navigate = useNavigate()
    const completedSteps = useInteractiveFormStore(state => state.completedSteps)
    const setCurrentStepHandler = (id: number) => {
        if(id <= completedSteps) {
            setCurrentStep(id)
            navigate(`?p=${id}`)
        }
    }
    return(
        <div className="flex py-3">
            {steps.map((step) => <FormStep isActive={step.id === currentStep} id={step.id} setCurrentStepHandler={setCurrentStepHandler} key={step.formPage}/>)}
        </div>
    )
}
export default FormProgress