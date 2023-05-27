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
      
      <div className="relative flex w-full px-2 py-1 mb-2 transition-colors bg-transparent border-2 border-gray-400 rounded-lg outline-black hover:border-black">
        
        <NumberInputButton handleClick={handleDecrement}>
          -
        </NumberInputButton>

        <input
          type="text"
          className="flex-1 px-2 py-1 text-center outline-none dark:bg-transparent"
          value={value}
          onChange={handleChange}
          name={inputName}
          id={inputName}
        />

        {unit && (
          <span className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 right-8">
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
      type="button"
      className="flex items-center justify-center px-2 text-2xl font-black"
      onClick={handleClick}
    >
      {children}
    </button>

  )
}