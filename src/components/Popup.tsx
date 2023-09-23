import React, { useEffect } from "react"
import Button from "./ui/Button"

interface PopupProps {
  onClose: () => void
  children: React.ReactNode
}

export default function Popup({ onClose, children }: PopupProps) {

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`fixed inset-2 flex items-center justify-center bg-white/95 dark:bg-[#141414]/95`}
      onClick={handleOutsideClick}
    >
      <div className="flex flex-col gap-2 flex-1 max-w-xl min-h-[50vh] slide-in p-2 bg-white border border-black dark:border-gray-700 rounded-lg dark:bg-[#141414]">
        
        <div className="flex justify-end">
          <Button 
            onClick={onClose} 
          >
            X
          </Button>
        </div>

        <div 
          className="flex-1 p-2 border rounded-lg dark:border-gray-800"
        >
          {children}
        </div>
       
      </div>
    </div>
  )
}
