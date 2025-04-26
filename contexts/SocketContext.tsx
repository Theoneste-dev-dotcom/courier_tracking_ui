'use client'
import { Socket, io } from "socket.io-client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface SocketContextProps {
  socket: Socket | null;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextProps>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token available for socket connection");
      return;
    }
  
    // Skip if already connected
    if (socketRef.current?.connected) {
      console.log("Socket already connected");
      return;
    }
    const socket = io("http://localhost:3001", {
      auth: { token },
      transports: ['websocket', 'polling'],
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      timeout: 20000,
    });
  
    socketRef.current = socket;
  
    // Connection events
    const onConnect = () => {
      setIsConnected(true);
      console.log("✅ Socket connected. ID:", socket.id);
    };
  
    const onDisconnect = (reason: Socket.DisconnectReason) => {
      setIsConnected(false);
      console.log("❌ Socket disconnected. Reason:", reason);
      
      // Specific handling for unauthorized disconnect
      if (reason === "io server disconnect") {
        console.warn("Server forcefully disconnected. Possible auth issues.");
        // Try reconnecting with fresh token
        setTimeout(() => {
          socket.auth = { token: localStorage.getItem("token") };
          socket.connect();
        }, 2000);
      }
    };
  
    // Error events
    const onConnectError = (err: Error) => {
      console.error("Connection error:", err.message);
      if (err.message.includes("auth") || err.message.includes("jwt")) {
        console.error("Authentication error detected");
        // Handle token refresh or logout here
      }
    };
  
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onConnectError);
  
    // Ping/Pong monitoring
    socket.on("ping", () => console.log("Ping received from server"));
    socket.on("pong", (latency) => console.log(`Pong sent (${latency}ms)`));
  
    // Cleanup
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onConnectError);
    };
  }, []);
  return (
    <SocketContext.Provider value={{ socket: socketRef.current, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};