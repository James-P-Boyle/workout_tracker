import Container from "@/components/ui/Container"
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

                    <input
                        className="w-full p-2 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black"
                        name="exercise"
                        type="email"
                        placeholder="What excercise?"
                        // onChange={onChange}
                    />
                
                    <input
                        className="w-full p-2 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black"
                        type="text"
                        name="sets"
                        placeholder="Sets"
                        // onChange={onChange}
                    />
                
                    <input
                        className="w-full p-2 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black"
                        type="text"
                        name="reps"
                        placeholder="Reps"
                        // onChange={onChange}
                    />
                
                    <input
                        className="w-full p-2 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        // onChange={onChange}
                    />

                    <input
                        className="w-full p-2 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        // onChange={onChange}
                    />

                    <input
                        className="w-full p-2 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        // onChange={onChange}
                    />
                </div>
                <button 
                    className="px-4 py-2 text-2xl font-bold transition-colors border-2 border-gray-400 rounded-lg hover:border-black hover:shadow-xl" 
                    onClick={handleSubmit}
                    >
                    Create
                </button>
            </form>   

        </Container>
    )
}