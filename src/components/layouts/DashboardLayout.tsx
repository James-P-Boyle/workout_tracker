interface DashboardLayoutProps {
  children: React.ReactNode
}
 
export default function DashboardLayout({ children }: DashboardLayoutProps) {

  return (
    <div className="flex flex-col justify-between gap-4 h-full">
    
      {children}
    
    </div>
  )
}