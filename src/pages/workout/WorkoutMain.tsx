import { useState } from "react"
import Create from "./Create"
import MyWorkouts from "./MyWorkouts"
import Exercises from "./Exercises"
import Button from "@/components/ui/Button"

export default function WorkoutMain() {

  const [showCreate, setShowCreate] = useState(false)
  const [showMyWorkouts, setShowMyWorkouts] = useState(false)
  const [showExercises, setShowExercises] = useState(false)

  // REFACTOR
  const handleCreateClick = () => {
    setShowCreate(true)
    setShowMyWorkouts(false)
    setShowExercises(false)
  }

  const handleMyWorkoutsClick = () => {
    setShowCreate(false)
    setShowMyWorkouts(true)
    setShowExercises(false)
  }

  const handleExercisesClick = () => {
    setShowCreate(false)
    setShowMyWorkouts(false)
    setShowExercises(true)
  }

  return (
    <section className="flex flex-col w-full h-full gap-4 p-4 justify-evenly bg-pink-500/40">
  

      <div className="flex h-20 gap-2">

        <Button 
          className={`${showMyWorkouts && 'underline text-green-600'} w-full`}
          onClick={handleMyWorkoutsClick}
        >
          My Workouts
        </Button>

        <Button 
          className={`${showCreate && 'underline text-green-600'} w-full`}
          onClick={handleCreateClick}
        >
          Create
        </Button>

        <Button 
          className={`${showExercises && 'underline text-green-600'} w-full`}
          onClick={handleExercisesClick}
        >
          Exercises
        </Button>
            
      </div>
    
      <div className="h-full">

        {showCreate && <Create />}
        
        {showMyWorkouts && <MyWorkouts />}

        {showExercises && <Exercises />}

      </div>
    
    </section>
  )
}