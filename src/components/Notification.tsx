import { useState, useEffect } from 'react'

type NotificationType = 'info' | 'success' | 'warning' | 'error'

interface NotificationProps {
  message: string
  type: NotificationType
  timeout?: number
  onDismiss?: () => void
  onClick?: () => void
}

export default function Notification({
  message,
  type,
  timeout = 2000, // Default timeout is 5 seconds (5000 milliseconds)
  onDismiss,
  onClick,
}: NotificationProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onDismiss) {
        onDismiss()
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout, onDismiss])

  const handleNotificationClick = () => {
    if (onClick) {
      onClick()
    }

    if (onDismiss) {
      onDismiss()
    }
  }

  let typeClasses = ''
  // if (type === 'info') {
  //   typeClasses = 'bg-blue-600'
  // } else if (type === 'success') {
  //   typeClasses = 'bg-green-600'
  // } else if (type === 'warning') {
  //   typeClasses = 'bg-yellow-600'
  // } else if (type === 'error') {
  //   typeClasses = 'bg-red-600'
  // }

  return (
    <div
      className={`${typeClasses} ${
        visible ? 'fixed' : 'hidden'
      } py-1 px-2 rounded-lg shadow-lg text-center font-bold text-sm min-w-[100px] dark:bg-[#141414] z-[100] dark:text-white border-2 bg-white border-black text-black dark:border-white top-2 right-2 cursor-pointer`}
      onClick={handleNotificationClick}
    >
      {message}
    </div>
  )
}
