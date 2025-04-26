'use client'
import React from "react";
import Layout from "@/containers/Layout";
import { SocketProvider } from "@/contexts/SocketContext";
import CheckAuth from "@/utils/CheckAuth";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Layout>
        <CheckAuth>
          <SocketProvider>{children}</SocketProvider>
        </CheckAuth>
      </Layout>
    </div>
  );
};

export default AppRootLayout;
