import { useAuth } from "@/contexts/AuthContext"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  element: React.ElementType
}

export default function ProtectedRoute({ 
  element: Component,
   ...rest 
}: ProtectedRouteProps) {

  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Component {...rest} />

}