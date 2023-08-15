import { Profile } from "@/interfaces/Profile";
import axios, { AxiosResponse } from "axios"
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

    register = async (email: string, password: string): Promise<AxiosResponse> => {
        try {
            const response = await axios.post(API_BASE_URL + "/users/register", { email, password });
            console.log(`New User Has Been Registered`, JSON.stringify(response, null, 2))
            return response // Return the response object
        } catch (error) {
            console.log(`Error While Registering In =>`, error);
            throw error
        }
    }

    updateProfile = async (profile: Partial<Profile>) => {
        console.log('Partial object inside updateProfile service => ', profile)
        try {
            const response = await axios.patch(API_BASE_URL + "/users/profile", profile);
            console.log(`User Profile Has Been Updated log inside service =>`, response)
        } catch (error) {
            console.log(error)
        }

    }

    logout = async () => {
        try {
          const response = await axios.get(API_BASE_URL + "/auth/logout");
          console.log("User has been logged out", response);
        } catch (error) {
          console.log("Error while logging out:", error);
        }
    }
}
