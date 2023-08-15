import axios, { AxiosResponse } from "axios"
axios.defaults.withCredentials = true;

let API_BASE_URL = "http://localhost:8000";

export class WorkoutService {
  getWorkouts = () => axios.get(API_BASE_URL + '/workouts').then((res) => {
    console.log(res)
    return res
  }).catch((error) => {
    console.log(error)
  })

  // Change to .then
  createWorkout = async ( workoutName: any): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(API_BASE_URL + '/workouts/workout', { workoutName })
      console.log(`Create Workout success response`, JSON.stringify(response))
      return response
    } catch (error) {
      console.log(`Error While creating workout =>`, error);
      throw error
    }
  }     
}
