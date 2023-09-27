import Button from "./ui/Button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

export default function LogoutButton() {

  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = async () => {

    try {
      logout()
      navigate('/')
    } catch (error) {
      console.log('Error on logout:', error)
    }
  }

  return (
    <Button 
      className="text-sm"
      onClick={handleLogout}
    >
      Logout
    </Button>
  )
}