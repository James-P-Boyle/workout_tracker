import { Route, Routes} from "react-router-dom"
// import Create from "@/pages/workout/Create"
import Login from "@/pages/login/Login"
import Register from "@/pages/register/Register"
import GuestLayout from "@/components/layouts/GuestLayout"
import Home from "@/pages/home/Home"
import NotFound from "@/pages/errors/NotFound"
import AppContainer from "@/App/AppContainer"
import WorkoutMain from "@/App/workout/WorkoutMain"
import ProgressMain from "@/App/progress/ProgressMain"
// import ProfileRegistration from "@/pages/register/ProfileRegistration"
// import WorkoutMain from "@/pages/workout/WorkoutMain"
// import AddExercises from "@/pages/workout/AddExcercises"
// import ProgressMain from "@/pages/progress/ProgressMain"

export default function Routing() {

  return (
    <Routes>

      <Route path="/" element={<GuestLayout />}>

        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
  
      </Route>
      
      <Route path="dashboard" element={<AppContainer />}>
    
        <Route path="workout" element={<WorkoutMain />} />

        <Route path="progress" element={<ProgressMain />} />

  
      </Route>
              
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

/* 

 <Routes>

      <Route path="/" element={<GuestLayout />}>

        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<ProfileRegistration />} />

      </Route>
      
      <Route path="dashboard" element={<MainLayout />} >

        <Route index element={<h1>hey</h1>} />

        <Route path="workouts">
          <Route index element={<WorkoutMain/>} />
    
          <Route path=":id" element={<h1>show one</h1>}>
            <Route path="edit" element={<h1>edit one</h1>} />
          </Route>
        </Route>

        <Route path="progress">
          <Route index element={<ProgressMain />} />
        </Route>

        <Route path="exercises">
          <Route index element={<h1>Show all exercises</h1>} />
          <Route path="add" element={<AddExercises />} />
        </Route>
       
      </Route>
              
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    */