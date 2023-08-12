import axios from "axios"
axios.defaults.withCredentials = true;

let API_BASE_URL = "http://localhost:8000";

export class WorkoutService {
    getWorkouts = () => axios.get(API_BASE_URL + '/workouts').then((res) => {
      console.log(res)
      return res
    }).catch((error) => {
      console.log(error)
    })

    // createWorkout = () => axios.post(API_BASE_URL + '/workouts/workout', workoutData).then((res) => {
    //   console.log(res);
    //   return res.data; // Return the data property from the response
    // }).catch((error) => {
    //   console.log(error);
    //   throw error; // Rethrow the error to handle it in the component
    // });
}