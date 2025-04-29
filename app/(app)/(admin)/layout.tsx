"use client";
import React from "react";
import Layout from "@/containers/Layout";
import { SocketProvider } from "@/contexts/SocketContext";
import CheckAuth from "@/utils/CheckAuth";
import CheckCompany from "@/features/welcome/mainComes/CheckCompany";
import { NotificationProvider } from "@/contexts/NotificationContext";
const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CheckAuth>
        <CheckCompany>
         <NotificationProvider>
         <Layout>
           <SocketProvider>{children}</SocketProvider>
          </Layout>
         </NotificationProvider>
        </CheckCompany>
      </CheckAuth>
    </div>
  );
};

export default AppRootLayout;
