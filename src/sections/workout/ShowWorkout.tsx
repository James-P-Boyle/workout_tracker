import BackButton from "@/components/BackButton"
import Button from "@/components/ui/Button"
import Dropdown from "@/components/ui/Dropdown"
import { WorkoutService } from "@/services/workout.service"
import { Exercise, FullWorkout } from "@/types"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

interface ExerciseCardProps {
  exercise: Exercise
}

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
      
      <div className="flex gap-2">
        <Button className="w-full">Edit</Button>
        <Button className="w-full">Delete</Button>
  
        <Button className="w-full">Progress</Button>
        {/* Will refactpr button */}
        <Button className="w-full dark:border-yellow-500 hover:dark:border-yellow-600 border-yellow-500 hover:border-yellow-600">Start</Button>
      </div>

      {workout ? (
        <div className="grid gap-2 p-2">
          <h1 className="font-black">{workout.workoutName}</h1>
          <h2 className="font-bold">Exercises</h2>

          <div className="grid gap-2">
            {/* Fix exercise data structure */}
            {workout.workoutExercises.map(({exercise}: any) => (
              <ExerciseCard 
                exercise={exercise}
              />
            ))}
          </div>
   
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}

function ExerciseCard({exercise}: ExerciseCardProps) {

  const [showDetails, setShowDetails] = useState(false)
  //Needs major refactoring
  return (
    <div
      className="relative flex flex-col p-2 border rounded-lg dark:border-gray-800"
      key={exercise.id}
    > 
      {showDetails ? (
        <div className="grid gap-2">

          <div className="flex items-center justify-between">
            <span className="font-bold">{exercise.exerciseName}</span>
            <span 
              onClick={() => setShowDetails(false)}
              className="px-3 py-1 font-black transition-transform border rounded-full dark:border-gray-800 hover:cursor-pointer"
            >
              x
            </span>
          </div>

          <p>{exercise.instruction}</p>
        {/* Make into component */}
          <div className="grid gap-2 md:grid-cols-3">
            <span className="p-1 border rounded-lg dark:border-gray-800">
              {exercise.action}
            </span>
            <span className="p-1 border rounded-lg dark:border-gray-800">
              {exercise.bodySplit}
            </span>
            <span className="p-1 border rounded-lg dark:border-gray-800">
              {exercise.equipment}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <span className="font-bold">{exercise.exerciseName}</span>
          <span 
            onClick={() => setShowDetails(true)}
            className="px-3 py-1 font-black transition-transform border rounded-full dark:border-gray-800 hover:cursor-pointer"
          >
            ?
          </span>
        </div>
      )}
  
    </div>
  )
}