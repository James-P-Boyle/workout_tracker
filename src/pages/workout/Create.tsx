import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"


export default function Create() {

  const navigate = useNavigate()

  const [workoutData, setWorkoutData] = useState({
    workout_name: '',
    workout_type: '',
    workout_session_amount: '',
  })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setWorkoutData((prevWorkoutData) => ({
      ...prevWorkoutData,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setWorkoutData({
        workout_name: '',
        workout_type: '',
        workout_session_amount: '',
      })

      localStorage.setItem('workoutData', JSON.stringify(workoutData))

      navigate('dashboard/excercises/add')
        
    } catch (error) {
      console.log("error: ", error)
    }

  }
  
  return (

    <Container>

      <Form handleSubmit={handleSubmit}>

        <h1>Create your Workout</h1>

        <Input 
          name="workout_name"
          placeholder="Name your workout"
          value={workoutData.workout_name}
          onChange={handleChange}
        />  

        <Input 
          name="workout_type"
          placeholder="What type of workout? Strenght, cardio etc."
          value={workoutData.workout_type}
          onChange={handleChange}
        />  

        <Input 
          name="workout_session_amount"
          placeholder="How many sessions per week?"
          value={workoutData.workout_session_amount}
          onChange={handleChange}
        />  
        
        <Button
          type="submit"
        >
          Create
        </Button>
          
      </Form>   

    </Container>
  )
}