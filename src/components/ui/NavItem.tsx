import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string,
  className?: string
  children: React.ReactNode
}

export default function NavItem({
  to,
  className,
  children
  

}: NavItemProps) {

  const activeClassName = "underline"

  return (
    <NavLink 
      className={
        ({ isActive }) => `${isActive ? activeClassName : ""} 
          flex justify-center py-2 border flex-1 w-full text-2xl ${className}`
      }
      to={to}
      end
    >
      { children }
    </NavLink>
  )
}
  
  