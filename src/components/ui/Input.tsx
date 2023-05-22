interface InputProps {
  name: string
  type: string
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string // Optional property
}

export default function Input({
    name,
    type,
    value,
    placeholder,
    onChange,
    className = "", 
}: InputProps) {

    return (
        <input
            className={`p-2 border-2 border-gray-400 rounded-lg mb-2 w-full outline-black bg-transparent hover:border-black transition-colors ${className}`}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

