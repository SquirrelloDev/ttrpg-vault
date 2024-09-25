import Panel from "@/components/UI/Panel";
import CharacterTrait from "./CharacterTrait";
import Button from "@/components/UI/Button";
interface MainTraitsPanelProps {
  traitPoints: number[];
  selectTraitFn: () => void;
  undoSelectionHandler: () => void;
}
function MainTraitsPanel({
  traitPoints,
  selectTraitFn,
  undoSelectionHandler,
}: MainTraitsPanelProps) {
  return (
    <Panel defaultPadding={false} classNames="row-span-2">
      <div className="p-3 text-2xl grid grid-cols-2 grid-rows-1">
        <h2>Pozostałe punkty cech</h2>
        <div className={`${traitPoints .length === 8 && 'hidden'} w-full flex justify-end row-span-2`}>
          <Button type="button" onClickHandler={undoSelectionHandler}>
            Cofnij
          </Button>
        </div>
        <p>{traitPoints.join(", ")}</p>
      </div>
      <div className="">
        <CharacterTrait
          traitName="Siła"
          traitKey="strength"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Kondycja"
          traitKey="constitution"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Zręczność"
          traitKey="dexterity"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Moc"
          traitKey="power"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Wygląd"
          traitKey="apperance"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Budowa Ciała"
          traitKey="size"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Inteligencja"
          traitKey="intelligence"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
        <CharacterTrait
          traitName="Wykształcenie"
          traitKey="education"
          currentValueToAssign={traitPoints[0]}
          selectTraitFn={selectTraitFn}
        />
      </div>
    </Panel>
  );
}
export default MainTraitsPanel;
