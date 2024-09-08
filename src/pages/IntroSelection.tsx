import IntroPanel from "@/components/Intro/IntroPanel"
import { useNavigate } from "react-router-dom"

function IntroSelection(){
    const navigate = useNavigate()
    return (
    <div className="flex">
        <IntroPanel title="Tryb interaktywny" subtitle="Stwórz swoją postać krok po kroku." secondSubtitle="Idealny wybór na pierwszą sesję" buttonFunction={() => { navigate('interactive') }} image="bg-house-bg"/>
        <IntroPanel title="Tryb swobodny" subtitle="Stwórz swoją postać samodzielnie" secondSubtitle="Zalecane tylko dla doświadczonych badaczy" buttonFunction={() => { navigate('custom') }} image="bg-free-bg"/>
    </div>
    )
}
export default IntroSelection