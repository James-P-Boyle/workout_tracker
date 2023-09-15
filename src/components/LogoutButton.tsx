import { UserService } from "@/services/user.service"
import Button from "./ui/Button"
import { useNavigate } from "react-router-dom"
import useAuth from "@/hooks/useAuth"

export default function LogoutButton() {

  const navigate = useNavigate()
  const { setIsAuth } = useAuth()

  const handleLogout = async () => {

    try {
      const user = new UserService()
      const response = await user.logout()
      console.log('Logout Response', response)
      setIsAuth(false)
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