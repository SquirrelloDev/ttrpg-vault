import DerivedTraitsPanel from "@/components/CharacterTraits/DerivedTraitsPanel";
import MainTraitsPanel from "@/components/CharacterTraits/MainTraitsPanel";
import TraitDesc from "@/components/CharacterTraits/TraitDesc";
import Button from "@/components/UI/Button";
import useInteractiveFormStore from "@/stores/interactiveFormStore";
import useMainTraitStore from "@/stores/mainTraitStore";
import { InteractiveFormProps } from "@/types/formSteps";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const availableTraitPoints = [40, 50, 50, 50, 60, 60, 70, 80];

function FormTraits({ setCurrentStep }: InteractiveFormProps) {
  const [traitPoints, setTraitPoints] = useState<number[]>([
    40, 50, 50, 50, 60, 60, 70, 80,
  ]);

  const methods = useForm();
  const setCompletedSteps = useInteractiveFormStore(state => state.setCompletedSteps)
  const basicTraits = useMainTraitStore(state => state.traits)
  const derivedTraits = useMainTraitStore(state => state.derivedTraits)
  const setCharacterTraits = useInteractiveFormStore(state => state.setCharacterTraits)
  const navigate = useNavigate()
  
  const lastSelectedTraits = useMainTraitStore(
    (state) => state.lastSelectedTraits
  );
  const shiftLastSelectedTraits = useMainTraitStore(
    (state) => state.shiftLastSelectedTraits
  );
  const selectTraitHandler = () => {
    setTraitPoints((prevState) => {
      const helperArr = prevState;
      helperArr[0] = NaN;
      return helperArr.filter((item) => !isNaN(item));
    });
  };
  const undoSelectionHandler = () => {
    if (availableTraitPoints.length - traitPoints.length === 0) return;
    
    const idxToUndo = availableTraitPoints.length - traitPoints.length - 1;
    const elementToUndo = availableTraitPoints[idxToUndo];
    setTraitPoints((prevState) => {
      return [elementToUndo, ...prevState];
    });
    shiftLastSelectedTraits();
  };
  const { handleSubmit } = methods 
  
  const onSubmit = (data) => {
    setCharacterTraits({ ...basicTraits, ...derivedTraits })
    setCompletedSteps(2)
    setCurrentStep(2)
    navigate('?p=2')
  } 
  return (
    <FormProvider {...methods}>
      <div className="px-3 relative">
        <h1 className="text-4xl font-bold mb-2">Zacznijmy od cech</h1>
        <h3 className="text-3xl">
          Przyporządkuj cechom wartości klikając na cechę. Im wyższa wartość,
          tym lepiej
        </h3>
        <form>
          <div className="grid grid-cols-char-traits grid-rows-2 gap-3">
            <MainTraitsPanel
              traitPoints={traitPoints}
              selectTraitFn={selectTraitHandler}
              undoSelectionHandler={undoSelectionHandler}
            />
            <DerivedTraitsPanel />
            <TraitDesc />
            {(lastSelectedTraits.length === 8 && derivedTraits.luckPoints !== 0) && (
              <Button onClickHandler={handleSubmit(onSubmit)}>Dalej</Button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
export default FormTraits;
