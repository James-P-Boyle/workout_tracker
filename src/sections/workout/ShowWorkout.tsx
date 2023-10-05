import BackButton from "@/components/BackButton"
import Button from "@/components/ui/Button"
import { useNotification } from "@/contexts/NotificationContext"
import { WorkoutService } from "@/services/workout.service"
import { FullWorkout } from "@/types"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import RenameWorkout from "./RenameWorkout"
import ExerciseCard from "./ExerciseCard"

export default function ShowWorkout() {

  const workoutService = new WorkoutService()
  const navigate = useNavigate()
  const { id } = useParams()   
  const { showNotification } = useNotification()               
  const [ workout, setWorkout ] = useState<FullWorkout | null>(null)

  const handleDelete = async () => {
    try {
      await workoutService.deleteWorkout(id!)
      showNotification('Deleted', 'success')
      navigate('/dashboard/workout')
    } catch (error) {
      console.log('Error deleting workout', error)
    }
  }

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
  }, [handleNameChange])

  return (
    <div className="grid w-full gap-2">

      <BackButton />
      
      <div className="flex gap-2">
        <Button className="w-full">Edit</Button>
        <Button 
          className="w-full"
          onClick={handleDelete}
        >
          Delete
        </Button>
  
        <Button className="w-full">Progress</Button>
        {/* Will refactpr button */}
        <Button  
          cta
          className="w-full"
          onClick={() => navigate(`/dashboard/workout/start/${workout?.id}`)}
        >
          Start
        </Button>
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
