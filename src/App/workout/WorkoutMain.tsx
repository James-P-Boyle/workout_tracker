import { useState } from "react"
import Create from "./Create"
import MyWorkouts from "./MyWorkouts"
import Exercises from "../workout/Exercises"
import Button from "@/components/ui/Button"

export default function WorkoutMain() {

  //HANDLE ALL LOGIC HERE AND PASS DOWN
  const [activeTab, setActiveTab] = useState('myWorkouts')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <section className="grid w-full h-full p-4">
      <div className="flex flex-col p-2 rounded-lg dark:border dark:border-gray-700">
        <div className="flex flex-row gap-2">

          <>
            <Button
              className={`${activeTab === 'myWorkouts' && 'underline text-green-600'} w-full`}
              onClick={() => handleTabClick('myWorkouts')}
            >
              My Workouts
            </Button>

            <Button
              className={`${activeTab === 'create' && 'underline text-green-600'} w-full`}
              onClick={() => handleTabClick('create')}
            >
              Create
            </Button>

            <Button
              className={`${activeTab === 'exercises' && 'underline text-green-600'} w-full`}
              onClick={() => handleTabClick('exercises')}
            >
              Exercises
            </Button>
          </>

        </div>
        <div className="flex items-center justify-center flex-1">

          {activeTab === 'create' && <Create />}
          {activeTab === 'myWorkouts' && <MyWorkouts />}
          {activeTab === 'exercises' && <Exercises />}
          
        </div>
        
      </div>
    </section>
  )
}