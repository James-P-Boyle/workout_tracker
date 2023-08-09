import { Profile } from "@/interfaces/Profile";
import axios from "axios"
axios.defaults.withCredentials = true;

const API_BASE_URL = "http://localhost:8000";

export class UserService {
    login = async (email: string, password: string) => {
        try {
            return await axios.post(API_BASE_URL + "/auth/login", {email, password}) 
        } catch (error) {
            console.log(`Error While Logging In =>`, error)
        }
    }

    getUsers = () => {
        return axios.get(API_BASE_URL + "/users")
    }

    register = async (email: string, password: string) => {
        try {
            const response = await axios.post(API_BASE_URL + "/users/register", {email, password});
            console.log(`New User Has Been Registered`, JSON.stringify(response, null, 2)) 
        } catch (error) {
            console.log(`Error While Registering In =>`, error)
        }
    }

    updateProfile = async (profile: Partial<Profile>) => {
        try {
            const response = await axios.patch(API_BASE_URL + "/users/profile", {profile});
            console.log(`User Profile Has Been Updated =>`, response)
        } catch (error) {
            console.log(error)
        }

    }
}