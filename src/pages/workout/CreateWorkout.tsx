import Container from "@/components/ui/Container"
import Input from "@/components/ui/forms/Input"
import NumberInput from "@/components/ui/forms/NumberInput"

export default function CreateWorkout() {

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     // setWorkoutData((prevState) => ({
    //     //   ...prevState,
    //     //   [e.target.name]: e.target.value,
    //     // }))
    //   }
    
      const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    
        // const {} = WorkoutData
        // setWorkoutData(workoutData)
      }

    return (

        <Container>

            <form className="flex flex-col gap-2">
                <div className="w-full max-w-sm ">

                    <NumberInput 
                        inputName="reps"
                        label="weight"
                        unit="kg"
                    />

                    <Input 
                        name="exercise"
                        type="email"
                        placeholder="What excercise?"
                        onChange={()=> {}}
                    />  

                    <Input 
                        name="sets"
                        placeholder="Sets"
                        onChange={()=> {}}
                    />  

                    <Input 
                        name="reps"
                        placeholder="Reps"
                        onChange={()=> {}}
                    />  

                    <Input 
                        name="weight"
                        placeholder="Weight"
                        onChange={()=> {}}
                    />  
   
                </div>
                <button 
                    className="px-4 py-2 text-2xl font-bold transition-colors border-2 border-gray-400 rounded-lg dark:border-purple-900 hover:border-black dark:border-gray-700 hover:dark:border-gray-900 hover:shadow-xl" 
                    onClick={handleSubmit}
                    >
                    Create
                </button>
            </form>   

        </Container>
    )
}