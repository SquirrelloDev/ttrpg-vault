import { useState } from "react";
import Button from "../UI/Button";
import { luckRoll } from "@/utils/diceRolls";
import useHoverTraitStore from "@/stores/hoverStateStore";
import useMainTraitStore from "@/stores/mainTraitStore";

function LuckRandomizer() {
  const [luckValue, setLuckValue] = useState<number>(0);
  const [remainingAttemps, setRemainingAttemps] = useState<number>(3);
  const setHoveredTrait = useHoverTraitStore(
    (state) => state.setTraitsHoverKey
  );
  const setLuck = useMainTraitStore(state => state.setLuck)
  const rollForLuck = () => {
    const luckRollResult = luckRoll()
    setLuckValue(luckRollResult);
    setLuck(luckRollResult)
    setRemainingAttemps((prevState) => prevState - 1);
  };
  return (
    <div
      className="text-2xl p-3 hover:bg-lime-700 transition-colors"
      onMouseOver={() => setHoveredTrait("luckPoints")}
    >
      <div className="flex justify-between">
        <p>Szczęście</p>
        <p>{luckValue}</p>
      </div>
      <div>
        <p className="text-sm my-1 text-center">
          Pozostałe losy: {remainingAttemps}
        </p>
        {remainingAttemps > 0 && (
          <Button
            classNames="w-full"
            type="button"
            onClickHandler={rollForLuck}
          >
            Losuj
          </Button>
        )}
      </div>
    </div>
  );
}
export default LuckRandomizer;
