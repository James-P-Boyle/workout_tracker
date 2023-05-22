import { NavLink } from "react-router-dom";

export default function DashNavigation() {

    const activeClassName = "underline"

    return (
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col justify-evenly">
            <NavLink 
                to={"workouts"}
                end
                className={
                    ({ isActive }) => 
                    `flex justify-center py-2 border flex-1 w-full text-2xl 
                    ${isActive ? activeClassName : ""}`
                }
            >
                Workouts
            </NavLink>

            <NavLink 
                to={"workouts/create"}
                end
                className={
                    ({ isActive }) => 
                    `flex justify-center py-2 border flex-1 w-full text-2xl 
                    ${isActive ? activeClassName : ""}`
                }
            >
                Create
            </NavLink>
            <button className="flex justify-center py-2 border flex-1 text-2xl">Progress</button>
            <button className="flex justify-center py-2 border flex-1 text-2xl bg-pink-200">Start</button>
         
        </div>        
    )
}