import { useState } from "react"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import { useNavigate } from "react-router-dom"
import { WorkoutService } from "@/services/workout.service"

export default function Create() {

  let workout = new WorkoutService()
  const navigate = useNavigate()

  const [workoutData, setWorkoutData] = useState({
    workout_name: '',
    workout_type: '',
    workout_session_amount: '',
  })

  const getWorkouts = () => {
    workout.getWorkouts()
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

      navigate("excercises")
        
    } catch (error) {
      console.log("error: ", error)
    }

  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setWorkoutData((prevWorkoutData) => ({
      ...prevWorkoutData,
      [name]: value,
    }))
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
          className="px-4 py-2 text-2xl font-bold transition-colors border-2 border-gray-400 rounded-lg dark:border-purple-900 hover:border-black hover:dark:border-gray-900 hover:shadow-xl" 
          type="submit"
        >
          Create
        </Button>
          
      </Form>   

      <Button 
          className="px-4 py-2 text-2xl font-bold transition-colors border-2 border-gray-400 rounded-lg dark:border-purple-900 hover:border-black hover:dark:border-gray-900 hover:shadow-xl" 
          onClick={getWorkouts}
        >
          Get Workouts
        </Button>

    </Container>
  )
}