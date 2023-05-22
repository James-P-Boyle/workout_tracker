

interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: string
}

export default function Container({ children, className = "", maxWidth = "max-w-lg" }: ContainerProps) {
  return (
    <div className={`flex flex-col items-center justify-center mx-auto ${maxWidth} rounded-lg ${className}`}>
      {children}
    </div>
  )
}
