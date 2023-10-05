export interface ButtonProps {
    type?: "button" | "submit"
    className?: string
    onClick?: () => void
    children: React.ReactNode
    cta?: boolean 
    danger?: boolean
}

export default function Button({ 
    type = "button", 
    className = "", 
    onClick, 
    children,
    cta = false,
    danger = false
}: ButtonProps) {
    const baseClass = `
        px-2 py-1 rounded-lg font-bold border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm dark:text-white transition-colors
    `

    const ctaClass = cta ? `
        border-yellow-500 hover:border-yellow-600 dark:border-yellow-500 dark:hover:border-yellow-600
    ` : ''

    const dangerClass = danger ? `
        border-red-500 hover:border-red-600 dark:border-red-500 dark:hover:border-red-600
    ` : ''

    return (
        <button
            type={type}
            className={`${baseClass} ${className} ${ctaClass} ${dangerClass}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}