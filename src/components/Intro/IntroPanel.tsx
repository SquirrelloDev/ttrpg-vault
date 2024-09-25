import Button from "@/components/UI/Button";

interface IntroPanelProps {
  title: string;
  subtitle: string;
  secondSubtitle?: string;
  image: string
  buttonFunction: () => void;
}
function IntroPanel({
  title,
  subtitle,
  secondSubtitle,
  buttonFunction,
  image
}: IntroPanelProps) {
  return (
    <div className={`flex flex-col flex-1 min-h-screen items-center justify-center bg-cover bg-center ${image} relative z-0`}>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-zinc-900/50 -z-10"></div>
      <h2 className="dark:text-white font-bold text-5xl my-2 font-kalam">{title}</h2>
      <p className="dark:text-white text-lg font-kalam">{subtitle}</p>
      {secondSubtitle && (
        <p className="dark:text-white text-lg font-kalam">{secondSubtitle}</p>
      )}
      <Button onClickHandler={buttonFunction} >Rozpocznij</Button>
    </div>
  );
}
export default IntroPanel;
