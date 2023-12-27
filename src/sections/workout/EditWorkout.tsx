import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { WorkoutService } from "@/services/workout.service"
import { FullWorkout } from "@/types"
import Button from "@/components/ui/Button"
import ExerciseCard from "./ExerciseCard"
import RenameWorkout from "./RenameWorkout"

export default function Editorkout() {

  const workoutService = new WorkoutService()
  const navigate = useNavigate()
  const {id} = useParams()
  const [loading, setLoading] = useState(false)                    
  const [workout, setWorkout] = useState<FullWorkout | null>(null)

  const handleNameChange = async (newName: string) => {
    try {
      await workoutService.renameWorkout(id!, newName)
    } catch (error) {
      console.log('Error deleting workout', error)
    }
  }

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await workoutService.getWorkout(id!)
        setWorkout(response?.data[0])
      } catch (error) {
        console.log("Error fetching workout:", error)
      } 
    }

    fetchWorkout()
  }, [])

  return (
    <div className="w-full">
      <div className="flex justify-between gap-2"> 
        <Button
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
        <div className="flex gap-2"> 
          <Button
            onClick={() => navigate(-1)}
          >
            Add More Exercises
          </Button>
          <Button
            className="bg-red-500"
            onClick={() => alert('not coded yet')}
          >
            SAVE
          </Button>
        </div>
      </div> 
        
      {workout ? (
        <div className="grid gap-2 p-2">

          <RenameWorkout 
            workout={workout}
            handleRename={handleNameChange}
          />
      
          <h2 className="font-bold">Exercises</h2>

          <div className="grid gap-2">
            {workout.workoutExercises.map(({exercise}: any)=> (
              <ExerciseCard 
                key={exercise.id}
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