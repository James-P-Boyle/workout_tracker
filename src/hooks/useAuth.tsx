import { UserService } from "@/services/user.service"
import { useEffect, useState } from "react"

export default function useAuth() {

  const [isAuth, setIsAuth] = useState(false)
  const user = new UserService()

  const checkAuth = async () => {
    try {
      const response = await user.auth()
      setIsAuth(response?.data)
    } catch (error) {
      console.log("useAuth error:", error)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return { 
    isAuth, 
    checkAuth,
    setIsAuth
  }
}