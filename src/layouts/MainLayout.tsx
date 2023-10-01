import { useStyles } from "@/contexts/StyleContext"

interface MainLayoutProps {
  children: React.ReactNode
}
 
export default function MainLayout({children}: MainLayoutProps) {

  const { mode } = useStyles()

  return (

    <div className={`${mode === "dark" ? "dark bg-[#141414] text-white" : ""}`}>
    
      {children}  
    
    </div>
  )
}