
import { ExerciseData } from "@/types"
import axios, { AxiosResponse } from "axios"
axios.defaults.withCredentials = true

let API_BASE_URL = "http://localhost:8000"

type WorkoutExerciseData = {
  workoutId?: string
  exerciseId?: string
  order?: number
}

export class WorkoutService {
  getWorkouts = () => axios.get(API_BASE_URL + '/workouts').then((response) => {
    console.log(response)
    return response
  }).catch((error) => {
    console.log(error)
  })

  getWorkout = async (id: string): Promise<AxiosResponse> => {
    try {
      const response = await axios.get(API_BASE_URL + `/workouts/id/${id}`)
      console.log('Get Workout Exercises by ID success response', JSON.stringify(response))
      return response
    } catch (error) {
      console.log('Error while getting workout exercises by ID:', error)
      throw error
    }
  }

  createWorkout = async (workoutName: string): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(API_BASE_URL + '/workouts/workout', {
        'workoutName': workoutName
      })
      console.log(`Create Workout success response`, JSON.stringify(response))
      return response
    } catch (error) {
      console.log(`Error While creating workout =>`, error)
      throw error
    }
  }

  createWorkoutExercises = async (exercises: WorkoutExerciseData[]): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(
        API_BASE_URL + '/workout-exercises/workout-exercises', exercises, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
      console.log(`Create Workout Exercises success response`, JSON.stringify(response))
      return response
    } catch (error) {
      console.log(`Error while creating workout exercises =>`, error)
      throw error
    }
  }

  getExercises = async () => {
    try {
      const response = await axios.get(API_BASE_URL + '/exercises')
      console.log('getting exercise res, exerciseService', response)
      return response
    } catch (error) {
      console.log('error getting requests, exerciseService', error)
    }


  }

  addExercise = async (exercise: ExerciseData): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(API_BASE_URL + '/exercises/exercise', exercise)
      console.log(`Exercise Created`, JSON.stringify(response))
      return response
    } catch (error) {
      console.log(`Error While creating Exercise =>`, error)
      throw error
    }
  }
}

/* 
   @UseGuards(AuthenticatedGuard)
    @Post('workout-exercises')
    async createWorkoutExercises(@Body() createWorkoutExerciseDto: CreateWorkoutExerciseDto[]){
        return this.workoutExerciseService.createWorkoutExercises(createWorkoutExerciseDto)
    }
*/
