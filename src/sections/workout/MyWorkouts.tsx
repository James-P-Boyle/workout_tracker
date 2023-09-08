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
    <div className="flex flex-col p-2 transition-all border border-transparent rounded-lg hover:border-black dark:hover:border-gray-800">
      <Link
        key={workout.id} 
        className="font-bold"
        to={`/dashboard/workout/${workout.id}`}
      >
        <span className="text-lg font-bold break-words md:text-xl">
          {workout.workoutName}
        </span>
      </Link>
    </div>
  )
  
}