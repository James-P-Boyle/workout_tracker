import HeroIcon from "@/components/ui/HeroIcon"
import DashMenus from "./DashMenus"
import DashNavigation from "./DashNavigation"
import DashboardLayout from "../layouts/DashboardLayout"

export default function DashboardContainer({ }) {

  return (

    <DashboardLayout>

      <DashMenus />
        
      <HeroIcon/>
        
      <DashNavigation />
        
    </DashboardLayout>
  )
}