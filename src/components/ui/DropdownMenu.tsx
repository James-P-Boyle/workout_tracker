import React from "react"

interface DropdownMenuProps {
  isOpen?: boolean
  className?: string
  children: React.ReactNode
}

export default function DropdownMenu({ isOpen = true, className, children }: DropdownMenuProps) {
  const menuClasses = `flex flex-col w-full py-2 bg-white dark:bg-[#141414] rounded-lg ${className ?? ""}`

  return (
    <div className={isOpen ? menuClasses : "hidden"}>
      {children}
    </div>
  )
}






