import { useState } from "react"
import Create from "./Create"
import MyWorkouts from "./MyWorkouts"
import Exercises from "./Exercises"
import Button from "@/components/ui/Button"
import WorkoutMainLayout from "./WorkoutMainLayout"

export default function WorkoutMain() {
  const [activeTab, setActiveTab] = useState('myWorkouts')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  const tabButtons = (
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
  )

  return (
    <WorkoutMainLayout tabButtons={tabButtons}>
      {activeTab === 'create' && <Create />}
      {activeTab === 'myWorkouts' && <MyWorkouts />}
      {activeTab === 'exercises' && <Exercises />}
    </WorkoutMainLayout>
  )
}