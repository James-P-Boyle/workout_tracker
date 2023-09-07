import Dashboard from "@/sections/dashboard/Dashboard"
import { RefObject, useRef } from "react"
import { Outlet } from "react-router-dom"

export default function MainLayout() {

  const outletRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <div className="grid md:grid-cols-[25%_1fr] gap-2">
      
      <section 
        className="p-4 text-gray-900 bg-white md:h-auto dark:bg-gray-900 dark:text-white"
      >
        <Dashboard 
          outletRef={outletRef}
        />
      </section>
              
      <section 
        ref={outletRef}
        className="flex flex-col items-center min-h-screen p-4 dark:bg-gray-800 dark:text-white"
      >

        <Outlet />
  
 
      </section>
  </div>
  )
}