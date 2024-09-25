import FormProgress from "@/components/Form/FormProgress/FormProgress";
import FormCharName from "@/components/Form/Forms/FormCharName";
import FormTraits from "@/components/Form/Forms/FormTraits";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function InteractiveMode() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [searchParams] = useSearchParams()
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-house-bg relative z-0">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-zinc-900/50 -z-10"></div>
      <div className="flex justify-center w-full">
        <FormProgress currentStep={currentStep} setCurrentStep={setCurrentStep} steps={[{ id: 0, formPage: 'name' }, { id: 1, formPage: 'traits' }, { id: 2, formPage: 'job' }, { id: 3, formPage:'interests' }, { id: 4, formPage: 'background' }]} />
      </div>
      {Number(searchParams.get('p')) === 0 && <FormCharName setCurrentStep={setCurrentStep}/>} 
      {Number(searchParams.get('p')) === 1 && <FormTraits />}
    </div>
  );
}
export default InteractiveMode;
