interface DashboardLayoutProps {
  children: React.ReactNode
}
 
export default function DashboardLayout({ children }: DashboardLayoutProps) {

  return (
    <div className={`relative flex flex-col justify-between gap-4`}>
    
      {children}
    
    </div>
  )
}