interface DashboardLayoutProps {
  children: React.ReactNode
  links: React.ReactNode
}
 
export default function DashboardLayout({ children, links }: DashboardLayoutProps) {

  return (
    <div className={`relative flex flex-col justify-between gap-2`}>
    
      {children}

      <div className="flex flex-col gap-2 sm:flex-row md:flex-col justify-evenly">
     
        {links}

      </div>    
    
    </div>
  )
}