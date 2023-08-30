import { useEffect, useState } from "react"
import Button from "@/components/ui/Button"
import { WorkoutService } from "@/services/workout.service"
import { useWorkoutMain } from "./context/WorkoutMainContext" 
import { Workout } from "@/types"
import { Link } from "react-router-dom"

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
        console.log(response?.data)
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

    <div className="grid w-full grid-cols-2 gap-2 py-4">
      {workouts ? (
        workouts.map((workout) => (
          <WorkoutCard 
            key={`${workout.id}`}
            workout={workout}
          />
         
        ))
      ) : (
        <Button onClick={handleCreateClick}>Create Workout</Button>
      )}
    </div>
  )
}

                    // will fix, 
function WorkoutCard({ workout }: any) {

  return (
    <div className="flex flex-col p-1 transition-transform rounded-lg bg-gray-100/70 hover:scale-105">
      <Link
        key={workout.id} 
        className="font-bold text-green-700 hover:text-green-800"
        to={`/dashboard/workout/${workout.id}`}
      >
        <span className="text-xl font-bold">
          {workout.workoutName}
        </span>
      </Link>

      <div className="flex gap-2">
        <span className="text-red-500">
          Delete
        </span>
        <span className="text-green-700">
          Edit
        </span>
      </div>

    </div>
  )
  
}