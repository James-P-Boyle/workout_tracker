interface FormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
}

export default function Form({ handleSubmit, children }: FormProps) {

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              
            <div className="w-full max-w-sm ">

                {children}
                
            </div>
        </form>
    )
}