import Button from "@/components/ui/Button"
import DropdownMenu from "@/components/ui/DropdownMenu"
import { useStyles } from "@/contexts/StyleContext"
import { useNavigate } from "react-router-dom"

interface DashSettingsMenuProps {
  onClose: () => void 
}

export default function DashSettingsMenu({ onClose }: DashSettingsMenuProps) {

  const { mode, toggleMode } = useStyles()
  const navigate = useNavigate()
  
  return (
    <DropdownMenu
      className="absolute left-0 right-0 gap-2 p-4 border dark:border-gray-800"
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
        onClick={() => navigate('/profile')} 
      >
        Profile
      </Button>
          
        
    </DropdownMenu>
  )
}
