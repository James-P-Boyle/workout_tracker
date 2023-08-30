import { ExerciseData } from "@/App/AppContainer"
import Dropdown from "@/components/ui/Dropdown"

interface ExerciseIndexProps {
  exercises?: ExerciseData[]
}

export default function ExerciseIndex({
  exercises
}: ExerciseIndexProps) {

  return (
    <div className="h-full border">
      <h1>All exercises</h1>

      <div className="grid gap-2 px-1">
        {exercises ? (
          exercises.map((exercise, index) => (
           <ExerciseCard 
            //BETTER KEY
            key={`${exercise.exerciseName}-${index}`}
            name={exercise.exerciseName}
            action={exercise.action}
            equipment={exercise.equipment}
            instruction={exercise.instruction}
           />
          ))
        ) : (
          <h1>no exercises</h1>
        )}
      </div>
 
    </div>
  )
}
// remove this, extend
interface ExerciseCardProps {
  name: string
  action: string
  equipment: string
  instruction: string
}
function ExerciseCard({name, action, equipment, instruction}: ExerciseCardProps) {

  return (
    <div className="bg-slate-100">

      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span>Action: <strong>{action}</strong></span>
        <span>Equipment: <strong>{equipment}</strong></span>
      </div>
    
      <div>
        <Dropdown>
          <Dropdown.Trigger>
            Show Instructions
          </Dropdown.Trigger>
          <Dropdown.Content>

            <span>{instruction}</span>
          </Dropdown.Content>
      
        </Dropdown>
      </div>

    

  </div>
  )
}