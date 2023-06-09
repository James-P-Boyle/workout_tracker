import React from "react"

interface DropdownMenuProps {
  isOpen: boolean
  className?: string
  children: React.ReactNode
}

export default function DropdownMenu({ isOpen, className, children }: DropdownMenuProps) {
  const menuClasses = `flex flex-col py-2 bg-white dark:bg-gray-900 rounded-lg ${className ?? ""}`

  return (
    <div className={isOpen ? menuClasses : "hidden"}>
      {children}
    </div>
  )
}






