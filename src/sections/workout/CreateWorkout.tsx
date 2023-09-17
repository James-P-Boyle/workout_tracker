import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Exercise, Workout, WorkoutExerciseData } from "@/types"
import { WorkoutService } from "@/services/workout.service"
import { useFetchExercises } from "@/hooks/useFetchExercises"
import Button from "@/components/ui/Button"
import Form from "@/components/ui/forms/Form"
import Input from "@/components/ui/forms/Input"

interface AddExercisesToWorkoutProps {
  workoutId: string
  setAddedExercises: React.Dispatch<React.SetStateAction<WorkoutExerciseData[]>>
  addedExercises: WorkoutExerciseData[]
  handleWorkoutExercises: () => void
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

  const { exercises } = useFetchExercises()

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

    <div className="grid grid-cols-2 gap-2">
      
      <ExerciseFilter 
        exercises={exercises}
        handleExerciseClick={handleExerciseClick}
      />

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
                <span 
                  className="text-green-500"
                >
                  {exercise.order}
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
