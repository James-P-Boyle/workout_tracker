import BackButton from "@/components/BackButton"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { useNotification } from "@/contexts/NotificationContext"
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
  const { id } = useParams()   
  const { showNotification } = useNotification()               
  const [ workout, setWorkout ] = useState<FullWorkout | null>(null)
  const [ showRenameForm, setShowRenameForm ] = useState(false)
  const [ newWorkoutName, setNewWorkoutName ] = useState(workout?.workoutName)

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
      setShowRenameForm(false)

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
        >
          Start
        </Button>
      </div>

      {workout ? (
        <div className="grid gap-2 p-2">

          <div>
            {!showRenameForm ? (
              <h1 
                onClick={() => setShowRenameForm(true)}
                className="font-black hover:cursor-pointer hover:underline"
                title="Click to update workout name"
              >
                {workout.workoutName}
              </h1>
            ) : (
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={newWorkoutName}
                  onChange={(e) => {
                    setNewWorkoutName(e.target.value)
                  }}
                />
                <Button
                  onClick={() => handleNameChange(newWorkoutName!)}
                >
                  Save
                </Button>
              </div>
  
            )}
       
          </div>

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