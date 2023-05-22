import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext"

export default function NavigationMenus() {

    const navigate  = useNavigate()
    const { logout } = useAuth()

    return (
        <div className="flex flex-row justify-between">
            <button className="border rounded-md p-4">Settings</button>
            <button className="border rounded-md p-4" onClick={() => logout(navigate)}>Logout</button>
        </div>
    )
}