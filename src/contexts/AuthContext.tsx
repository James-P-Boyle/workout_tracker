import axios from "axios"
import { useState, useContext, createContext, useEffect } from "react"
import { useNavigate } from "react-router"

interface AuthProviderProps {
  children: React.ReactNode
}

interface User {
  userId: number
  name: string
}

export const AuthContext = createContext<any>(null)

export default function AuthContextProvider({children}: AuthProviderProps) {

  const navigate = useNavigate()

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
    // Extract user information from the token
    const decodedToken = decodeToken(token)
    if (decodedToken) {
      const { userId, name } = decodedToken
      setUser({ userId, name })
    }
    }
  }, [])
  
  const login = async (email: string, password: string) => {

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      )

      const { token } = response.data

      if (token) {
        localStorage.setItem("token", token)
        const decodedToken = decodeToken(token)
        if (decodedToken) {
          const { userId, name } = decodedToken
          setUser({ userId, name })
        }
        
        navigate("/dashboard")
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  const register = async (name: string, email: string, password: string) => {

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      })
      
      const { token } = response.data

      console.log(response)

      if (token) {
        localStorage.setItem("token", token)
        const decodedToken = decodeToken(token)
        if (decodedToken) {
          const { userId, name } = decodedToken
          setUser({ userId, name })
        }
        
        navigate("dashboard")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }

  const value = {
    user,
    setUser,
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

// Helper function to decode the token and extract user information
function decodeToken(token: string) {
  try {
    // Assuming the token is a JWT (JSON Web Token)
    const payloadBase64 = token.split(".")[1]
    const payloadJson = atob(payloadBase64)
    const payload = JSON.parse(payloadJson)
    return payload
  } catch (error) {
    console.error("Failed to decode token:", error)
    return null
  }
}

