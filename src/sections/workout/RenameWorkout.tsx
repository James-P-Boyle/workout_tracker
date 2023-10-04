import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { Workout } from "@/types"
import { useState } from "react"

interface RenameWorkoutProps {
  workout: Workout
  handleRename: (newName: string) => Promise<void>
}

export default function RenameWorkout({
  workout,
  handleRename
}: RenameWorkoutProps) {

  const [ showRenameForm, setShowRenameForm ] = useState(false)
  const [ newWorkoutName, setNewWorkoutName ] = useState(workout?.workoutName)

  return (
    <div>
      {!showRenameForm ? (
        <h1 
          onClick={() => setShowRenameForm(true)}
          className="font-black hover:cursor-pointer hover:underline"
          title="Click to update workout name"
        >
          {workout.workoutName}
        </h1>
      ) : (
        <div className="flex gap-2">
          <Input
            type="text"
            value={newWorkoutName}
            onChange={(e) => {
              setNewWorkoutName(e.target.value)
            }}
          />
          <Button
            onClick={() => {
              handleRename(newWorkoutName!)
              setShowRenameForm(false)
            }}
          >
            Save
          </Button>
        </div>

      )}

    </div>
  )
}