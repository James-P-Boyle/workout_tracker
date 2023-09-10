import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

type GuestLayoutProps = {
  
}
 
export default function GuestLayout({  }: GuestLayoutProps) {

  return (

    <div className="flex flex-col h-screen gap-2">

      <NavBar />

      <section className="flex items-center flex-1">

        <Outlet context={{hello: "world"}}/>

      </section>

    </div>
  )
}