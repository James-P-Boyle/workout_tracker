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
            className={`py-2 px-4 text-2xl rounded-lg font-bold border-2 border-gray-400 hover:border-black hover:shadow-xl transition-colors ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}