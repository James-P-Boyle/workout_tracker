import DashboardLayout from "@/layouts/DashboardLayout"
import HeroIcon from "@/components/ui/HeroIcon"
import Button from "@/components/ui/Button"
import useScroll from "@/hooks/useScroll"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import LogoutButton from "@/components/LogoutButton"
import DashSettingsMenu from "./DashSettingsMenu"

interface MainNavigationProps {
  outletRef: React.RefObject<HTMLDivElement>
}

export default function MainNavigation({ 
  outletRef 
}: MainNavigationProps) {

  const { scrollToRef } = useScroll()
  const navigate = useNavigate()
  const [ showSettings, setShowSettings ] = useState(false)

  const handleLinkClick = (route: string) => {
    navigate(route)
    scrollToRef(outletRef)
  }

  return (
    <DashboardLayout

      links={
        <>
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
        
        </>
      }
    >

      <div className="flex flex-row flex-wrap justify-between">
            
        <Button
          className="text-sm"
          onClick={() => setShowSettings(!showSettings)}
        >
          Settings
        </Button>

        <LogoutButton />

        {showSettings && (
          <DashSettingsMenu
            onClose={() => setShowSettings(false)}
          />
        )}
            
      </div>  
      
      <HeroIcon/> 

    </DashboardLayout>
  )
}