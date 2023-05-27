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
            to={"workouts/create"}
        >
            Create
        </NavItem>
        
    </div>        
)
}