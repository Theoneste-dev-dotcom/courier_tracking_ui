// import DashboardStats from "./components/DashboardStats";
// import AmountStats from "./components/AmountStats";
// import PageStats from "./components/PageStats";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
// import RecentShipments from "./components/RecentShipments";
// import LineChart from "./components/LineChart";
// import BarChart from "./components/BarChart";
// import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../common/headerSlice";
// import DoughnutChart from "./components/DoughnutChart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store";
// import AdminComp from "./main_components/AdminComp";
// import ClientComp from "./main_components/ClientComp";
// import OfficerComp from "./main_components/OfficerComp";
// import DriverComp from "./main_components/DriverComp";
import AdminWelcome from "./mainComes/AdminWelcome";
import CompanyOwnerWelcome from "./mainComes/CompanyOwnerWelcome";
const statsData = [
  {
    title: "New Users",
    value: "20",
    icon: <UserGroupIcon className="w-12 h-12" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Total Shipments",
    value: "545",
    icon: <CreditCardIcon className="w-12 h-12" />,
    description: "Current month",
  },
  {
    title: "Pending Shipments",
    value: "450",
    icon: <CircleStackIcon className="w-12 h-12" />,
    description: "50 in hot leads",
  },
  {
    title: "Active Users",
    value: "190",
    icon: <UsersIcon className="w-12 h-12" />,
    description: "↙ 300 (18%)",
  },
  {
    title: "Delivered Shipments",
    value: "300",
    icon: <UsersIcon className="w-12 h-12" />,
    description: "↙ 300 (18%)",
  },
  {
    title: "Canceled Shipments ",
    value: "200",
    icon: <UsersIcon className="w-12 h-12" />,
    description: "↙ 300 (18%)",
  },
  {
    title: "Drirvers/Vehicles",
    value: "520",
    icon: <UsersIcon className="w-12 h-12" />,
    description: "↙ 300 (18%)",
  },
];

function WelcomePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  let user_local = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const user = JSON.parse(user_local ? user_local : "undefined");

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };


  return (
    <main>
      {user.role == "admin" && (
        <AdminWelcome/>
      )}

      {user.role == "company_owner" && (
        <CompanyOwnerWelcome/>
      )}
      {/* {user.role == "client" && (
        <ClientComp
          updateDashboardPeriod={updateDashboardPeriod}
          statsData={statsData}
        />
      )}
      {user.role == "officer" && (
        <OfficerComp
          updateDashboardPeriod={updateDashboardPeriod}
          statsData={statsData}
        />
      )}
      {user.role == "driver" && (
        <DriverComp
          updateDashboardPeriod={updateDashboardPeriod}
          statsData={statsData}
        />
       )} */}
    </main>
  );
}

export default WelcomePage;
