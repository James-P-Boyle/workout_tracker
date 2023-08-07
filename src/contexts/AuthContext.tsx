import axios from "axios"
import { useState, useContext, createContext } from "react"
import { useNavigate } from "react-router"

axios.defaults.withCredentials = true;

interface AuthProviderProps {
  children: React.ReactNode
}

export interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  error?: string
  isLoading?: boolean
  userId: string
  userName?: string
  setUserName?: React.Dispatch<React.SetStateAction<string>>
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({children}: AuthProviderProps) {

  // A use effect that makes a request to sessions
  // to the check if the user is already authenticated
  
  const navigate = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [userName, setUserName] = useState<string>("")
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
        }
      )
        // console.log('login response ==>', response)
        // console.log(`Check Cookie Is Present In Repsonse`, response.headers["set-cookie"])
      if (response.data.id) {
        console.log(response.data.id)
        setIsAuthenticated(true)
        setUserId(response.data.id)
        setIsLoading(false)

/* --------------                         ---------------- */
/* --------------THIS WHOLE PART IS A MESS---------------- */
/* --------------                         ---------------- */

        if (response.headers && response.headers["set-cookie"]) {
          document.cookie = response.headers["set-cookie"][0]
        }

        navigate("dashboard")
      } else {
        setError("Login failed. Invalid credentials.")
      }

    } catch (error) {
      console.error('login error', error)
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
        }
      )
  
      if (response.data.id) {
        setIsAuthenticated(true)
        setUserId(response.data.id)
        setIsLoading(false)

/* --------------                         ---------------- */
/* --------------THIS WHOLE PART IS A MESS---------------- */
/* --------------                         ---------------- */

        if (response.headers && response.headers["set-cookie"]) {
          document.cookie = response.headers["set-cookie"][0]
        }

        navigate("profile")
      } else {
        setError("Registration failed.")
      }

    } catch (error) {
      console.error('Register error', error)
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
    userName,
    setUserName,
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


