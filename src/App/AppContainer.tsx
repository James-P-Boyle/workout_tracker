import { Outlet } from "react-router-dom"
import { WorkoutMainProvider } from "./workout/context/WorkoutMainContext"
import MainNavigation from "./dashboard/MainNavigation"
import { UserService } from "@/services/user.service"

type AppContainerProps = {
  children?: React.ReactNode
}

export default function ({}: AppContainerProps) {

  return (
    <div className="grid lg:grid-cols-[25%_1fr] h-screen sm:h-auto">

      <section id="dashboardContainer" className="h-screen p-4 text-gray-900 bg-white border sm:h-auto dark:bg-gray-900 dark:text-white">
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