import { useAuth } from "@/contexts/AuthContext"

export default function NavigationMenus() {

  const { logout } = useAuth()

  return (
    <div className="flex flex-row justify-between">
        <button className="border rounded-md p-4">Settings</button>
        <button className="border rounded-md p-4" onClick={logout}>Logout</button>
    </div>
  )
}