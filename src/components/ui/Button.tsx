export interface ButtonProps {
    type?: "button" | "submit"
    className?: string
    onClick?: () => void
    children: React.ReactNode
}

export default function Button({ 
    type = "button", 
    className = "", 
    onClick, 
    children 
}: ButtonProps) {

    return (
        <button
            type={type}
            className={`
                ${className}
                px-2 py-1 text-2xl rounded-lg font-bold border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-gray-700 hover:shadow-xl transition-colors 
               
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}