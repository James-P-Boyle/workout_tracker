
interface SelectProps {
  label: string
  id: string
  name: string
  value: string
  options: Array<{ value: string, label: string }>
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ label, id, name, value, options, onChange }: SelectProps) {

  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
