import { useState } from "react"
import Label from "./Label"

interface NumberInputProps {
  incrementValue?: number
  inputName: string
  label: string
  unit?: string
}

interface NumberInputButtonProps {
  children: React.ReactNode, 
  handleClick: () => void
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

      <Label 
        htmlFor={inputName}
        label={label}
      />
      
      <div className="flex px-2 py-1 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors relative">
        
        <NumberInputButton handleClick={handleDecrement}>
          -
        </NumberInputButton>

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

        <NumberInputButton handleClick={handleIncrement}>
          +
        </NumberInputButton>

      </div>
    </div>
  )
}

function NumberInputButton({
  children, 
  handleClick
}: NumberInputButtonProps) {

  return (

    <button
      className="flex items-center justify-center font-black text-2xl"
      onClick={handleClick}
    >
      {children}
    </button>

  )
}