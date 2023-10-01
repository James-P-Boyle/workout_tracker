import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Exercise, Workout, WorkoutExerciseData } from "@/types"
import { WorkoutService } from "@/services/workout.service"
import { useFetchExercises } from "@/hooks/useFetchExercises"
import Button from "@/components/ui/Button"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"
import Popup from "@/components/Popup"

interface AddExercisesToWorkoutProps {
  workoutId: string
  setAddedExercises: React.Dispatch<React.SetStateAction<WorkoutExerciseData[]>>
  addedExercises: WorkoutExerciseData[]
  handleWorkoutExercises: () => void
}

interface AddCustomExercisesProps {
  onSubmit: () => void
}

export default function createWorkout() {

  const workout = new WorkoutService()
  const navigate = useNavigate()
  //Remove extra state!!! derive from workout(rename)
  const [workoutName, setWorkoutName] = useState('')
  const [workoutData, setWorkoutData] = useState<Workout | null>(null)

  const [addedExercises, setAddedExercises] = useState<WorkoutExerciseData[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(event.target.value)
  }

  const handleNameWorkout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await workout.createWorkout(workoutName)
      setWorkoutData(data)
      return data
    } catch (error) {
      console.log("error creating workout: ", error)
    }
  }
  
  const handleWorkoutExercises = async () => {

    const workoutExerciseData = addedExercises.map((exercise) => ({
      workoutId: workoutData?.id, 
      exerciseId: exercise.exerciseId,
      exerciseName: exercise.exerciseName,
      order: exercise.order,
    }))

    try {
      const {data} = await workout.createWorkoutExercises(workoutExerciseData)
      navigate(`/dashboard/workout/${workoutData?.id}`)
      return data
    } catch (error) {
      console.log("error posting workout/exercise: ", error)
    }

  }
  
  return (
    <>
      {workoutData ? (
        <AddExercisesToWorkout 
          workoutId={workoutData.id}
          setAddedExercises={setAddedExercises}
          addedExercises={addedExercises}
          handleWorkoutExercises={handleWorkoutExercises}
        />
      ) : (
        <div className="grid justify-center">
          <Form handleSubmit={handleNameWorkout}>
            <Input 
              name="workoutName"
              placeholder="Name your workout"
              value={workoutName}
              onChange={handleChange}
            />  
            <Button
              type="submit"
              className="w-full"
            >
              Create
            </Button>
          </Form> 
        </div>
      )}
    </>
  )
}

function AddExercisesToWorkout({
  workoutId,
  setAddedExercises,
  addedExercises,
  handleWorkoutExercises
}: AddExercisesToWorkoutProps) {

  const { exercises, fetchExercises } = useFetchExercises()

  function handleExerciseClick(exercise: Exercise) {

    setAddedExercises((prev) => [
      ...prev,
      {
        workoutId: workoutId,
        exerciseId: exercise.id || '',
        exerciseName: exercise.exerciseName,
        order: prev.length + 1
      }
    ])
  }

  return (

    <div className="grid w-full grid-cols-2 gap-2">

      <div>
      <ExerciseFilter 
        exercises={exercises}
        handleExerciseClick={handleExerciseClick}
      />

      <AddCustomExercise 
        onSubmit={() => fetchExercises()}
        
      />

      </div>
      
   
      <div className="flex flex-col gap-2">

        <Button
          onClick={() => handleWorkoutExercises()}
        >
          {addedExercises.length ? 'Next...' : 'Create......'}
        </Button>
    
        <div className="flex flex-col flex-1 h-full p-2 border rounded-lg dark:border-gray-800">
          {addedExercises && addedExercises.map((exercise) => {
            return (
              <div
                key={`${exercise.exerciseId}${exercise.exerciseName}`}  
              >
                <span
                  className="block overflow-hidden"
                >
                  {exercise.exerciseName}
                </span>
              </div>
            )}
          )}
            
        </div>
      </div>
    
    </div>
  )
}

interface ExerciseFilterProps {
  exercises: Exercise[]
  handleExerciseClick: (exercise: Exercise) => void
}

function ExerciseFilter({
   exercises,
   handleExerciseClick
}:  ExerciseFilterProps) {
  
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<string[]>([])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.name

    if (event.target.checked) {
      setFilters([...filters, filter])
    } else {
      setFilters(filters.filter((f) => f !== filter))
    }
  }

  //Refactor this mess
  const filteredExercises = exercises.filter((exercise) => {
    const matchName = exercise.exerciseName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchFilter =
      filters.length === 0 || filters.includes(exercise.action) || filters.includes(exercise.bodySplit.toLowerCase())

    return matchName && matchFilter
  })

  return (
    <div className="flex flex-col gap-2">
      
      {!showFilters ? (
        <Button
          className="w-full"
          onClick={() => setShowFilters(!showFilters)}
        >
          Show Filters
        </Button>
      ) : (
        <div className="flex flex-col gap-2 p-2 border rounded-lg dark:border-gray-800">
          <Button
            onClick={() => setShowFilters(!showFilters)}
          >
            Hide Filters
          </Button>
          
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <div className="flex flex-col">
                  
            <label>
              <input
                type="checkbox"
                name="push"
                checked={filters.includes('push')}
                onChange={handleFilterChange}
              />
              Push
            </label>

            <label>
              <input
                type="checkbox"
                name="pull"
                checked={filters.includes('pull')}
                onChange={handleFilterChange}
              />
              Pull
            </label>

            <label>
              <input
                type="checkbox"
                name="upper"
                checked={filters.includes('upper')}
                onChange={handleFilterChange}
              />
              Upper
            </label>

            <label>
              <input
                type="checkbox"
                name="lower"
                checked={filters.includes('lower')}
                onChange={handleFilterChange}
              />
              Lower
            </label>
              
          </div>
        </div>
      )}
    
      <div className="flex flex-col p-2 border rounded-lg dark:border-gray-800">
        {filteredExercises.map((exercise) => (
          <button
            className="overflow-hidden text-left"
            key={exercise.id}
            onClick={() => handleExerciseClick(exercise)}
          >
            {exercise.exerciseName}
          </button>
        ))}
      </div>
    </div>
  )
}

function AddCustomExercise({
  onSubmit
}: AddCustomExercisesProps) {

  const workout = new WorkoutService()

  const [ showForm, setShowForm ] = useState(false)
  // TYPE!!
  const [formData, setFormData] = useState<any>({
    bodySplit: '',
    action: '',
    equipment: '',
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
        cta
        className="w-full mt-2"
      >
        Add Custom Exercise
      </Button>
    )
  
  )
}
