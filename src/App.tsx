import { useStyles } from "@/contexts/StyleContext"
import { Route, Routes } from "react-router-dom"
import Home from "@/pages/home/Home"
import Register from "@/pages/register/ProfileRegistration"
import Login from "@/pages/login/Login"
import NotFound from "@/pages/errors/NotFound"
import CreateWorkout from "@/sections/workout/CreateWorkout"
import Profile from "@/sections/profile/Profile"
import MyWorkouts from "@/sections/workout/MyWorkouts"
import ShowWorkout from "@/sections/workout/ShowWorkout"
import EditWorkout from "@/sections/workout/EditWorkout"
import ProgressMain from "@/sections/progress/ProgressMain"
import MainLayout from "@/layouts/MainLayout"
import GuestLayout from "@/layouts/GuestLayout"

function App() {

  const {mode} = useStyles()
  
  return (
    /* Remove styles from app */
    <div className={`${mode === "dark" ? "dark bg-[#141414] text-white" : ""}`}>
      <Routes>

        <Route path="/" element={<GuestLayout />}>

          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

        </Route>

        <Route path="dashboard" element={<MainLayout />}>

          <Route index element={<div>Some widgets and info</div>} />
          <Route path="progress" element={<ProgressMain />} />
          <Route path="workout" element={<MyWorkouts />} />
          <Route path="workout/create" element={<CreateWorkout />} />
          <Route path="workout/:id" element={<ShowWorkout />} />
          <Route path="workout/edit/:id" element={<EditWorkout />} />

        </Route>

        <Route path="profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
