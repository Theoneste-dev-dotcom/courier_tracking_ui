import { useNotification } from "@/contexts/NotificationContext";
import { useSocket } from "@/contexts/SocketContext";
import { useEffect } from "react";
import {toast} from 'react-toastify';

export default function NotificationsComponent() {
  const {showNotification} = useNotification();
  const { socket, isConnected } = useSocket();
  const {newNotificationMessage, newNotificationStatus} = useNotification();

  


  useEffect(() => {

    if(newNotificationMessage != "" && newNotificationStatus == 1){
      toast.info(newNotificationMessage);
    }

    if (!socket) return;
    socket.on("new-notification", (data) => {
      toast.info(`New Notification \n  ${data.message }`, { autoClose: 3000 });
      showNotification({message:data.message, status:1});
    });
    return () => {
      socket.off("new-notification");
      socket.off("connect");
    };
  }, [socket]);

  return (
    <div><p className="text-orange-900">Socket Status: {isConnected ? 'Connected' : 'Disconnected'}</p></div>
  )
}

