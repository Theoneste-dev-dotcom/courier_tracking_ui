'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


export interface NotificationType  {
    id: number;
    type: string;
    message: string;
    seen: boolean;
    createdAt: string;
  };
// Create Notification Context
interface NotificationContextType {
  noOfNotifications: number;
  newNotificationMessage: string;
  newNotificationStatus: number;
  allNotifications: NotificationType[];
  loading: boolean;
  showNotification: ({ message, status }: { message: string; status: number }) => void;
  setNoOfNotifications: (count: number) => void;
  setAllNotifications: (notifications: NotificationType[]) => void;
  markAllNotificationsAsRead: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType>({
  noOfNotifications: 0,
  newNotificationMessage: '',
  newNotificationStatus: 0,
  allNotifications: [],
  loading: false,
  showNotification: ({message, status}:{message:string, status:number}) => {},
  setNoOfNotifications: () => {},
  setAllNotifications: () => {},
  markAllNotificationsAsRead: async () => {},
});

// Custom hook to consume the context
export const useNotification = () => useContext(NotificationContext);

// Notification Provider Component
export const NotificationProvider = ({ children }: {
    children: React.ReactNode
}) => {
  const [state, setState] = useState<{
    noOfNotifications: number;
    newNotificationMessage: string;
    newNotificationStatus: number;
    allNotifications:NotificationType[];
  }>({
    noOfNotifications: 0,
    newNotificationMessage: '',
    newNotificationStatus: 1,
    allNotifications: [],
  });
  const [loading, setLoading] = useState(false);
  const [companyId, setCompanyId] = useState<string| null>(null);
  const [token, setToken] = useState<string | null>('');

  // Load companyId and token from localStorage on client side
  useEffect(() => {
    const storedCompanyId = localStorage.getItem('current-company-id');
    const storedToken = localStorage.getItem('token');
    setCompanyId(storedCompanyId);
    setToken(storedToken);
  }, []);

  // Fetch notifications when companyId and token are available
  useEffect(() => {
    const fetchCompanyNotifications = async () => {
      if (!companyId || !token) return;

      try {
        setLoading(true);
        const notifResponse = await axios.get(
          `http://localhost:3001/notifications/user`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

       

        if (notifResponse.data) {
          setState((prev) => ({
            ...prev,
            allNotifications: notifResponse.data,
            noOfNotifications: notifResponse.data.filter((n:any) => !n.isRead).length,
          }));
          console.log("notification data are ",notifResponse.data)
        }
        console.log("no notf data")
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyNotifications();
  }, [companyId, token]);

  // Context functions (replacing Redux reducers)
  const showNotification = ({ message, status } :{ message:string, status:number}) => {
    setState((prev) => ({
      ...prev,
      newNotificationMessage: message,
      newNotificationStatus: status,
    }));
  };

  const setNoOfNotifications = (count:number) => {
    setState((prev) => ({
      ...prev,
      noOfNotifications: count,
    }));
  };

  const setAllNotifications = (notifications:NotificationType[]) => {
    setState((prev) => ({
      ...prev,
      allNotifications: notifications,
      noOfNotifications: notifications.filter((n) => !n.seen).length,
    }));
  };

  // Additional function to mark all notifications as read
  const markAllNotificationsAsRead = async () => {
    if (!companyId || !token) return;

    try {
      console.log("why not updating ")
      await axios.put(
        `http://localhost:3001/notifications/mark-all-read`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setState((prev) => ({
        ...prev,
        allNotifications: prev.allNotifications.map((n) => ({ ...n, seen: true })),
        noOfNotifications: 0,
      }));
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  // Context value
  const value = {
    ...state,
    loading,
    showNotification,
    setNoOfNotifications,
    setAllNotifications,
    markAllNotificationsAsRead,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};