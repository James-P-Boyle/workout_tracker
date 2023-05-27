import { Route, Routes} from "react-router-dom"
import DashboardContainer from "@/components/dashboard/DashboardContainer"
import MainLayout from "@/components/layouts/MainLayout"
import CreateWorkout from "@/pages/workout/CreateWorkout"
import Login from "@/pages/login/Login"
import Register from "@/pages/register/Register"
import GuestLayout from "@/components/layouts/GuestLayout"
import ProtectedRoute from "./ProtectedRoute"
import Home from "@/pages/home/Home"
import NotFound from "@/pages/errors/NotFound"


export default function Routing() {


    return (

        <Routes>
            <Route path="/" element={<GuestLayout />}>
                <Route index element={<Home />}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login />}/>
            </Route>

            {/* PROTECTED ROUTES */}
            <Route
                path="dashboard"
                element={
                    <MainLayout>
                        <ProtectedRoute element={DashboardContainer} />
                    </MainLayout>
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

            <Route path="*" element={<NotFound />} />

        </Routes>


       
    )
}