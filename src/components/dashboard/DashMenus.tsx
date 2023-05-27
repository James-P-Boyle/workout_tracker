import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import Button from "../ui/Button"
import DashSettingsMenu from "./DashSettingsMenu"

export default function DashMenus() {

  const [ showSettings, setShowSettings ] = useState(false)
  const { logout } = useAuth()

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
          onClick={logout}
        >
          Logout
        </Button>

        {showSettings && (
          <DashSettingsMenu
            onClose={() => setShowSettings(false)}
          />
        )}
        
    </div>
  )
}

