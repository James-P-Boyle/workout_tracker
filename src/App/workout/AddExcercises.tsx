import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import Label from "@/components/ui/forms/Label"
import Select from "@/components/ui/forms/Select"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

enum EquipmentType {
  DUMBBELL = 'dumbbell',
  BARBELL = 'barbell',
  BODYWEIGHT = 'bodyweight',
}

enum ActionType {
  PUSH = 'push',
  PULL = 'pull',
}

enum BodySplitType {
  UPPER = 'upper',
  LOWER = 'lower',
}

export interface ExerciseData {
  bodySplit: BodySplitType
  action: ActionType
  equipment: EquipmentType
  exerciseName: string
  instructions: string
}

export default function AddExercises() {

  const [showAddExercise, setShowAddExercise] = useState(false)
  const navigate = useNavigate()

  const [exerciseData, setExerciseData] = useState<ExerciseData>({
    bodySplit: BodySplitType.UPPER,
    action: ActionType.PUSH,
    equipment: EquipmentType.DUMBBELL,
    exerciseName: '',
    instructions: '',
  })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setExerciseData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowAddExercise(false)

    //MAKE REQUEST AND USE LOAD SPINNER + REDIRECT BACK
    console.log('Exercise Data:', exerciseData)

    navigate('/dashboard/workouts')

  }
    
  return (

    <Container>

      {showAddExercise ? (
        <>
          <Button
            className="w-full"
            onClick={() => setShowAddExercise(!showAddExercise)}
          >
            X
          </Button>

          <Form 
            handleSubmit={handleSubmit}
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

            <Label label="instructions" htmlFor="instructions"/>
            <Input
              name="instructions"
              placeholder="Instructions"
              value={exerciseData.instructions}
              onChange={handleChange}
            />

            <Button
              className="w-full"
              type="submit"
            >
              Add New
            </Button>
              
          </Form> 
        </>  
      ): (
        <Button
          className="w-full"
          onClick={() => setShowAddExercise(!showAddExercise)}
        >
          Add Exercise
        </Button>
      )}
      

    </Container>
  )
}
    
