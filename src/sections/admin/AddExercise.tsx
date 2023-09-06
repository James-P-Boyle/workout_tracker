import { Exercise } from "@/types"
import Button from "@/components/ui/Button"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import Label from "@/components/ui/forms/Label"
import Select from "@/components/ui/forms/Select"
import { WorkoutService } from "@/services/workout.service"
import { ActionType, BodySplitType, EquipmentType } from "@/types"
import { useState } from "react"

interface AddExerciseProps {
  exerciseData: Exercise
  setExerciseData: (value: React.SetStateAction<Exercise>) => void
  onExerciseAdded: () => Promise<void>
}

export default function AddExercise({
  exerciseData, 
  setExerciseData,
  onExerciseAdded
}: AddExerciseProps) {

  const [isloading, setIsLoading] = useState(false)

  const exercise = new WorkoutService()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setExerciseData && setExerciseData((prevState: Exercise) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleExerciseAdded = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setIsLoading(true)
      const response = exercise.addExercise(exerciseData).then(() => { 
        setExerciseData({
          bodySplit: BodySplitType.UPPER,
          action: ActionType.PUSH,
          equipment: EquipmentType.DUMBBELL,
          exerciseName: "",
          instruction: "",
        })
        onExerciseAdded()
        setIsLoading(false)

        //show success and error messages
      })
    } catch (error) {
      console.log('Something went wrong', error)
    }
   
  }

  return (
 
    <Form 
      handleSubmit={handleExerciseAdded}
    >
      <Input
        name="exerciseName"
        placeholder="Exercise Name"
        value={exerciseData.exerciseName}
        onChange={handleChange}
      />

      <Select
        label="Upper Or Lower?"
        id="bodySplit"
        name="bodySplit"
        value={exerciseData.bodySplit}
        onChange={handleChange}
        options={[
          { value: BodySplitType.UPPER, label: 'Upper' },
          { value: BodySplitType.LOWER, label: 'Lower' },
        ]}
      />

      <Select
        label="Push or Pull?"
        id="action"
        name="action"
        value={exerciseData.action}
        onChange={handleChange}
        options={[
          { value: ActionType.PUSH, label: 'Push' },
          { value: ActionType.PULL, label: 'Pull' },
        ]}
      />

      <Select
        label="Equipment?"
        id="equipment"
        name="equipment"
        value={exerciseData.equipment}
        onChange={handleChange}
        options={[
          { value: EquipmentType.DUMBBELL, label: 'Dumbbell' },
          { value: EquipmentType.BARBELL, label: 'Barbell' },
          { value: EquipmentType.BODYWEIGHT, label: 'Bodyweight' },
        ]}
      />

      <Label label="instruction" htmlFor="instruction"/>
      <Input
        name="instruction"
        placeholder="Instructions"
        value={exerciseData.instruction}
        onChange={handleChange}
      />

      {isloading ? (
        <span>Loading</span>
      ) : (

        <Button
          className="w-full"
          type="submit"
        >
          Add New
        </Button>
      )}

        
    </Form> 
 
  )
}
    
