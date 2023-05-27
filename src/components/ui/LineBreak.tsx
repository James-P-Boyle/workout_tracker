interface LineBreakProps {
  addClass?: string
}

export default function LineBreak({ addClass }: LineBreakProps) {

return (
    <div className={`${addClass} flex flex-col items-center gap-2`}>
      <span className="bg-black dark:bg-white h-2 rounded-full w-[150px]"></span>
      <span className="bg-black dark:bg-white h-1 rounded-full w-[80px]"></span>
    </div>
  )
}