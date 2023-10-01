import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Exercise, Workout, WorkoutExerciseData } from "@/types"
import { WorkoutService } from "@/services/workout.service"
import { useFetchExercises } from "@/hooks/useFetchExercises"
import Button from "@/components/ui/Button"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import ExerciseFilter from "./ExerciseFilter"
import AddCustomExercise from "./AddCustomExercise"

interface AddExercisesToWorkoutProps {
  workoutId: string
  setAddedExercises: React.Dispatch<React.SetStateAction<WorkoutExerciseData[]>>
  addedExercises: WorkoutExerciseData[]
  handleWorkoutExercises: () => void
}

export default function createWorkout() {

  const workout = new WorkoutService()
  const navigate = useNavigate()

  const [workoutName, setWorkoutName] = useState('')
  const [workoutData, setWorkoutData] = useState<Workout | null>(null)
  const [addedExercises, setAddedExercises] = useState<WorkoutExerciseData[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(event.target.value)
  }

  const handleNameWorkout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await workout.createWorkout(workoutName)
      setWorkoutData(data)
      return data
    } catch (error) {
      console.log("error creating workout: ", error)
    }
  }
  
  const handleWorkoutExercises = async () => {

    const workoutExerciseData = addedExercises.map((exercise) => ({
      workoutId: workoutData?.id, 
      exerciseId: exercise.exerciseId,
      exerciseName: exercise.exerciseName,
    }))

    try {
      const {data} = await workout.createWorkoutExercises(workoutExerciseData)
      navigate(`/dashboard/workout/${workoutData?.id}`)
      return data
    } catch (error) {
      console.log("error posting workout/exercise: ", error)
    }

  }
  
  return (
    <>
      {workoutData ? (
        <AddExercisesToWorkout 
          workoutId={workoutData.id}
          setAddedExercises={setAddedExercises}
          addedExercises={addedExercises}
          handleWorkoutExercises={handleWorkoutExercises}
        />
      ) : (
        <div className="grid justify-center">
          <Form handleSubmit={handleNameWorkout}>
            <Input 
              name="workoutName"
              placeholder="Name your workout"
              value={workoutName}
              onChange={handleChange}
            />  
            <Button
              type="submit"
              className="w-full"
            >
              Create
            </Button>
          </Form> 
        </div>
      )}
    </>
  )
}

function AddExercisesToWorkout({
  workoutId,
  setAddedExercises,
  addedExercises,
  handleWorkoutExercises
}: AddExercisesToWorkoutProps) {

  const { exercises, fetchExercises } = useFetchExercises()

  function handleExerciseClick(exercise: Exercise) {

    setAddedExercises((prev) => [
      ...prev,
      {
        workoutId: workoutId,
        exerciseId: exercise.id || '',
        exerciseName: exercise.exerciseName,
      }
    ])
  }

  return (

    <div className="grid w-full grid-cols-2 gap-2">

      <div>
        <ExerciseFilter 
          exercises={exercises}
          handleExerciseClick={handleExerciseClick}
        />

        <AddCustomExercise 
          onSubmit={() => fetchExercises()}
        />
      </div>
      
   
      <div className="flex flex-col gap-2">

        <Button
          onClick={() => handleWorkoutExercises()}
          cta={!!addedExercises.length}
        >
          {
            addedExercises.length ? 'Next...' : 'Create......'
          }
        </Button>
    
        <div className="flex flex-col flex-1 h-full p-2 border rounded-lg dark:border-gray-800">

          {addedExercises && addedExercises.map((exercise) => {
            return (
              <div
                key={`${exercise.exerciseId}${exercise.exerciseName}`}  
              >
                <span
                  className="block overflow-hidden"
                >
                  {exercise.exerciseName}
                </span>
              </div>
            )}
          )}
            
        </div>
      </div>
    
    </div>
  )
}
