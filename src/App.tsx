import { useStyles } from "@/contexts/StyleContext"
import { Route, Routes } from "react-router-dom"
import GuestLayout from "@/components/layouts/GuestLayout"
import Home from "@/pages/home/Home"
import Register from "@/pages/register/ProfileRegistration"
import Login from "@/pages/login/Login"
import MyWorkouts from "@/sections/workout/MyWorkouts"
import ShowWorkout from "@/sections/workout/ShowWorkout"
import EditWorkout from "@/sections/workout/EditWorkout"
import ProgressMain from "@/sections/progress/ProgressMain"
import AdminMain from "@/sections/admin/AdminMain"
import NotFound from "@/pages/errors/NotFound"
import CreateWorkout from "@/sections/workout/CreateWorkout"
import MainLayout from "@/components/layouts/MainLayout"

function App() {

  const {mode} = useStyles()
  
  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <Routes>

        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="dashboard" element={<MainLayout />}>

          <Route path="progress" element={<ProgressMain />} />

          <Route path="workout" element={<MyWorkouts />} />
          <Route path="workout/create" element={<CreateWorkout />} />
          <Route path="workout/:id" element={<ShowWorkout />} />
          <Route path="workout/edit/:id" element={<EditWorkout />} />

          <Route path="admin"  element={<AdminMain/>} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
