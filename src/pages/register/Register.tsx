import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@/components/ui/Container'
import Form from '@/components/ui/forms/Form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/forms/Input'
import { UserService } from '@/services/user.service'

const defaultFormData = {
  email: '',
  password: '',
}

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(defaultFormData)
  const { email, password } = formData

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

      const response = await user.register(email, password)

      if (response.status === 201) {
        navigate('/dashboard')
      }
      console.log('Register Response', response)

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