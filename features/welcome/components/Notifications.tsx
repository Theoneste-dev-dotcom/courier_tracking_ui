import { useNotification } from "@/contexts/NotificationContext";
import { useSocket } from "@/contexts/SocketContext";
import { useEffect } from "react";
import {toast} from 'react-toastify';

export default function NotificationsComponent() {
  const {showNotification} = useNotification();
  const { socket, isConnected } = useSocket();
  const {newNotificationMessage, newNotificationStatus, setNoOfNotifications, noOfNotifications} = useNotification();

  


  useEffect(() => {

    if (!socket) return;
    socket.on("new-notification", (data) => {
      toast.info(`New Notification \n  ${data.message }`, { autoClose: 7000 });
      setNoOfNotifications(noOfNotifications + 1);
      // showNotification({message:data.message, status:1});
    });
    return () => {
      socket.off("new-notification");
      socket.off("connect");
    };
  }, [socket, noOfNotifications]);

  return (
    <div><p className="text-orange-900">Socket Status: {isConnected ? 'Connected' : 'Disconnected'}</p></div>
  )
}

