import DashboardLayout from "@/components/layouts/DashboardLayout"
import DashMenus from "./dashboard/DashMenus"
import HeroIcon from "@/components/ui/HeroIcon"

import Button from "@/components/ui/Button"
import NavItem from "@/components/ui/NavItem"
import { Outlet } from "react-router-dom"

type AppContainerProps = {
    children?: React.ReactNode
}
 
export default function ({}: AppContainerProps) {

  return (
    <div className="grid lg:grid-cols-[25%_1fr] h-screen sm:h-auto">

      <section className="h-screen p-4 text-gray-900 bg-white sm:h-auto dark:bg-gray-900 dark:text-white">
        <DashboardLayout>
          <DashMenus />   
          <HeroIcon/> 
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col justify-evenly">
        
            <NavItem
                to="workout"
            >
                Workouts
            </NavItem>

            <NavItem
                to="progress"
            >
                Progress
            </NavItem>
          
            <Button
                className="flex-1 bg-purple-200 border-0 dark:bg-purple-950"
            >
                Start
            </Button>
          </div>       
        </DashboardLayout>
      </section>
              
      <section className="flex items-center h-screen dark:bg-gray-800 dark:text-white">
        {/* Pass context to all subroutes */}
        <Outlet />

      </section>
    </div>
  )
}