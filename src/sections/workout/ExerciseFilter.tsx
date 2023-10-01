import Button from "@/components/ui/Button"
import Input from "@/components/ui/forms/Input"
import { Exercise } from "@/types"
import { useEffect, useState } from "react"

interface ExerciseFilterProps {
  exercises: Exercise[]
  handleExerciseClick: (exercise: Exercise) => void
  handleExerciseRemoval: (exerciseId: string) => void
}

export default function ExerciseFilter({
   exercises,
   handleExerciseClick,
   handleExerciseRemoval
}:  ExerciseFilterProps) {
  
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<string[]>([])
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([])

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

  useEffect(() => {
    const filtered = exercises.filter((exercise) => {
      const matchName = exercise.exerciseName.toLowerCase().includes(searchQuery.toLowerCase())
      const matchFilter =
        filters.length === 0 || filters.includes(exercise.action) || filters.includes(exercise.bodySplit.toLowerCase())

      return matchName && matchFilter
    })

    setFilteredExercises(filtered)
  }, [exercises, searchQuery, filters])

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
            onClick={() => {
              handleExerciseRemoval(exercise.id!)
              handleExerciseClick(exercise)
            }}
          >
            {exercise.exerciseName}
          </button>
        ))}
      </div>
    </div>
  )
}