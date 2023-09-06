import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { WorkoutService } from "@/services/workout.service"
import { ActionType, BodySplitType, EquipmentType, Exercise } from "@/types"
import Dropdown from "@/components/ui/Dropdown"
import Button from "@/components/ui/Button"
import AddExercise from "./AddExercise"

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
  const [exercises, setExercises] = useState<Exercise[]>()

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

        <div className="h-full border">
          <h1>All exercises</h1>

          <div className="grid gap-2 px-1">
            {exercises ? (
              exercises.map((exercise, index) => (
              <ExerciseCard 
                //BETTER KEY
                key={`${exercise.exerciseName}-${index}`}
                name={exercise.exerciseName}
                action={exercise.action}
                equipment={exercise.equipment}
                instruction={exercise.instruction}
              />
              ))
            ) : (
              <h1>no exercises</h1>
            )}
          </div>
    
        </div>

      </div>
     
    </div>
  )
}

interface ExerciseCardProps {
  name: string
  action: string
  equipment: string
  instruction: string
}
function ExerciseCard({name, action, equipment, instruction}: ExerciseCardProps) {

  return (
    <div className="bg-slate-100">

      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span>Action: <strong>{action}</strong></span>
        <span>Equipment: <strong>{equipment}</strong></span>
      </div>
    
      <Dropdown>
        <Dropdown.Trigger>
          Show Instructions
        </Dropdown.Trigger>
        <Dropdown.Content>

          <span>{instruction}</span>
        </Dropdown.Content>
    
      </Dropdown>

    </div>
  )
}