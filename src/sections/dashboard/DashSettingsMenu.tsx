import { useState } from "react"
import Button from "@/components/ui/Button"
import DropdownMenu from "@/components/ui/DropdownMenu"
import { useStyles } from "@/contexts/StyleContext"
import { useNavigate } from "react-router-dom"

interface DashSettingsMenuProps {
  onClose: () => void 
}

export default function DashSettingsMenu({ onClose }: DashSettingsMenuProps) {

  const { mode, toggleMode } = useStyles()
  const [ showLayoutOptions, setShowLayoutOptions ] = useState(false)
  const navigate = useNavigate()
  
  return (
    <DropdownMenu
      className="absolute gap-4 p-4 -inset-4"
      isOpen={true}
    > 
          
      <div className="flex">

        <Button 
          className="flex-1"
          onClick={onClose}
        >
          X
        </Button>
        
      </div>
            
      <Button
        onClick={() => {
          onClose()
          toggleMode()
        }}
      >
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>

      <Button
        className="" 
        onClick={() => setShowLayoutOptions(!showLayoutOptions)} 
      >
        {showLayoutOptions ? "X" : "Layout Options"}
      </Button>

      <Button
        className="" 
        onClick={() => navigate('/profile')} 
      >
        Profile
      </Button>
          
        
    </DropdownMenu>
  )
}
