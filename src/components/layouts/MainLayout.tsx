import { Outlet } from "react-router-dom"
import DashboardContainer from "../dashboard/DashboardContainer"

type MainLayoutProps = {
    children?: React.ReactNode
}
 
export default function MainLayout({}: MainLayoutProps) {

    return (
      <div className="grid lg:grid-cols-[25%_1fr] h-screen sm:h-auto">

        <section className="h-screen p-4 text-gray-900 bg-white sm:h-auto dark:bg-gray-900 dark:text-white">
        
          <DashboardContainer />

        </section>
                
        <section className="flex items-center h-screen dark:bg-gray-800 dark:text-white">

          <Outlet context={{hello: "world"}}/>

        </section>
      </div>
    )
}