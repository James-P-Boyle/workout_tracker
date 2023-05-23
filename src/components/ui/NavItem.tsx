import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string,
  className?: string
  children: React.ReactNode
  fontSize?: string
}

export default function NavItem({
  to,
  className,
  children,
  fontSize = "2xl"
  
}: NavItemProps) {

  const activeClassName = "underline"

  return (
    <NavLink 
      className={
        ({ isActive }) => 
          `${isActive ? activeClassName : ""} text-${fontSize} ${className}
          flex justify-center py-2 border flex-1 w-full`
      }
      to={to}
      end
    >
      { children }
    </NavLink>
  )
}
  
  