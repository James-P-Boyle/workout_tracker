import { useState } from "react"
import { WorkoutService } from "@/services/workout.service"
import { ActionType, BodySplitType, EquipmentType, Exercise } from "@/types"
import Popup from "@/components/Popup"
import Button from "@/components/ui/Button"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"


interface AddCustomExercisesProps {
  onSubmit: () => void
}

export default function AddCustomExercise({
  onSubmit
}: AddCustomExercisesProps) {

  const workout = new WorkoutService()

  const [ showForm, setShowForm ] = useState(false)

  const [formData, setFormData] = useState<Exercise>({
    bodySplit: BodySplitType.UPPER,
    action: ActionType.PUSH,
    equipment: EquipmentType.DUMBBELL,
    exerciseName: '',
    instruction: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  
    try {
      const response = await workout.addCustomExercise(formData)
      // Add notification ...
      onSubmit()
      setShowForm(false)
    } catch (error) {
      console.log('Error creating new exercise:', error)
    }
  }

  return (

    showForm ? (
      <Popup 
        onClose={() => setShowForm(false)}
      >
        <Form 
          handleSubmit={handleSubmit}
        >
          <select
            name="bodySplit"
            value={formData.bodySplit}
            onChange={onChange}
            className="w-full p-2 text-gray-400 transition-colors bg-transparent border rounded-lg outline-black hover:border-black dark:border-gray-700 hover:dark:border-gray-600"
          >
            <option value="">Select Body Split</option>
            <option value="upper">Upper</option>
            <option value="lower">Lower</option>
          </select>

          <select
            name="action"
            value={formData.action}
            onChange={onChange}
            className="w-full p-2 text-gray-400 transition-colors bg-transparent border rounded-lg outline-black hover:border-black dark:border-gray-700 hover:dark:border-gray-600"
          >
            <option value="">Select Action</option>
            <option value="push">Push</option>
            <option value="pull">Pull</option>
          </select>

          <Input
            name="equipment"
            type="text"
            value={formData.equipment}
            placeholder="Equipment"
            onChange={onChange}
          />

          <Input
            name="exerciseName"
            type="text"
            value={formData.exerciseName}
            placeholder="Exercise Name"
            onChange={onChange}
          />
          
          <Input
            name="instruction"
            type="text"
            value={formData.instruction}
            placeholder="Instruction"
            onChange={onChange}
          />
     
          <Button 
            type="submit" 
            cta 
          >
            Add
          </Button>   
        </Form>
      </Popup>

    ) : (
      <Button
        onClick={() => setShowForm(true)}
        className="w-full mt-2"
      >
        Add Custom Exercise
      </Button>
    )
  
  )
}
