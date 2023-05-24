import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"

type GuestLayoutProps = {
  
}
 
export default function GuestLayout({  }: GuestLayoutProps) {

  return (

    <div className="flex flex-col h-screen gap-4">

      <NavBar />

      <section className="flex items-center flex-1 border">

        <Outlet context={{hello: "world"}}/>

      </section>

    </div>
  )
}