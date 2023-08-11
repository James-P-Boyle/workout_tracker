import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { WorkoutService } from "@/services/workout.service"

export default function MyWorkouts() {

  const workout = new WorkoutService()

  const getWorkouts = () => {
    workout.getWorkouts()
    console.log('Workouts', workout)
  }

  return (
    <Container>
      <Button onClick={getWorkouts}>
        Get Workouts
      </Button>
      Show all workouts
    </Container>
  )
}