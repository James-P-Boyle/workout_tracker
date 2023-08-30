import Button from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"
import AddExercise from "./AddExercise"
import ExerciseIndex from "./ExerciseIndex"
import { useEffect, useState } from "react"
import { WorkoutService } from "@/services/workout.service"
import { ActionType, BodySplitType, EquipmentType, Exercise } from "@/types"

export default function AdminMain() {

  const workoutService = new WorkoutService()

  const [exerciseData, setExerciseData] = useState<Exercise>({
    bodySplit: BodySplitType.UPPER,
    action: ActionType.PUSH,
    equipment: EquipmentType.DUMBBELL,
    exerciseName: '',
    instruction: '',
  })
  const [loading, setLoading] = useState(true)
  const [triggerFetch, setTriggerFetch] = useState(false)
  const [exercises, setExercises] = useState<ExerciseData[]>()

  const navigate = useNavigate()

  const handleExerciseAdded = async () => {
    setTriggerFetch(true)
  }

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true)
        const response = await workoutService.getExercises()
        setExercises(response?.data)
        console.log('res from getting exercisees',response?.data)
      } catch (error) {
        console.log("Error fetching workouts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchExercises() 
    setTriggerFetch(false)
  }, [triggerFetch])

  return (
    <div className="flex flex-col justify-between h-full border">
   
      <div>
        <Button
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
        <h1>Admin area</h1>
      </div>
     
      <div className="grid sm:grid-cols-[1fr_2fr] flex-1">

        <div className="">
          <AddExercise 
            exerciseData={exerciseData}
            setExerciseData={setExerciseData}
            onExerciseAdded={handleExerciseAdded}
          />
        </div>

        <div>
          <ExerciseIndex exercises={exercises}/>
        </div>

      </div>
     
    </div>
  )
}