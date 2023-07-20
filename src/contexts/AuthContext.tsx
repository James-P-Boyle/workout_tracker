import axios from "axios"
import { useState, useContext, createContext, useEffect } from "react"
import { useNavigate } from "react-router"

interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthContextType {
  isAuthenticated: boolean
  error?: string
  isLoading?: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({children}: AuthProviderProps) {

  const navigate = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const login = async (email: string, password: string) => {

    try {

      setIsLoading(true)
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email,
          password,
        }
      )

      if (response.data.id !== null) {
        setIsAuthenticated(true)
        setIsLoading(false)
        navigate("dashboard")
      } else {
        setError("Login failed. Invalid credentials.")
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setError("An error occurred during login.")
    }
  }
  
  const register = async (email: string, password: string) => {

    try {
      setIsLoading(true)
      const response = await axios.post("http://localhost:8000/users/register", {
        email,
        password,
      })
      
      if (response.data.id !== null) {
        setIsAuthenticated(true)
        setIsLoading(false)
        navigate("dashboard")
      } else {
        setError("Login failed. Invalid credentials.")
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setError("An error occurred during register.")
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    navigate("/login")
  }

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    error,
    isLoading,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)


