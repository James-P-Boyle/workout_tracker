import { useState } from "react"
import Input from "@/components/ui/forms/Input"
import Form from "@/components/ui/forms/Form"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { UserService } from "@/services/user.service"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"


interface LoginFormData {
  email: string,
  password: string,
}

export default function Login() {

  const [ formData, setFormData ] = useState<LoginFormData>({ email: '', password: '' })

  const { login } = useAuth()
  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  
    try {
      await login(formData.email, formData?.password);
      console.log(formData?.email, formData?.password);
      setFormData({ email: '', password: '' })
    } catch (error) {
      console.log('Error on login:', error)
    }
  }


  return (
    <Container>

      <Form handleSubmit={handleSubmit}>
      
        <Input 
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email"
          onChange={onChange}
        />

        <Input 
          name="password"
          type="password"
          value={formData.password}
          placeholder="Password"
          onChange={onChange}
        />

        <Button 
          type="submit" 
          cta
        >
          Login
        </Button>   
      </Form>
    </Container>
  )
}



 