import Button from "../ui/Button";
import DropdownMenu from "../ui/DropdownMenu";
import { useStyles } from "@/contexts/StyleContext"

interface DashSettingsMenuProps {
  onClose: () => void;
  
}

export default function DashSettingsMenu({ onClose }: DashSettingsMenuProps) {

  const { mode, toggleMode } = useStyles();
  
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
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
      <Button>
        Layout
      </Button>
      
    </DropdownMenu>
  )
}