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
        setLoading(false)
      } catch (error) {
        console.log("Error fetching workouts:", error)
      } 
    }

    fetchWorkouts()
  }, [])

  return (

    <div className="grid w-full grid-cols-2 gap-2">  
      <Button className="col-span-2 mb-4">
        <Link to="create">Create Workout</Link>
      </Button>

      {loading ? (
        <h1>loading icon</h1>
      ) : (
        workouts.map((workout) => (
          <WorkoutCard 
            key={`${workout.id}`}
            workout={workout}
          />
        ))
      )}

    </div>
  )
}

function WorkoutCard({workout} : {workout: Workout}) {

  return (
    <div className="flex flex-col p-2 transition-all border border-gray-200 rounded-lg dark:hover:border-yellow-500 hover:border-yellow-500 dark:border-gray-800">
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