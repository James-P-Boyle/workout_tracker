import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import Button from "../ui/Button"
import DashSettingsMenu from "./DashSettingsMenu"

export default function DashMenus() {

  const [ showSettings, setShowSettings ] = useState(false)
  const { logout } = useAuth()

  return (
    <div className="flex flex-row justify-between">
      
        <Button
          className="p-4 border rounded-md"
          onClick={() => setShowSettings(!showSettings)}
        >
          Settings
        </Button>
        <Button 
          className="p-4 border rounded-md" 
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