import { ReactNode, createContext, useContext, useState } from "react"
import Notification from "@/components/Notification";

type NotificationType = "info" | "success" | "warning" | "error";

interface NotificationData {
  id: number;
  message: string;
  type: NotificationType;
  timeout?: number; // Optional timeout
}

interface NotificationContextType {
  showNotification: (message: string, type: NotificationType, timeout?: number) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
}

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  const showNotification = (message: string, type: NotificationType, timeout?: number) => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
      timeout,
    };

    setNotifications([...notifications, newNotification]);

    if (timeout) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, timeout);
    }
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ showNotification, removeNotification }}>
      {children}
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onDismiss={() => removeNotification(notification.id)}
        />
      ))}
    </NotificationContext.Provider>
  );
}