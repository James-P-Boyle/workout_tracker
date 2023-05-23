import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"

const defaultFormData = {
  name: "",
  email: "",
  password: "",
}

export default function Register() {
  const { register } = useAuth()
  const [ formData, setFormData ] = useState(defaultFormData)
  const { name, email, password } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  
    const { name, email, password } = formData
    register(name, email, password)
    setFormData(defaultFormData)
  }

  return (
    <Container>

      <Form handleSubmit={handleSubmit}>
        <>   
          <Input 
            name="name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={onChange}
          />
    
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
            Register
          </Button>
        </>
      </Form>
      
    </Container>
  )
}
