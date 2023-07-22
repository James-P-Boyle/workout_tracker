import axios from "axios"
import { useState, useContext, createContext } from "react"
import { useNavigate } from "react-router"

interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  error?: string
  isLoading?: boolean
  userId: string
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
  const [userId, setUserId] = useState<string>("")
  
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
        console.log('RESPONSE', response)
      if (response.data.id) {
        setIsAuthenticated(true)
        setUserId(response.data.id)
        setIsLoading(false)
        if (response.headers && response.headers["set-cookie"]) {
          document.cookie = response.headers["set-cookie"][0] // Set the session cookie in the browser
        }
        navigate("dashboard")
      } else {
        setError("Login failed. Invalid credentials.")
      }

    } catch (error) {
      setIsLoading(false)
      setError("An error occurred during login.")
    }
  }
  
  const register = async (email: string, password: string) => {

    try {
      setIsLoading(true)
      const response = await axios.post(
        "http://localhost:8000/users/register",
        {
          email,
          password,
        },
        {
          withCredentials: true, 
        }
      )
  
      if (response.data.id) {
        setIsAuthenticated(true)
        setUserId(response.data.id)
        setIsLoading(false)
        if (response.headers && response.headers["set-cookie"]) {
          document.cookie = response.headers["set-cookie"][0] // Set the session cookie in the browser
        }
        navigate("profile")
      } else {
        setError("Registration failed.")
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
      setError("An error occurred during registration.")
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
    userId,
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


