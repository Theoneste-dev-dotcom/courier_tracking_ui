"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { themeChange } from "theme-change";
import { openRightDrawer } from "../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "@/utils/globalConstantUtil";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'

import Image from "next/image";
import Link from "next/link";
import profile from "@/public/profile.png";

const Header = () => {
  const dispatch = useDispatch();
  const { noOfNotifications, pageTitle } = useSelector((state) => state.header);
  const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    themeChange(false); // Required for theme switching
    if (!currentTheme) {
      setCurrentTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const openNotification = () => {
    dispatch(openRightDrawer({ header: "Notifications", bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }));
  };

  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar sticky top-0 bg-base-100 shadow-md z-10 flex-1  justify-start items-start  h-[20%] pt-4">
      {/* Left Section - Sidebar Toggle & Page Title */}
      <div className="flex-1 flex items-center">
        <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
          <Bars3Icon className="h-5 w-5" />
        </label>
        <h1 className="text-2xl font-semibold ml-3 text-base-content">{pageTitle}</h1>
      </div>

      {/* Right Section - Theme Toggle, Notifications, Profile */}
      <div className="flex items-center gap-x-4">
        {/* swap theme */}
      <label className="swap ">
        
                <input type="checkbox"/>
                <SunIcon  data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 text-base-content "+(currentTheme === "dark" ? "swap-on" : "swap-off")}/>
                <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 text-base-content "+(currentTheme === "light" ? "swap-on" : "swap-off")} />
            </label>


        {/* Notification Icon */}
        <button className="btn btn-ghost btn-circle relative" onClick={openNotification}>
          <BellIcon className="h-6 w-6 text-base-content" />
          {noOfNotifications > 0 && (
            <span className="absolute top-0 right-0 badge badge-secondary text-xs text-base-content">
              {noOfNotifications}
            </span>
          )}
        </button>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={profile} width={40} height={40} className="w-10 h-10 rounded-full" alt="profile" />
            </div>
          </label>
          <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/app/settings-profile">Profile Settings</Link>
            </li>
            <li>
              <Link href="/app/settings-billing">Bill History</Link>
            </li>
            <div className="divider my-1"></div>
            <li>
              <button onClick={logoutUser} className="text-red-500">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
