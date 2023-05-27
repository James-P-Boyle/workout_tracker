interface ButtonProps {
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
                p-2 text-2xl rounded-lg font-bold border-2 border-gray-400 dark:border-gray-700 hover:border-black hover:shadow-xl transition-colors 
               
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}