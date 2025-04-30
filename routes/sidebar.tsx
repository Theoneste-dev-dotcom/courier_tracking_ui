/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import { HiArrowRightOnRectangle } from "react-icons/hi2";


type IconComponentProps = React.SVGAttributes<SVGElement> & {
  className?: string;
};

const applyIconClass = (IconComponent:React.ComponentType<IconComponentProps>, isSubmenu = false) => {
  const classes = isSubmenu ? " h-4 w-4" : "h-6 w-6 "; // Adjust sizes as needed
  return <IconComponent className={classes} />;
};



export const company_owner_routes = [
  {
    path: "/dashboard",
    icon: applyIconClass(Squares2X2Icon),
    name: "OverView",
  },
  {
    path: "/welcome",
    icon: applyIconClass(Squares2X2Icon),
    name: "Welcome",
  },

  {
    path: "/logs",
    icon: applyIconClass(CurrencyDollarIcon),
    name: "System Logs",
  },
  {
    path: "/charts",
    icon: applyIconClass(ChartBarIcon),
    name: "Analytic",
  },

  {
    path: "/calendar",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Calendar",
  },
  {
    path: "/clients",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Clients",
  },
  {
    path: "/shipments",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Shipments",
    submenu: [
      {
          path: "/shipments",
          icon: applyIconClass(TableCellsIcon),
          name: "All Shipments", 
      },
      {
          path: "/shipments/add_new",
          icon: applyIconClass(TableCellsIcon),
          name: "Add new  Shipments", 
      },
    ]
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Branches",
    submenu :[
        {
          path: "/branches",
          icon: applyIconClass(TableCellsIcon),
          name: "All Branches",
        },
    ],
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Drivers",
    submenu: [
       {
        path: "/drivers",
        icon: applyIconClass(TableCellsIcon),
        name: "All Users/Drivers",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Officers",
    submenu: [
       {
        path: "/officers",
        icon: applyIconClass(TableCellsIcon),
        name: "All Users/Officers",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "System Admin",
    submenu: [
       {
        path: "s",
        icon: applyIconClass(TableCellsIcon),
        name: "All Admin",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(DocumentDuplicateIcon),
    name: "Pages",
    submenu: [
      {
        path: "/login",
        icon: applyIconClass(HiArrowRightOnRectangle, true),
        name: "Login",
      },
      {
        path: "/register",
        icon: applyIconClass(UserIcon, true),
        name: "Register",
      },
      {
        path: "/forgot-password",
        icon: applyIconClass(KeyIcon, true),
        name: "Forgot Password",
      },
      {
        path: "/blank",
        icon: applyIconClass(DocumentIcon, true),
        name: "Blank Page",
      },
      {
        path: "/404",
        icon: applyIconClass(ExclamationTriangleIcon, true),
        name: "404",
      },
    ],
  },
  {
    path: "",
    icon: applyIconClass(Cog6ToothIcon),
    name: "Settings",
    submenu: [
      {
        path: "/settings-profile",
        icon: applyIconClass(UserIcon, true),
        name: "Profile",
      },
      {
        path: "/settings-billing",
        icon: applyIconClass(WalletIcon, true),
        name: "Billing",
      },
      {
        path: "/settings-team",
        icon: applyIconClass(UsersIcon, true),
        name: "Team Members",
      },
    ],
  },
];

export const client_routes =[
  {
    path: "/dashboard",
    icon: applyIconClass(Squares2X2Icon),
    name: "OverView",
  },

  {
    path: "/welcome",
    icon: applyIconClass(Squares2X2Icon),
    name: "Welcome",
  },

  {
    path: "/activities",
    icon: applyIconClass(CurrencyDollarIcon),
    name: "System Activities",
  },

  {
    path: "shipments",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Shipments",
    submenu: [
      {
          path: "shipments",
          icon: applyIconClass(TableCellsIcon),
          name: "All Shipments", 
      },
    ]
  },
  
  {
    path: "",
    icon: applyIconClass(DocumentDuplicateIcon),
    name: "Pages",
    submenu: [
      {
        path: "/login",
        icon: applyIconClass(HiArrowRightOnRectangle, true),
        name: "Login",
      },
      {
        path: "/register",
        icon: applyIconClass(UserIcon, true),
        name: "Register",
      },
      {
        path: "/forgot-password",
        icon: applyIconClass(KeyIcon, true),
        name: "Forgot Password",
      },
      {
        path: "/blank",
        icon: applyIconClass(DocumentIcon, true),
        name: "Blank Page",
      },
      {
        path: "/404",
        icon: applyIconClass(ExclamationTriangleIcon, true),
        name: "404",
      },
    ],
  },
  {
    path: "",
    icon: applyIconClass(Cog6ToothIcon),
    name: "Settings",
    submenu: [
      {
        path: "/settings-profile",
        icon: applyIconClass(UserIcon, true),
        name: "Profile",
      },
      {
        path: "/settings-billing",
        icon: applyIconClass(WalletIcon, true),
        name: "Billing",
      },
      {
        path: "/settings-team",
        icon: applyIconClass(UsersIcon, true),
        name: "Team Members",
      },
    ],
  },
];
export const officer_routes = [
  {
    path: "/dashboard",
    icon: applyIconClass(Squares2X2Icon),
    name: "OverView",
  },  

  {
    path: "/welcome",
    icon: applyIconClass(Squares2X2Icon),
    name: "Welcome",
  },
  {
    path: "/transactions",
    icon: applyIconClass(CurrencyDollarIcon),
    name: "Transactions",
  },

  {
    path: "/shipments",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Shipments",
    submenu: [
      {
          path: "/shipments",
          icon: applyIconClass(TableCellsIcon),
          name: "All Shipments", 
      },
      {
          path: "/shipments/add_new",
          icon: applyIconClass(TableCellsIcon),
          name: "Add new  Shipments", 
      },
    ]
  },
 
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Drivers",
    submenu: [
       {
        path: "/drivers",
        icon: applyIconClass(TableCellsIcon),
        name: "All Users/Drivers",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(DocumentDuplicateIcon),
    name: "Pages",
    submenu: [
      {
        path: "/login",
        icon: applyIconClass(HiArrowRightOnRectangle, true),
        name: "Login",
      },
      {
        path: "/register",
        icon: applyIconClass(UserIcon, true),
        name: "Register",
      },
      {
        path: "/forgot-password",
        icon: applyIconClass(KeyIcon, true),
        name: "Forgot Password",
      },
      {
        path: "/blank",
        icon: applyIconClass(DocumentIcon, true),
        name: "Blank Page",
      },
      {
        path: "/404",
        icon: applyIconClass(ExclamationTriangleIcon, true),
        name: "404",
      },
    ],
  },
  {
    path: "",
    icon: applyIconClass(Cog6ToothIcon),
    name: "Settings",
    submenu: [
      {
        path: "/settings-profile",
        icon: applyIconClass(UserIcon, true),
        name: "Profile",
      },
      {
        path: "/settings-billing",
        icon: applyIconClass(WalletIcon, true),
        name: "Billing",
      },
      {
        path: "/settings-team",
        icon: applyIconClass(UsersIcon, true),
        name: "Team Members",
      },
    ],
  },
];
export const admin_routes = [
  {
    path: "/dashboard",
    icon: applyIconClass(Squares2X2Icon),
    name: "OverView",
  },

  {
    path: "/welcome",
    icon: applyIconClass(Squares2X2Icon),
    name: "Welcome",
  },

  {
    path: "/transactions",
    icon: applyIconClass(CurrencyDollarIcon),
    name: "Transactions",
  },
  {
    path: "/charts",
    icon: applyIconClass(ChartBarIcon),
    name: "Analytic",
  },

  {
    path: "/calendar",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Calendar",
  },
  {
    path: "/shipments",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Shipments",
    submenu: [
      {
          path: "/shipments",
          icon: applyIconClass(TableCellsIcon),
          name: "All Shipments", 
      },
      {
          path: "/shipments/add_new",
          icon: applyIconClass(TableCellsIcon),
          name: "Add new  Shipments", 
      },
    ]
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Branches",
    submenu :[
        {
          path: "/branches",
          icon: applyIconClass(TableCellsIcon),
          name: "All Branches",
        },
        // {
        //   path: "/branches/add_new",
        //   icon: applyIconClass(TableCellsIcon),
        //   name: "Add New Branches",
        // },


    ],
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Drivers",
    submenu: [
       {
        path: "/drivers",
        icon: applyIconClass(TableCellsIcon),
        name: "All Users/Drivers",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Officers",
    submenu: [
       {
        path: "/officers",
        icon: applyIconClass(TableCellsIcon),
        name: "All Users/Officers",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Clients",
    submenu: [
       {
        path: "/clients",
        icon: applyIconClass(TableCellsIcon),
        name: "All Users/Clients",
       },

    ]
  },
  {
    path: "",
    icon: applyIconClass(DocumentDuplicateIcon),
    name: "Pages",
    submenu: [
      {
        path: "/login",
        icon: applyIconClass(HiArrowRightOnRectangle, true),
        name: "Login",
      },
      {
        path: "/register",
        icon: applyIconClass(UserIcon, true),
        name: "Register",
      },
      {
        path: "/forgot-password",
        icon: applyIconClass(KeyIcon, true),
        name: "Forgot Password",
      },
      {
        path: "/blank",
        icon: applyIconClass(DocumentIcon, true),
        name: "Blank Page",
      },
      {
        path: "/404",
        icon: applyIconClass(ExclamationTriangleIcon, true),
        name: "404",
      },
    ],
  },
  {
    path: "",
    icon: applyIconClass(Cog6ToothIcon),
    name: "Settings",
    submenu: [
      {
        path: "/settings-profile",
        icon: applyIconClass(UserIcon, true),
        name: "Profile",
      },
      {
        path: "/settings-billing",
        icon: applyIconClass(WalletIcon, true),
        name: "Billing",
      },
      {
        path: "/settings-team",
        icon: applyIconClass(UsersIcon, true),
        name: "Team Members",
      },
    ],
  },
];
export const driver_routes = [
  {
    path: "/dashboard",
    icon: applyIconClass(Squares2X2Icon),
    name: "OverView",
  },

  {
    path: "/welcome",
    icon: applyIconClass(Squares2X2Icon),
    name: "Welcome",
  },
  
  {
    path: "/shipments",
    icon: applyIconClass(CalendarDaysIcon),
    name: "Shipments",
    submenu: [
      {
          path: "/shipments",
          icon: applyIconClass(TableCellsIcon),
          name: "All Shipments", 
      },
    ]
  },
  
  {
    path: "",
    icon: applyIconClass(DocumentDuplicateIcon),
    name: "Pages",
    submenu: [
      {
        path: "/login",
        icon: applyIconClass(HiArrowRightOnRectangle, true),
        name: "Login",
      },
      {
        path: "/forgot-password",
        icon: applyIconClass(KeyIcon, true),
        name: "Forgot Password",
      },
      {
        path: "/blank",
        icon: applyIconClass(DocumentIcon, true),
        name: "Blank Page",
      },
      {
        path: "/404",
        icon: applyIconClass(ExclamationTriangleIcon, true),
        name: "404",
      },
    ],
  },
  {
    path: "",
    icon: applyIconClass(Cog6ToothIcon),
    name: "Settings",
    submenu: [
      {
        path: "/settings-profile",
        icon: applyIconClass(UserIcon, true),
        name: "Profile",
      },
      {
        path: "/settings-billing",
        icon: applyIconClass(WalletIcon, true),
        name: "Billing",
      },
      {
        path: "/settings-team",
        icon: applyIconClass(UsersIcon, true),
        name: "Team Members",
      },
    ],
  },
];

