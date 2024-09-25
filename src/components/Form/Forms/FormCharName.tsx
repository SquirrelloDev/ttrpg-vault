import Button from "@/components/UI/Button"
import FormTextInput from "@/components/UI/FormTextInput"
import { FormProvider, useForm } from "react-hook-form"
import useInteractiveFormStore from "@/stores/interactiveFormStore"
import { useNavigate } from "react-router-dom"
import { Dispatch, SetStateAction } from "react"
type FormCharNameValues = {
    charName: string
}
interface FormCharNameProps {
    setCurrentStep: Dispatch<SetStateAction<number>>
}
function FormCharName({ setCurrentStep }: FormCharNameProps){
    const methods = useForm<FormCharNameValues>()
    const setCharacterName = useInteractiveFormStore(state => state.setCharacterName)
    const setCompletedSteps = useInteractiveFormStore(state => state.setCompletedSteps)
    const navigate = useNavigate()
    const { handleSubmit } = methods 
    const onSubmit = (data) => {
        setCharacterName(data)
        setCompletedSteps(1)
        setCurrentStep(1)
        navigate('?p=1')
    }
    return(
        <FormProvider {...methods}>
            <form className="flex flex-col mx-0 my-auto items-center">
            <h1 className="p-2 font-kalam text-center text-6xl font-bold text-white">Jak się nazywasz?</h1>
            <FormTextInput type="text" name="charName"/>
            <Button type="submit" onClickHandler={handleSubmit(onSubmit)}>Dalej</Button>
            </form>
        </FormProvider>
    )
}
export default FormCharName