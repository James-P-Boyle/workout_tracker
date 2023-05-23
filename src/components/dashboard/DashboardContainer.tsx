import HeroIcon from "@/components/ui/HeroIcon"
import NavigationMenus from "./NavigationMenus"
import DashNavigation from "./DashNavigation"
import DashboardLayout from "../layouts/DashboardLayout"

export default function DashboardContainer({ }) {

  return (

    <DashboardLayout>

      <NavigationMenus />
        
      <HeroIcon />
        
      <DashNavigation />
        
    </DashboardLayout>
  )
}