"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import NotificationContainer from "../ui/dashboard/notification-container";

type NotificationType = "success" | "error" | "inform" | "warn";
interface Notification {
  message: string;
  type: NotificationType;
}

interface NotificationContextType {
  notify: (message: string, type: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export function NotificationProvider ({
  children,
}:{ children: ReactNode }) {
  const [notification, setNotification] = useState<Notification | null>(null);

  const notify = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {notification && (
        <NotificationContainer
          message={notification.message}
          type={notification.type}
        />
      )}
    </NotificationContext.Provider>
  );
};

export function useNotification () {
  const notification = useContext(NotificationContext);
  if (notification===undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return notification;
};

