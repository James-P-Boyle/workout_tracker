import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function GuestLayout() {

  return (

    <div className="flex flex-col min-h-screen gap-2">

      <NavBar />

      <section className="flex items-center flex-1">

        <Outlet context={{hello: "world"}}/>

      </section>

    </div>
  )
}