"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SidebarSubmenu from "./SidebarSubmenu";
import { admin_routes, client_routes, officer_routes, company_owner_routes, driver_routes } from "../routes/sidebar";
import Image from 'next/image'
import { Role } from "@/utils/roles";

const LeftSidebar = () => {
  const user_local = localStorage.getItem('user')
  const {role} = JSON.parse(user_local ? user_local : 'undefined')
  const [routes, setRoutes] = useState<any[]>([])
  const pathname = usePathname();
  const sidebarRef = useRef(null);


 
  useEffect(()=> {
    switch (role) {
      case 'admin':
        setRoutes(admin_routes);
        break;
      case 'client':
        setRoutes(client_routes);
        break;
      case 'officer':
        setRoutes(officer_routes);
        break;
      case 'company_owner':
        setRoutes(company_owner_routes);
        break;
      case 'driver':
        setRoutes(driver_routes);
        break;
    }
  }, [])

  // Close Sidebar (for mobile screens)
  const closeSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.checked = false;
    }
  };

  return (
    <div className="drawer-side z-30">
      {/* Overlay (for closing on mobile) */}
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>

      {/* Sidebar */}
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content shadow-lg">
        {/* Close Button (Mobile) */}
        <button
          type="button"
          title="Close Sidebar"
          className="btn btn-ghost bg-base-300 btn-circle absolute top-4 right-4 z-50 lg:hidden"
          onClick={closeSidebar}
        >
          <XMarkIcon className="h-5 inline-block  w-5" />
        </button>

        {/* Logo Section */}
        <li className="mb-2 text-lg font-semibold">
          <Link href="/app/welcome" className="flex items-center ">
            <Image className="mask mask-squircle w-10" src="/logo192.png" width={20} height={20} alt="DashWind Logo" />
            <span className="lg:block">DashWind</span>
          </Link>
        </li>

        {/* Menu Items */}
        {routes.map((route, index) => (
          <li key={index} className="w-full">
            {route.submenu ? (
              <SidebarSubmenu {...route} />
            ) : (
              <Link
                href={route.path}
                className={` ${
                  pathname === route.path
                    ? "bg-base-200 font-semibold"
                    : "font-normal"
                }`}
              >
               <div className="flex gap-2 items-center justify-center"> {route.icon} {route.name}</div>
                {pathname === route.path && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary"
                    aria-hidden="true"
                  ></span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
