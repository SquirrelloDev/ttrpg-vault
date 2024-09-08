import FormStep from "./FormStep"
interface FormProgressProps{
    steps: number
}
function FormProgress({ steps }:FormProgressProps){
    return(
        <div className="flex py-3">
            {new Array(steps).fill(0).map(() => <FormStep key={Math.random() * 1000}/>)}
        </div>
    )
}
export default FormProgress