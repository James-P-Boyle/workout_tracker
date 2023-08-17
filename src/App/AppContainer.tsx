import DashboardLayout from "@/components/layouts/DashboardLayout"
import DashMenus from "./dashboard/DashMenus"
import HeroIcon from "@/components/ui/HeroIcon"

import Button from "@/components/ui/Button"
import NavItem from "@/components/ui/NavItem"
import { Outlet } from "react-router-dom"
import { WorkoutMainProvider } from "./workout/context/WorkoutMainContext"
import MainNavigation from "./dashboard/MainNavigation"

type AppContainerProps = {
    children?: React.ReactNode
}
 
export default function ({}: AppContainerProps) {

  return (
    <div className="grid lg:grid-cols-[25%_1fr] h-screen sm:h-auto">

      <section className="h-screen p-4 text-gray-900 bg-white sm:h-auto dark:bg-gray-900 dark:text-white">
        <MainNavigation />
      </section>
              
      <section className="flex items-center h-screen dark:bg-gray-800 dark:text-white">

        <WorkoutMainProvider>
          <Outlet />
        </WorkoutMainProvider>

      </section>
    </div>
  )
}