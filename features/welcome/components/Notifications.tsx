import { useSocket } from "@/contexts/SocketContext";
import { useEffect } from "react";

export default function NotificationsComponent() {
  const { socket, isConnected } = useSocket();

  useEffect(() => {
    if (!socket) return;
    socket.on("new-notification", (data) => {
      console.log("Notification Received => ", data);
    });
    return () => {
      socket.off("new-notification");
      socket.off("connect");
    };
  }, []);

  return (
    <div><p className="text-orange-900">Socket Status: {isConnected ? 'Connected' : 'Disconnected'}</p></div>
  )
}

