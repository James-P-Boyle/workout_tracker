import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string,
  className?: string
  children: React.ReactNode
  fontSize?: string
  onClick?: () => void
}

export default function NavItem({
  to,
  className,
  children,
  fontSize = "2xl",
  onClick
  
}: NavItemProps) {

  const activeClassName = "border-yellow-500 hover:border-yellow-600"

  return (
    <NavLink 
      className={
        ({ isActive }) => 
          `${isActive ? activeClassName : ""} text-${fontSize} ${className}
          flex justify-center py-2 border flex-1 w-full rounded-md dark:border-gray-800 hover:border-black dark:hover:border-gray-700 hover:shadow-lg transition-all`
      }
      to={to}
      onClick={onClick}
      end
    >
      { children }
    </NavLink>
  )
}
  
  