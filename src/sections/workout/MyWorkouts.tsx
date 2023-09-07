import { useEffect, useState } from "react"
import { WorkoutService } from "@/services/workout.service"
import { Workout } from "@/types"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"

export default function MyWorkouts() {
  const workout = new WorkoutService()

  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)

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

  return (

    <div className="grid w-full grid-cols-2 gap-2">  
      <Button className="col-span-2 mb-4">
        <Link to="create">Create Workout</Link>
      </Button>
      {workouts && workouts.map((workout) => (
        <WorkoutCard 
          key={`${workout.id}`}
          workout={workout}
        />
      ))}
    </div>
  )
}

                   // will fix, 
function WorkoutCard({ workout }: any) {

  return (
    <div className="flex flex-col p-2 rounded-lg bg-gray-100/50 dark:bg-gray-700">
      <Link
        key={workout.id} 
        className="font-bold dark:text-purple-700 dark:hover:text-purple-800"
        to={`/dashboard/workout/${workout.id}`}
      >
        <span className="text-xl font-bold">
          {workout.workoutName}
        </span>
      </Link>

      <div className="flex gap-2 text-sm">
        <span>
          Delete
        </span>
        <span>
          Edit
        </span>
      </div>

    </div>
  )
  
}