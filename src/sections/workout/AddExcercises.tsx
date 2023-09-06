import { Exercise, WorkoutExerciseData } from "@/types"

interface AddExcercisesProps {
  setAddedExercises: React.Dispatch<React.SetStateAction<WorkoutExerciseData[]>>
  exercises: Exercise[]
  workoutId: string
}

export default function AddExercises({
  setAddedExercises,
  exercises,
  workoutId
}: AddExcercisesProps) {

  //Add this logic to parent
  const handleExerciseAdded = (exercise: Exercise) => {

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
 
    <div className="grid gap-0.5">
      {exercises.map((exercise, index) => (
        <button
          className=""
          key={exercise.id + '' + index} 
          onClick={() => {
            console.log("Clicked exerciseId:", exercise);
            handleExerciseAdded(exercise);
          }}
        >{exercise.exerciseName}</button>
      ))}
    </div>

  )
}
