import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { Exercise } from "@/types"
import { useState } from "react"

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({exercise}: ExerciseCardProps) {

  const [showDetails, setShowDetails] = useState(false)
  
  return (
    <div className="relative flex flex-col gap-2 p-2 border rounded-lg dark:border-gray-800"> 

      {showDetails ? (
        <div className="grid gap-2">

          <div className="flex items-center justify-between">
            <span className="font-bold">
              {exercise.exerciseName}
            </span>
            <Button
              onClick={() => setShowDetails(false)}
            >
              x
            </Button>
          </div>

          <ExerciseDetail 
            exercise={exercise}
          />
          
        </div>
      ) : (
        <div className="flex justify-between">
          <span className="font-bold">
            {exercise.exerciseName}
          </span>
          <Button
            onClick={() => setShowDetails(true)}
          >
            ?
          </Button>
        </div>
      )}

      <div className="flex flex-row gap-2">
        <div>
          <Input placeholder="Enter Reps"></Input>
        </div>
   
        <span
          className="flex items-center justify-center p-1 transition-transform border rounded-lg dark:border-gray-800 hover:cursor-pointer"
        >
          Add set
        </span>
      </div>
      
  
    </div>
  )
}

function ExerciseDetail({ 
  exercise
}: {exercise: Exercise}) {
  // STYLE
  return (
    <>
      <p>{exercise.instruction}</p>
      
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
    </>
  )
}