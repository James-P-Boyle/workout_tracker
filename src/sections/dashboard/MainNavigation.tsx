import DashboardLayout from "@/components/layouts/DashboardLayout"
import DashMenus from "./DashMenus"
import HeroIcon from "@/components/ui/HeroIcon"
import NavItem from "@/components/ui/NavItem"
import Button from "@/components/ui/Button"

export default function MainNavigation() {

  return (
    <DashboardLayout>

      <DashMenus />   
      <HeroIcon/> 

      <div className="flex flex-col gap-4 sm:flex-row lg:flex-col justify-evenly">
    
        <NavItem
          to="admin"
        >
          Admin
        </NavItem>

        <NavItem
          to="workout"
        >
          Workouts
        </NavItem>
      
        <Button
          className="flex-1 bg-purple-200 border-0 dark:bg-purple-950"
        >
          Start
        </Button>

      </div>       
      
    </DashboardLayout>
  )
}