import HeroIcon from "@/components/ui/HeroIcon"
import Button from "@/components/ui/Button"
import useScrollToRef from "@/hooks/useScrollToRef"
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

  const { scrollToRef } = useScrollToRef()
  const navigate = useNavigate()
  const [ showSettings, setShowSettings ] = useState(false)

  const handleLinkClick = (route: string) => {
    navigate(route)
    scrollToRef(outletRef)
  }

  return (

    <div className="relative flex flex-col gap-10">
    
      <div className="flex flex-row flex-wrap justify-between gap-2">
              
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

      <div className="flex flex-col gap-2 sm:flex-row md:flex-col justify-evenly">
      
        <Button
          className="w-full"
          onClick={() => handleLinkClick('progress')}
        >
          Progress
        </Button>

        <Button
          className="w-full"
          onClick={() => handleLinkClick('workout')}
        >
          Workouts
        </Button>

      </div>   

    </div>

  )
}