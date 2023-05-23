import { Outlet } from "react-router-dom"

import NavItem from "@/components/ui/NavItem"
import { useAuth } from "@/contexts/AuthContext"
import NavBar from "../NavBar"

type GuestLayoutProps = {
  
}
 
export default function GuestLayout({  }: GuestLayoutProps) {

  

  return (

    <div className="flex flex-col gap-4 h-screen">

      <NavBar />

      <section className="flex items-center border flex-1">

        <Outlet context={{hello: "world"}}/>

      </section>

    </div>
  )
}