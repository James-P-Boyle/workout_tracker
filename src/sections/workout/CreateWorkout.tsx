import { useState } from "react"
import { WorkoutService } from "@/services/workout.service"
import { useFetchExercises } from "@/hooks/useFetchExercises"
import { Workout, WorkoutExerciseData } from "@/types"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"

export default function Create() {

  const workout = new WorkoutService()
  const { exercises } = useFetchExercises()
  //Remove extra state
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

    console.log('this is the data im sending',workoutExercisesData)
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
          <div className="flex">
        
            <div className="grid gap-0.5">
              {exercises.map((exercise, index) => (
                <button
                  className=""
                  key={exercise.id + '' + index} 
                  onClick={() => {
                    /* Refactor */
                    console.log("Clicked exerciseId:", exercise);
                    setAddedExercises((prev) => [
                      ...prev,
                      {
                        workoutId: workoutData.id,
                        exerciseId: exercise.id || '',
                        exerciseName: exercise.exerciseName,
                        order: prev.length + 1
                      }
                    ])
                  }}
                >{exercise.exerciseName}</button>
              ))}
            </div>
  
            <div className="flex flex-col flex-1">
              <div>
                {addedExercises && addedExercises.map((exercise) => {
                  return (
                    <div>
                      <span>{exercise.exerciseName} </span>
                      <span className="text-green-500">{exercise.order}</span>
                    </div>
                  )}
                )}
              </div>
          
              {addedExercises && (
                <Button
                  type="submit"
                  onClick={() => handleWorkoutExercises()}
                >
                  Save Workout
                </Button>
              )}
            </div>
          </div>
    
        </>

      ) : (
        
        <Container>
          <Form handleSubmit={handleNameWorkout}>
            <h1>Create your Workout</h1>
            <Input 
              name="workoutName"
              placeholder="Name your workout"
              value={workoutName}
              onChange={handleChange}
            />  
            <Button
              type="submit"
            >
              Create
            </Button>
          </Form> 
        </Container>
      )}
    </>
  )
}

