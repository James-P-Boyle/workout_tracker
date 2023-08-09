interface InputProps {
  name: string
  id?: string
  type?: string
  value?: string | number
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string // Optional property
}

export default function Input({
    name,
    id,
    type = "text",
    value,
    placeholder,
    onChange,
    className = "", 
}: InputProps) {

    return (
        <input
            className={`p-2 border-2 border-gray-400 text-gray-800 rounded-lg w-full outline-black bg-transparentoutline-black hover:border-black dark:border-gray-700 hover:dark:border-gray-900 transition-colors ${className}`}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
        />
    )
}

