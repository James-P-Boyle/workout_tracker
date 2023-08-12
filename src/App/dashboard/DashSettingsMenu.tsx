import { useState } from "react"
import Button from "@/components/ui/Button"
import DropdownMenu from "@/components/ui/DropdownMenu"
import { useStyles } from "@/contexts/StyleContext"
import ProfileOptions from "./ProfileOptions"

interface DashSettingsMenuProps {
  onClose: () => void 
}

export default function DashSettingsMenu({ onClose }: DashSettingsMenuProps) {

  const { mode, toggleMode } = useStyles()
  const [ showLayoutOptions, setShowLayoutOptions ] = useState(false)
  const [ showProfileOptions, setShowProfileOptions ] = useState(false)
  
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
        {mode === "dark" 
          ? "Light Mode" 
          : "Dark Mode"
        }
      </Button>

      <Button
        className="" 
        onClick={() => setShowLayoutOptions(!showLayoutOptions)} 
      >
        {showLayoutOptions ? "X" : "Layout Options"}
      </Button>

      <Button
        className="" 
        onClick={() => setShowProfileOptions(!showProfileOptions)} 
      >
        {showProfileOptions ? "X" : "Profile" }
      </Button>
      
      {showProfileOptions &&  <ProfileOptions onClose={onClose}/>}

      {showLayoutOptions && <LayoutOptions />}
    
        
    </DropdownMenu>
  )
}

function LayoutOptions() {

  return (
    <DropdownMenu 
      className="px-4 py-2 my-2 space-y-2"
    >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </DropdownMenu>
  )
}