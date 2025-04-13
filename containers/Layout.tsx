"use client";
import React from "react";
import PageContent from "./PageContent";
import LeftSidebar from "./LeftSidebar";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "./RightSidebar";
import { useEffect } from "react";
import { removeNotificationMessage } from "../features/common/headerSlice";
import { Suspense, lazy } from "react";
import SuspenseContent from "./SuspenseContent";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
import "react-notifications/lib/notifications.css";
import ModalLayout from "./ModalLayout";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { newNotificationMessage, newNotificationStatus } = useSelector(
    (state) => state.header
  );

  // useEffect(() => {
  //   if (newNotificationMessage !== "") {
  //     if (newNotificationStatus === 1)
  //       NotificationManager.success(newNotificationMessage, "Success");
  //     if (newNotificationStatus === 0)
  //       NotificationManager.error(newNotificationMessage, "Error");
  //     // dispatch(removeNotificationMessage());
  //   }
  // }, [newNotificationMessage]);

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer  lg:drawer-open flex flex-row gap-0">
        <input
          title="."
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <LeftSidebar />

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto bg-base-200 ">
            <div className="drawer-content flex flex-col">
              <Header />
              <main
                className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-basse-200"
              >
                <Suspense fallback={<SuspenseContent />}>
                  {children}
                </Suspense>
                <div className="h-16"></div>
              </main>
            </div>
          </main>
        </div>
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      <RightSidebar />

      {/** Notification layout container */}
      {/* <NotificationContainer /> */}

      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;
