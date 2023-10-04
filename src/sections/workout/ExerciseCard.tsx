import Input from "@/components/ui/forms/Input"
import { Exercise } from "@/types"
import { useState } from "react"

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({exercise}: ExerciseCardProps) {

  const [showDetails, setShowDetails] = useState(false)
  
  //Needs major refactoring
  return (
    <div
      className="relative flex flex-col gap-2 p-2 border rounded-lg dark:border-gray-800"
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