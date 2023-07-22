import { useState } from "react"
import { useAuth, AuthContextType } from "@/contexts/AuthContext"
import { Navigate } from "react-router-dom"
import Input from "@/components/ui/forms/Input"
import Form from "@/components/ui/forms/Form"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"

const defaultFormData = {
  email: "",
  password: "",
}

export default function Login() {

  const { login, isAuthenticated, isLoading } = useAuth() as AuthContextType
  const [ formData, setFormData ] = useState(defaultFormData)
  const { email, password } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const {email, password} = formData
    login(email, password)
    setFormData(defaultFormData)
  }

  return (
    <Container>

      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        isAuthenticated ? (
          <Navigate to="/dashboard"/>
        ) : (

          <>
          
            <Form handleSubmit={handleSubmit}>
              <>
                <Input 
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChange}
                />

                <Input 
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={onChange}
                />

                <Button type="submit" className="w-full">
                  Login
                </Button>   
              </>
            </Form>

          </>
        )
      )}

    </Container>
  )
}



 