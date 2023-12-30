import { WorkoutService } from "@/services/workout.service"
import { FullWorkout } from "@/types"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ExerciseCard from "./ExerciseCard"

export default function StartWorkout() {
  
  const workoutService = new WorkoutService()
  const [ workout, setWorkout ] = useState<FullWorkout | null>(null)
  const { id } = useParams()   

  //Extract to hook, used in showWorkout too
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
    <div className="flex flex-col w-full gap-2">
      {workout && workout.workoutExercises.map(({exercise}: any) => (
        <ExerciseCard 
          key={exercise.id}
          exercise={exercise}
          showTrackingForm
        />
      ))}

        <div className="flex justify-end">
          <button 
            disabled
            className="px-6 py-2 font-black text-white transition-all bg-yellow-500 border rounded-lg boder-gray-200 hover:shadow-xl dark:text-white hover:scale-105"
          >
            Save not working yet
          </button> 
        </div>

    </div>
    
  )
}