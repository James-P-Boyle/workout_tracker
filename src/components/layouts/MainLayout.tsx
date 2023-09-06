import MainNavigation from "@/sections/dashboard/MainNavigation"
import { Link, Outlet } from "react-router-dom"
import Button from "../ui/Button"

export default function MainLayout() {

  return (
    <div className="grid lg:grid-cols-[25%_1fr] h-screen sm:h-auto">
      
      <section id="dashboardContainer" className="h-screen p-4 text-gray-900 bg-white border sm:h-auto dark:bg-gray-900 dark:text-white">
        <MainNavigation />
      </section>
              
      <section className="flex flex-col items-center min-h-screen dark:bg-gray-800 dark:text-white">
        <div className="">
          <Button>
            <Link to="workout/create">Create Workout</Link>
          </Button>
      
        </div>
        <div>
          <Outlet />
        </div>
 
      </section>
  </div>
  )
}