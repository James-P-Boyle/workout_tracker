import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { UserService } from "@/services/user.service"

interface RegisterProps {
  onClose?: () => void 
}

const defaultFormData = {
  username: "",
  firstName: "",
  lastName: "",
  age: "",
  weight: "",
  height: "", 
  avatar: "https://cdn.muscleandstrength.com/sites/default/files/field/image/author/john-meadows.jpg"
}

export default function Register({onClose}: RegisterProps) {

  const [ formData, setFormData ] = useState(defaultFormData)
  const { username, firstName, lastName, age, weight, height, avatar } = formData

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

      const ageAsNumber = parseFloat(defaultFormData.age)
      const weightAsNumber = parseFloat(weight)
      const heightAsNumber = parseFloat(height)

      const response = await user.updateProfile({
        username,
        firstName,
        lastName,
        age: ageAsNumber,
        weight: weightAsNumber,
        height: heightAsNumber,
        avatar,
      })
      
      console.log('Profile Register Response', response)
      onClose && onClose()
      navigate('/dashboard')
      setFormData(defaultFormData)
    } catch(error) {
      console.log('Error on register,', error)
    }
  }

  return (
    <Container>

      <Form handleSubmit={handleSubmit}>
        <>       

          <Input 
            name="username"
            value={username}
            placeholder="UserName ?"
            onChange={onChange}
          />

          <Input 
            name="firstName"
            value={firstName}
            placeholder="First Name ?"
            onChange={onChange}
          />

          <Input 
            name="lastName"
            value={lastName}
            placeholder="Last Name ?"
            onChange={onChange}
          />
        
          <Input 
            name="age"
        
            placeholder="Age ?"
            onChange={onChange}
          />

          <Input 
            name="weight"
         
            placeholder="Weight in pounds ?"
            onChange={onChange}
          />
        
          <Input 
            name="height"
     
            placeholder="Height in cm ?"
            onChange={onChange}
          />

          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </>
      </Form>
   
    </Container>
  )
}
