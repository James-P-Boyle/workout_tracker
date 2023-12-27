import { ReactNode, createContext, useContext, useState } from "react"
import { UserService } from "@/services/user.service"
import { useNavigate } from "react-router-dom"

interface AuthContextValue {
  isAuth: boolean // Use a boolean to represent authentication state, replace with user
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export default function AuthProvider ({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false)
  const userService = new UserService()
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    try {
      const response = await userService.login(email, password)
      // Should return user
      console.log('login auth context res', response)
      if(response?.status){
        setIsAuth(true) // Set isAuth to true upon successful login
        navigate('/dashboard')
      } else {
        throw Error('Not a 200 status on login, authcontext')
      }
    
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  const logout = async () => {
    try {
      await userService.logout()
      navigate('/')
      setIsAuth(false) // Set isAuth to false upon logout
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const authContextValue: AuthContextValue = {
    isAuth,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}