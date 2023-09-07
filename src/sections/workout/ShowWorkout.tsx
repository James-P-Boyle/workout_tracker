import BackButton from "@/components/BackButton"
import Button from "@/components/ui/Button"
import { WorkoutService } from "@/services/workout.service"
import { FullWorkout } from "@/types"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ShowWorkout() {

  const workoutService = new WorkoutService()
  const navigate = useNavigate()
  const {id} = useParams()
  const [loading, setLoading] = useState(false)                    
  const [workout, setWorkout] = useState<FullWorkout | null>(null)

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        setLoading(true)
        const response = await workoutService.getWorkout(id!)
        setWorkout(response?.data[0])
        console.log(response?.data[0])
      } catch (error) {
        console.log("Error fetching workout:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkout()
  }, [])

  return (
    <div className="grid w-full gap-2">

      <BackButton />

      {workout ? (
        <div className="p-2">
          <h1 className="font-black">{workout.workoutName}</h1>

          <div className="flex flex-col">
            <h2 className="font-bold">Exercises</h2>

            {workout.workoutExercises.map((exercise) => (
              <div
                className="flex gap-2"
                key={exercise.id}
              >
                <span>{exercise.exerciseName}</span>
                <span>{exercise.action}</span>
              </div>
            ))}
            
          </div>
   
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}