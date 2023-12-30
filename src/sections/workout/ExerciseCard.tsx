import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { Exercise } from "@/types"
import { useState } from "react"

interface ExerciseCardProps {
  exercise: Exercise
  showTrackingForm?: boolean
}

export default function ExerciseCard({
  exercise,
  showTrackingForm = false
}: ExerciseCardProps) {

  const [showDetails, setShowDetails] = useState(false)
  
  return (
    <div className="relative flex flex-col justify-center w-full max-w-lg gap-2 p-2 mx-auto border rounded-lg dark:border-gray-800"> 

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

      {showTrackingForm ? (
        <TrackingForm />
      ) : (
        null
      )}
    </div>
  )
}

function ExerciseDetail({ 
  exercise
}: {
  exercise: Exercise
}) {

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
/* REFACTOR THIS MESS */
function TrackingForm() {
  const [repsInputs, setRepsInputs] = useState<string[]>([''])
  const [inputCount, setInputCount] = useState<number>(1)

  const handleAddSet = () => {
    setInputCount(inputCount + 1)
    setRepsInputs([...repsInputs, ''])
  }

  const handleInputChange = (index: number, value: string) => {
    
    const updatedInputs = [...repsInputs]
    updatedInputs[index] = value
    setRepsInputs(updatedInputs)
  }

  return (
    <div className="flex">
      <div className="flex flex-col w-full gap-2 p-2 border rounded-lg md:text-md dark:border-gray-800">
        {repsInputs.map((value, index) => (
          <div key={index} className="flex flex-row items-center flex-1 gap-2">
            <span className="font-bold text-gray-400">{index + 1}</span>
            <Input
              placeholder="Enter Reps"
              className="flex-1"
              type="number"
              value={value}
              required
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <Button 
              className="h-full"
              onClick={handleAddSet}
            >
              Add set
            </Button>
          </div>
        ))}

      </div>
 
    </div>
  )
}
