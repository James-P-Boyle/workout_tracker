import Button from "../ui/Button"
import NavItem from "../ui/NavItem"

export default function DashNavigation() {

return (
    <div className="flex flex-col gap-4 sm:flex-row lg:flex-col justify-evenly">
        
        <NavItem
            to={"workouts"}
        >
            Workouts
        </NavItem>

        <NavItem
            to={"/"}
        >
            Progress
        </NavItem>
      
        <Button
            className="flex-1 bg-purple-200 border-0 dark:bg-purple-950"
        >
            Start
        </Button>
      
    </div>        
)
}