import DashboardLayout from "@/components/layouts/DashboardLayout"
import DashMenus from "./DashMenus"
import HeroIcon from "@/components/ui/HeroIcon"
import NavItem from "@/components/ui/NavItem"
import Button from "@/components/ui/Button"
import useScroll from "@/hooks/useScroll"
import { useNavigate } from "react-router-dom"

interface MainNavigationProps {
  outletRef: React.RefObject<HTMLDivElement>
}

export default function MainNavigation({ 
  outletRef 
}: MainNavigationProps) {

  const { scrollToRef } = useScroll()
  const navigate = useNavigate()

  const handleLinkClick = (route: string) => {
    navigate(route)
    scrollToRef(outletRef)
  }

  
  return (
    <DashboardLayout>

      <DashMenus />   
      <HeroIcon/> 

      <div className="flex flex-col gap-4 sm:flex-row md:flex-col justify-evenly">
    
        <Button
          onClick={() => handleLinkClick('admin')}
        >
          Admin
        </Button>

        <Button
          onClick={() => handleLinkClick('progress')}
        >
          Progress
        </Button>

        <Button
           onClick={() => handleLinkClick('workout')}
        >
          Workouts
        </Button>
      
        <Button
          className="flex-1 bg-purple-200 border-0 dark:bg-purple-950"
          onClick={() => scrollToRef(outletRef)}
        >
          Start
        </Button>

      </div>       
      
    </DashboardLayout>
  )
}