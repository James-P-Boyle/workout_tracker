import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { useAuth, AuthContextType } from "@/contexts/AuthContext"

const defaultFormData = {
  userName: "",
  firstName: "",
  lastName: "",
  age: "",
  weight: "",
  height: "",
  avatar: "https://cdn.muscleandstrength.com/sites/default/files/field/image/author/john-meadows.jpg"
}

export default function Register() {

  const [ formData, setFormData ] = useState(defaultFormData)
  const { userName, firstName, lastName, age, weight, height, avatar } = formData

  const navigate = useNavigate()
  const { setUserName, userId } = useAuth() as AuthContextType

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const updateProfile = async () => {
    try {
      console.log(userId)


      const updatedFormData = { ...formData, userId };
      const response = await axios.patch(
        `http://localhost:8000/users/profile`, 
        updatedFormData,  {
          withCredentials: true, // Pass the session cookie with the request
        } 
      )
  
      console.log(response.data)
  
      if (response.data.id) {
        setUserName && setUserName(userName)
        navigate("dashboard")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateProfile()
    setFormData(defaultFormData)
  }

  return (
    <Container>

      <Form handleSubmit={handleSubmit}>
        <>       

          <Input 
            name="userName"
            value={userName}
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
            value={age}
            placeholder="Age ?"
            onChange={onChange}
          />

          <Input 
            name="weight"
            value={weight}
            placeholder="Weight in pounds ?"
            onChange={onChange}
          />
        
          <Input 
            name="height"
            value={height}
            placeholder="Height in cm ?"
            onChange={onChange}
          />

          <Button type="submit" className="w-full">
            Create Profile
          </Button>
        </>
      </Form>
   
    </Container>
  )
}
