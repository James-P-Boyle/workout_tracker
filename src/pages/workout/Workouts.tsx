import Button from "@/components/ui/Button";
import { WorkoutService } from "@/services/workout.service";
import AddExercises from "./AddExcercises";
import Create from "./Create";

export default function Workouts() {

  const workout = new WorkoutService()


  const getWorkouts = () => {
    workout.getWorkouts()
    console.log('Workouts', workout)
  }

  
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4 bg-pink-500/40">
      <Button 
        onClick={getWorkouts}
      >
          Get Workouts
      </Button>
      <h2>Add exercises component</h2>
      <AddExercises />
      
      <h3>Create component</h3>
      <Create />
    </section>
  )
}