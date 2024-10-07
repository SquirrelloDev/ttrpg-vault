import { Dispatch, SetStateAction } from "react"

export type FormStepType = {
    id: number
    formPage: string
}
export interface InteractiveFormProps{
    setCurrentStep: Dispatch<SetStateAction<number>>
}