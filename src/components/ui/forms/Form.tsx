interface FormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
}

export default function Form({ 
    handleSubmit, 
    children 
}: FormProps) {

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col w-full max-w-sm gap-2"
        >
            {children}
        </form>
    )
}