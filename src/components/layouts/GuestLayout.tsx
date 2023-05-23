import { Outlet } from "react-router-dom"
import HeroIcon from "../ui/HeroIcon"
import LineBreak from "../ui/LineBreak"

type GuestLayoutProps = {
  
}
 
export default function GuestLayout({  }: GuestLayoutProps) {

  return (
    <div className="flex flex-col justify-center gap-4 h-screen">
    
      <HeroIcon />
            
      <section className="flex items-center">

        <Outlet context={{hello: "world"}}/>
        
      </section>
    
    </div>
  )
}