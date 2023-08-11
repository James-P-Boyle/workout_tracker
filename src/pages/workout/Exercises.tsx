import AddExercises from "./AddExcercises";

export default function Exercises() {
  
  return (
    <section className="grid justify-center w-full h-full grid-cols-[2fr_1fr] gap-4 p-4">
      
      <div className="flex flex-col p-2 rounded-lg dark:border dark:border-gray-700">
        <h1>My Exercises List</h1>
      </div>

      <div className="flex flex-col p-2 rounded-lg dark:border dark:border-gray-700">
        <AddExercises />
      </div>
    </section>
  )
}