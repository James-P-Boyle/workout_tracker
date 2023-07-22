import { useAuth, AuthContextType } from "@/contexts/AuthContext"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  element: React.ElementType
}

export default function ProtectedRoute({ 
  element: Component,
   ...rest 
}: ProtectedRouteProps) {

  const { isAuthenticated } = useAuth() as AuthContextType

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Component {...rest} />

}