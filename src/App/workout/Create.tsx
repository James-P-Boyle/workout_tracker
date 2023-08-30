import { useState } from "react"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import { WorkoutService } from "@/services/workout.service"
import { useWorkoutMain } from "./context/WorkoutMainContext"
import AddExercises from "./AddExcercises"
import { useFetchExercises } from "@/hooks/useFetchExercises"
import { Workout, WorkoutExerciseData } from "@/types"

export default function Create() {

  const workout = new WorkoutService()
  const { dispatch } = useWorkoutMain()
  const { exercises } = useFetchExercises()
  //Remove extra state
  const [workoutName, setWorkoutName] = useState('')
  const [workoutData, setWorkoutData] = useState<Workout | null>(null)

  const [exerciseIds, setExerciseIds] = useState<WorkoutExerciseData[]>([])

  console.log('exercise ids', exerciseIds)
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(event.target.value)
  }

  const handleCreateWorkout = async (event: React.FormEvent<HTMLFormElement>) => {
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

    const workoutExercisesData = exerciseIds.map((exerciseId) => ({
      workoutId: workoutData?.id, 
      exerciseId: exerciseId.exerciseId,
      order: exerciseId.order,
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
          
            <div className="">
      
              <AddExercises 
                setExerciseIds={setExerciseIds}
                exercises={exercises}
                workoutId={workoutData.id}
              />
  
            </div>
    
            <div className="flex flex-col h-full">
        
              <div className="flex flex-col justify-between flex-1">
                <div>

                  {exerciseIds && exerciseIds.map((exercise) => {
                    return (
                      <div>
                        <span>ExerciseId = {exercise.exerciseId} </span>
                        <span>Order = {exercise.order}</span>
                      </div>
                    )}
                  )}
                </div>
            
                {exerciseIds && (
                  <Button
                    type="submit"
                    onClick={() => handleWorkoutExercises()}
                  >
                    Create Workout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>

      ) : (
        <Container>
          <Form handleSubmit={handleCreateWorkout}>
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

