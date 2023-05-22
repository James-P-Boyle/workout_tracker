import { Route, Routes} from "react-router-dom"
import Dashboard from "@/components/dashboard/Dashboard"
import DashLayout from "@/components/layouts/DashLayout"
import CreateWorkout from "@/pages/workout/CreateWorkout"
import Login from "@/pages/login/Login"
import Register from "@/pages/register/Register"
import GuestLayout from "@/components/layouts/GuestLayout"
import { useAuth } from "@/contexts/AuthContext"
import NotFound from "@/pages/errors/NotFound"

export default function Routing() {

    const { user } = useAuth()

    return (
        <>
            <Routes>
                <Route path="/" element={<GuestLayout />}>
                    <Route index element={<h1>Home</h1>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login />}/>
                </Route>

            </Routes>

            {user && (
                <Routes>
                    <Route
                        path="/dashboard"
                        element={
                            <DashLayout>
                                <Dashboard />
                            </DashLayout>
                        }
                    >

                        <Route index element={<h1>hey</h1>}/>

                        <Route path="workouts">
                            <Route index element={<h1>Workouts Index</h1>}/>
                            <Route path="create" element={<CreateWorkout />}/>
                            <Route path=":id">
                                <Route index element={<h1>show one</h1>}/>
                                <Route path="edit" element={<h1>edit one</h1>}/>
                            </Route>
                        </Route>

                    </Route>

                </Routes>
            )}

        </>
    )
}