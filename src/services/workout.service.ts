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
}