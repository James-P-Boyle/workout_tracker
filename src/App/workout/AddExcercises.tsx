import { Exercise, WorkoutExerciseData } from "@/types"

interface AddExcercisesProps {
  setExerciseIds: React.Dispatch<React.SetStateAction<WorkoutExerciseData[]>>
  exercises: Exercise[]
  workoutId: string
}

export default function AddExercises({
  setExerciseIds,
  exercises,
  workoutId
}: AddExcercisesProps) {

  //Add this logic to parent
  const handleExerciseAdded = (exerciseId: string | undefined) => {

    setExerciseIds((prevIds) => [
      ...prevIds,
      {
        workoutId: workoutId,
        exerciseId: exerciseId || '',
        order: prevIds.length + 1
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
            console.log("Clicked exerciseId:", exercise.id);
            handleExerciseAdded(exercise.id);
          }}
        >{exercise.exerciseName}</button>
      ))}
    </div>

  )
}
