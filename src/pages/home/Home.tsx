import { useState } from "react"
import { useNavigate } from "react-router"

interface HomeProps {

}

export default function Home({}: HomeProps) {

  const [showAbout, setShowAbout] =  useState(false)
  const navigate = useNavigate()


  const handleDownloadClick = () => {
    navigate('/register')
  }

  return (
    <section className="flex flex-col items-center justify-center h-full mx-auto">

      <div className="flex flex-col items-center max-w-xl gap-4 p-2 text-center sm:p-4">
        
        <span className="font-semibold text-yellow-500 text-lg md:text-xl xl:text-2xl">
          The Workout Tracker
        </span>

        {showAbout ? (
          <FindOutMore />
        ) : (
          <>
            <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">Workouts Made Easy</h1>

            <p className="leading-relaxed text-gray-500 xl:text-lg">
              Simple, intuitive, and free Workout Tracker App, your all-in-one solution for achieving and surpassing your fitness goals.
            </p>
          </>
        )}

        <div className={`grid ${!showAbout && 'sm:grid-cols-2 gap-2'}`}>
          {/* Need to refactor job component, TWmerge */}
          {!showAbout && (
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowAbout(true)
              }}
              className="px-6 py-2 font-bold transition-all border border-gray-200 rounded-lg hover:border-black dark:border-gray-700 dark:hover:border-gray-600 hover:shadow-xl dark:text-white hover:scale-105"
            >
              Find out more
            </button>
          )}
   
          <button 
            onClick={(e) => {
              e.preventDefault()
              handleDownloadClick()
            }}
            className="px-6 py-2 font-black text-white transition-all bg-yellow-500 border rounded-lg boder-gray-200 hover:border-black dark:border-gray-700 dark:hover:border-gray-600 hover:shadow-xl dark:text-white hover:scale-105"
          >
            Download
          </button>
   
        </div>
      </div>
    </section>
  )
}

function FindOutMore() {

  return (
    <>
      <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">Free, simple & effective</h1>

      <p className="leading-relaxed text-gray-500 xl:text-lg">
        Simple, intuitive, and free Workout Tracker App, your all-in-one solution for achieving and surpassing your fitness goals.
      </p>
      <p className="leading-relaxed text-gray-500 xl:text-lg">
        Simple, intuitive, and free Workout Tracker App, your all-in-one solution for achieving and surpassing your fitness goals.
      </p>
    </>
  )
}