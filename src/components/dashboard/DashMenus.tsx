import { useState } from "react"
import Button from "../ui/Button"
import DashSettingsMenu from "./DashSettingsMenu"
import LogoutButton from "../LogoutButton"

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

        <LogoutButton />

        {showSettings && (
          <DashSettingsMenu
            onClose={() => setShowSettings(false)}
          />
        )}
        
    </div>
  )
}

