import { useState } from "react"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import { WorkoutService } from "@/services/workout.service"
import { useWorkoutMain } from "./context/WorkoutMainContext"

export default function Create() {

  const workout = new WorkoutService()
  const { dispatch } = useWorkoutMain()

  const [workoutData, setWorkoutData] = useState({
    workoutName: '',
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
      workout.createWorkout(workoutData)
      setWorkoutData({
        workoutName: '',
      })
      dispatch({ 
        type: "SET_ACTIVE_TAB", 
        payload: "myWorkouts" 
      })
    } catch (error) {
      console.log("error: ", error)
    }
  }
  
  return (

    <Container>

      <Form handleSubmit={handleSubmit}>

        <h1>Create your Workout</h1>

        <Input 
          name="workoutName"
          placeholder="Name your workout"
          value={workoutData.workoutName}
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

