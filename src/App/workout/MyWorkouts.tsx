import { useEffect, useState } from "react"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { WorkoutService } from "@/services/workout.service"
import { useWorkoutMain } from "./context/WorkoutMainContext" 

type Workout = {
  id: string
  workoutName: string
}

export default function MyWorkouts() {
  const workout = new WorkoutService()
  const { dispatch } = useWorkoutMain()

  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)

  const handleCreateClick = () => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: "create" })
  }

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true)
        const response = await workout.getWorkouts()
        setWorkouts(response?.data)
      } catch (error) {
        console.log("Error fetching workouts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()
  }, [])
// I will make this code look prettier & more readable, but not now :)
  return (

    <Container>
      {loading ? ( "Loading...") : workouts?.length > 0 ? (

        workouts.map((workout) => (
          <div key={workout.id}>
            <span className="font-bold ">{workout.workoutName}</span>
          </div>
        ))
        
      ) : (

        <Button onClick={handleCreateClick}>Create Workout</Button>
        
      )}
    </Container>
  )
}