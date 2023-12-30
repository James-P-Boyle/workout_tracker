interface InputProps {
  name?: string
  id?: string
  type?: string
  value?: string | number
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string // Optional property
  required?: boolean
}

export default function Input({
    name,
    id,
    type = "text",
    value,
    placeholder,
    onChange,
    className = "", 
    required = false
}: InputProps) {

    return (
        <input
            className={`p-2 border text-gray-800 rounded-lg bg-transparent hover:border-gray-300 dark:border-gray-700 hover:dark:border-gray-600 dark:text-white transition-colors outline-none focus:border-yellow-600 ${className}`}
            name={name}
            type={type}
            required={required}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
        />
    )
}

