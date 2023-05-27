import React from "react"

interface DropdownMenuProps {
  isOpen: boolean
  className?: string
  children: React.ReactNode
}

export default function DropdownMenu({ isOpen, className, children }: DropdownMenuProps) {
  const menuClasses = `flex flex-col gap-2 py-2 bg-white rounded-lg shadow-lg ${className ?? ""}`

  return (
    <div className={isOpen ? menuClasses : "hidden"}>
      {children}
    </div>
  )
}






