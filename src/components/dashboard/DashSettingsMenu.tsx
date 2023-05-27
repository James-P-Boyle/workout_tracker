import { useState } from "react";
import Button from "../ui/Button";
import DropdownMenu from "../ui/DropdownMenu";
import { useStyles } from "@/contexts/StyleContext"

interface DashSettingsMenuProps {
  onClose: () => void;
  
}
interface LayoutOptionsProps {
  isOpen: boolean
  
}

export default function DashSettingsMenu({ onClose }: DashSettingsMenuProps) {

  const { mode, toggleMode } = useStyles();
  const [ showLayoutOptions, setShowLayoutOptions ] = useState(false)
  
  return (
    <DropdownMenu
      className="absolute gap-4 p-4 -inset-4"
      isOpen={true}
    > 
          
      <div className="flex items-center justify-between">

        <span className="text-xl font-bold">Settings</span>
        
        <Button 
          className="px-4 py-2 border rounded-md"
          onClick={onClose}
        >
          X
        </Button>
      </div>
            
      <Button
        onClick={() => toggleMode()}
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
        {showLayoutOptions
          ? "X" 
          : "Layout Options"
        }
      </Button>
      
      <LayoutOptions isOpen={showLayoutOptions}/>
        
    </DropdownMenu>
  )
}

function LayoutOptions({isOpen}: LayoutOptionsProps ) {

  return (
    <DropdownMenu 
      className="px-4 py-2 my-2 space-y-2"
      isOpen={isOpen}
    >
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </DropdownMenu>
  )
}