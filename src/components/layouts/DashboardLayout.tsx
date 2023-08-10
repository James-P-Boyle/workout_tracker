interface DashboardLayoutProps {
  children: React.ReactNode
}
 
export default function DashboardLayout({ children }: DashboardLayoutProps) {

  return (
    <div className={`relative flex flex-col justify-between h-full gap-4`}>
    
      {children}
    
    </div>
  )
}