import { useState } from "react"
import Button from "../ui/Button"
import DashSettingsMenu from "./DashSettingsMenu"
import { UserService } from "@/services/user.service"
import { useNavigate } from "react-router-dom"

export default function DashMenus() {

  const [ showSettings, setShowSettings ] = useState(false)

  const navigate = useNavigate()

  const handleLogout = async () => {

    try {
      const user = new UserService()
      const response = await user.logout()
      console.log('Logout Response', response)
      navigate('/')
    
    } catch (error) {
      console.log('Error on logout:', error)
    }
  }
 

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
          onClick={handleLogout}
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

