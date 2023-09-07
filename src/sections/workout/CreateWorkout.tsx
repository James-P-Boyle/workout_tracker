import { useState } from "react"
import { WorkoutService } from "@/services/workout.service"
import { useFetchExercises } from "@/hooks/useFetchExercises"
import { Exercise, Workout, WorkoutExerciseData } from "@/types"
import Button from "@/components/ui/Button"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"

interface AddExercisesToWorkoutProps {
  workoutId: string
  setAddedExercises: React.Dispatch<React.SetStateAction<WorkoutExerciseData[]>>
  addedExercises: WorkoutExerciseData[]
}

export default function createWorkout() {

  const workout = new WorkoutService()
  //Remove extra state!!! derive from workout(rename)
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
      console.log('res from creating', data.id)
      return data
    } catch (error) {
      console.log("error creating workout: ", error)
    }
  }
  
  const handleWorkoutExercises = async () => {

    const workoutExercisesData = addedExercises.map((exercise) => ({
      workoutId: workoutData?.id, 
      exerciseId: exercise.exerciseId,
      exerciseName: exercise.exerciseName,
      order: exercise.order,
    }))

    try {
      const {data} = await workout.createWorkoutExercises(workoutExercisesData)
      console.log('res from posting workout/exercise', data.id)
      return data
    } catch (error) {
      console.log("error posting workout/exercise: ", error)
    }

  }
  
  return (
    <>
      {workoutData ? (
        <>
          <Button
            type="submit"
            onClick={() => handleWorkoutExercises()}
          >
            {addedExercises.length > 0 ? 'Save Workout' : 'Add some exercises'}
          </Button>
          
          <AddExercisesToWorkout 
            workoutId={workoutData.id}
            setAddedExercises={setAddedExercises}
            addedExercises={addedExercises}
          />
        </>
      ) : (
        <div className="grid justify-center border">
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
  addedExercises
}: AddExercisesToWorkoutProps) {

  const { exercises } = useFetchExercises()

  function handleExerciseClick(exercise: Exercise) {

    setAddedExercises((prev) => [
      ...prev,
      {
        workoutId: workoutId,
        exerciseId: exercise.id || '',
        exerciseName: exercise.exerciseName,
        order: prev.length + 1
      }
    ])
  }

  return (
    <>
      <div className="grid grid-cols-2">
    
        <div className="grid gap-0.5">
          {exercises.map((exercise, index) => (
            <button
              className=""
              key={exercise.id + '' + index} 
              onClick={() => handleExerciseClick(exercise)}
            >
              {exercise.exerciseName}
            </button>
          ))}
        </div>

        <div className="flex flex-col flex-1">
          <div>
            {addedExercises && addedExercises.map((exercise) => {
              return (
                <div>
                  <span>
                    {exercise.exerciseName}
                  </span>
                  <span 
                    className="text-green-500"
                  >
                    {exercise.order}
                  </span>
                </div>
              )}
            )}
          </div>
        </div>
        
      </div>

    </>
  )
}