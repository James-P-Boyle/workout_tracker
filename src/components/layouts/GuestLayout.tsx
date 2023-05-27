import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"

type GuestLayoutProps = {
  
}
 
export default function GuestLayout({  }: GuestLayoutProps) {

  return (

    <div className="flex flex-col h-screen gap-4 text-gray-800 bg-white dark:bg-gray-800 dark:text-white">

      <NavBar />

      <section className="flex items-center flex-1">

        <Outlet context={{hello: "world"}}/>

      </section>

    </div>
  )
}