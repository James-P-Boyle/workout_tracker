import HeroIcon from "../ui/HeroIcon"
import LineBreak from "../ui/LineBreak"
import NavigationMenus from "./NavigationMenus"
import DashNavigation from "./DashNavigation"

type DashboardProps = {
    
}

export default function Dashboard({ }: DashboardProps) {

    return (

        <div className="flex flex-col justify-between gap-4 h-full">
            <NavigationMenus />
            
            <div className="flex flex-col justify-center items-center">
                
                <HeroIcon />
                <LineBreak addClass="animate-scaleIn"/>

            </div>
   
            <DashNavigation />
        </div>
    )
}