import Button from "@/components/ui/Button";

export default function ProgressMain() {

  return (
   
    <section className="grid justify-center w-full h-full grid-cols-[2fr_1fr] gap-4 p-4 dark:bg-gray-900">
      {/* PROGRESS ALERT COMPONENT */}

      <div className="p-2 border-gray-700 rounded-lg dark:border">
        <h1>My Progress Component</h1>
        <p>Can show widgets and charts</p>
      </div>

      {/* ALERT FEED */}
      <div className="flex flex-col gap-4 p-4 border-gray-700 rounded-lg dark:border">

        <h2>Alert Component</h2>
        <p>Make feed component, turn into accordian(dropdown)</p>
        {/* ALERT Cards */}
        <div className="w-full duration-500 md:hover:scale-105">
          <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-700 shadow-indigo-50 dark:shadow-gray-800">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Alert</h2>
              <p className="text-sm font-semibold text-gray-400">Other stuff</p>
              <Button className="w-full text-sm text-white bg-yellow-400 hover:bg-yellow-300">
                View Details
              </Button>
            </div>
            <div className="items-center justify-center hidden w-20 h-20 border-2 border-white border-dashed rounded-full shadow-2xl md:flex bg-gradient-to-tr from-yellow-500 to-yellow-400 shadow-yellow-400 ">
              <span className="text-xs text-white">Alert</span>
            </div>
          </div>
        </div>

        <div className="w-full duration-500 md:hover:scale-105">
          <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-700 dark:text-white shadow-indigo-50 dark:shadow-gray-800">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Well done!</h2>
              <p className="text-sm font-semibold text-gray-400">Other stuff</p>
              <Button className="w-full text-sm text-white bg-green-400 hover:bg-green-300">
                View Details
              </Button>
            </div>
            <div className="items-center justify-center hidden w-20 h-20 border-2 border-white border-dashed rounded-full shadow-2xl md:flex bg-gradient-to-tr from-green-500 to-green-400 shadow-green-400 ">
              <span className="text-xs text-white">New Best</span>
            </div>
          </div>
        </div>

        <div className="w-full duration-500 md:hover:scale-105">
          <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-md dark:bg-gray-700 dark:text-white shadow-indigo-50 dark:shadow-gray-800">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Warning!</h2>
              <p className="text-sm font-semibold text-gray-400">Other stuff</p>
              <Button className="w-full text-sm text-white bg-red-400 hover:bg-red-300">
                View Details
              </Button>
            </div>
            <div className="items-center justify-center hidden w-20 h-20 border-2 border-white border-dashed rounded-full shadow-2xl md:flex bg-gradient-to-tr from-red-500 to-red-400 shadow-red-400 ">
              <span className="text-xs text-white">Warning</span>
            </div>
          </div>
        </div>

      </div>
      
      
      
    </section>
  )
}