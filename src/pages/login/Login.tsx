import { useState } from "react"
import Input from "@/components/ui/forms/Input"
import Form from "@/components/ui/forms/Form"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { UserService } from "@/services/user.service"
import { useNavigate } from "react-router-dom"


const defaultFormData = {
  email: "",
  password: "",
}

export default function Login() {

  const [ formData, setFormData ] = useState(defaultFormData)
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const user = new UserService()

      const response = await user.login(email, password)
      console.log('Login Response', response)
      navigate('/dashboard')
      setFormData(defaultFormData)
    } catch(error) {
      console.log('Error on login,', error)
    }

  }


  return (
    <Container>

      <Form handleSubmit={handleSubmit}>
      
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
      </Form>
    </Container>
  )
}



 