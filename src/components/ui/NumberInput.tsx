import { useState } from "react"

interface NumberInputProps {
  incrementValue?: number
  inputName: string
  label: string
  unit?: string
}

export default function NumberInput({ 
  incrementValue = 5, 
  inputName, 
  label,
  unit
}: NumberInputProps) {

  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + incrementValue)
  }

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(0, prevValue - incrementValue))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Math.max(0, Number(event.target.value))
    setValue(inputValue)
  }

  return (
    <div className="w-full ">

      <label htmlFor={inputName} className="text-lg capitalize">{label}</label>
      
      <div className="flex px-2 py-1 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors relative">
        
        <button
          className="flex items-center justify-center font-black text-2xl"
          onClick={handleDecrement}
        >
          -
        </button>

        <input
          type="text"
          className="px-2 py-1 flex-1 text-center outline-none"
          value={value}
          onChange={handleChange}
          name={inputName}
          id={inputName}
        />

        {unit && (
          <span className="absolute top-1/2 right-8 transform -translate-y-1/2 text-gray-400">
                kg
          </span>
        )}

        <button
          className="flex items-center justify-center font-black text-2xl"
          onClick={handleIncrement}
        >
          +
        </button>

      </div>
    </div>
  )
}