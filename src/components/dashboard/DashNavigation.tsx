import NavItem from "../ui/NavItem"

export default function DashNavigation() {

const activeClassName = "underline"

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
        
        <button className="flex justify-center py-2 border flex-1 text-2xl">Progress</button>
        <button className="flex justify-center py-2 border flex-1 text-2xl bg-pink-200">Start</button>
        
    </div>        
)
}