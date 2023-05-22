
export default function CreateWorkout() {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setWorkoutData((prevState) => ({
        //   ...prevState,
        //   [e.target.name]: e.target.value,
        // }))
      }
    
      const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    
        // const {} = WorkoutData
        // setWorkoutData(workoutData)
      }

    return (
        <div className="flex flex-col items-center justify-center mx-auto max-w-lg rounded-lg">
            <form className="flex flex-col gap-2">
                <div className="w-full max-w-sm ">
                    <input
                        className="p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors"
                        name="exercise"
                        type="email"
                        placeholder="What excercise?"
                        onChange={onChange}
                    />
                
                    <input
                        className="p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors"
                        type="text"
                        name="sets"
                        placeholder="Sets"
                        onChange={onChange}
                    />
                
                    <input
                        className="p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors"
                        type="text"
                        name="reps"
                        placeholder="Reps"
                        onChange={onChange}
                    />
                
                    <input
                        className="p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        onChange={onChange}
                    />

                    <input
                        className="p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        onChange={onChange}
                    />

                    <input
                        className="p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        onChange={onChange}
                    />
                </div>
                <button 
                    className="py-2 px-4 text-2xl rounded-lg font-bold border-2 border-gray-400 hover:border-black hover:shadow-xl transition-colors" 
                    onClick={handleSubmit}
                    >
                    Create
                </button>
            </form>   

        </div>
    )
}