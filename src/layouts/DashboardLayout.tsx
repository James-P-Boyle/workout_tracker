import Dashboard from "@/sections/dashboard/Dashboard"
import { RefObject, useRef } from "react"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {

  const outletRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <div className="grid md:grid-cols-[25%_1fr] gap-2">
      
      <section 
        className="min-h-screen p-4"
      >
        <Dashboard outletRef={outletRef} />
      </section>
              
      <section 
        ref={outletRef}
        className="flex flex-col items-center min-h-screen p-4"
      >
        <Outlet />
      </section>
  </div>
  )  
}