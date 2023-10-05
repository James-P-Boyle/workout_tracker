import { Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"

import Home from "@/pages/home/Home"
import Register from "@/pages/register/Register"
import Login from "@/pages/login/Login"
import Download from "@/pages/download/Download"
import NotFound from "@/pages/errors/NotFound"

import CreateWorkout from "@/sections/workout/CreateWorkout"
import Profile from "@/sections/profile/Profile"
import ShowAllWorkouts from "@/sections/workout/ShowAllWorkouts"
import ShowWorkout from "@/sections/workout/ShowWorkout"
import EditWorkout from "@/sections/workout/EditWorkout"
import ProgressMain from "@/sections/progress/ProgressMain"
import MainLayout from "@/layouts/MainLayout"
import GuestLayout from "@/layouts/GuestLayout"
import DashboardLayout from "@/layouts/DashboardLayout"
import StartWorkout from "@/sections/workout/StartWorkout"

function App() {

  const { isAuth } = useAuth()
  
  return (
    <MainLayout>
      <Routes>

        <Route path="/" element={<GuestLayout />}>

          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="download" element={<Download />} />

        </Route>
        {/* Need auth check */}
        <>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<div>Some widgets and info</div>} />
            <Route path="progress" element={<ProgressMain />} />
            <Route path="workout" element={<ShowAllWorkouts />} />
            <Route path="workout/create" element={<CreateWorkout />} />
            <Route path="workout/:id" element={<ShowWorkout />} />
            <Route path="workout/edit/:id" element={<EditWorkout />} />
            <Route path="workout/start/:id" element={<StartWorkout />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </>
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </MainLayout>
  )
}

export default App
