import MainNavigation from "@/sections/dashboard/MainNavigation"
import { RefObject, useRef } from "react"
import { Outlet } from "react-router-dom"

export default function MainLayout() {

  const outletRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <div className="grid md:grid-cols-[25%_1fr] gap-2">
      
      <section 
        className="p-4 text-gray-900 bg-white md:h-auto dark:bg-gray-900 dark:text-white"
      >
        <MainNavigation 
          outletRef={outletRef}
        />
      </section>
              
      <section 
        id="mainOutlet"
        className="flex flex-col items-center min-h-screen dark:bg-gray-800 dark:text-white"
      >

        <div
          ref={outletRef}
          className="w-full p-4 overflow-scroll"
        >
          <Outlet />
        </div>
 
      </section>
  </div>
  )
}