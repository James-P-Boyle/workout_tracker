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
        
        <button className="flex justify-center flex-1 py-2 text-2xl border">Progress</button>
        <button className="flex justify-center flex-1 py-2 text-2xl bg-pink-200 border">Start</button>
        
    </div>        
)
}