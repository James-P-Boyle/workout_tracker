import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import Button from "../ui/Button"
import DashSettingsMenu from "./DashSettingsMenu"

export default function DashMenus() {

  const [ showSettings, setShowSettings ] = useState(false)

  return (
    <div className="flex flex-row flex-wrap justify-between">
      
        <Button
          className="text-sm"
          onClick={() => setShowSettings(!showSettings)}
        >
          Settings
        </Button>

        <Button 
          className="text-sm"
      
        >
          Logout('doesnt work')
        </Button>

        {showSettings && (
          <DashSettingsMenu
            onClose={() => setShowSettings(false)}
          />
        )}
        
    </div>
  )
}

