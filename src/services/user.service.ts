import { Profile } from "@/types"
import axios, { AxiosResponse } from "axios"
axios.defaults.withCredentials = true

const API_BASE_URL = "http://localhost:8000"

export class UserService {
    login = async (email: string, password: string) => {
        try {
            const res = await axios.post(API_BASE_URL + "/auth/login", {email, password}) 
            return res
        } catch (error) {
            console.log(`Error While Logging In =>`, error)
        }
    }

    getUsers = () => {
        return axios.get(API_BASE_URL + "/users")
    }

    register = async (email: string, password: string): Promise<AxiosResponse> => {
        try {
            const response = await axios.post(API_BASE_URL + "/users/register", { email, password })
            return response // Return the response object
        } catch (error) {
            console.log(`Error While Registering In =>`, error)
            throw error
        }
    }

    updateProfile = async (profile: Partial<Profile>) => {
        try {
            const response = await axios.patch(API_BASE_URL + "/users/profile", profile)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    logout = async () => {
        try {
          const response = await axios.get(API_BASE_URL + "/auth/logout")
          return response
        } catch (error) {
          console.log("Error while logging out:", error)
        }
    }

    auth = async () => {
        try {
          const response = await axios.get(API_BASE_URL + "/auth/status")
          return response
        } catch (error) {
          console.log("Error while logging out:", error)
        }
    }
}
