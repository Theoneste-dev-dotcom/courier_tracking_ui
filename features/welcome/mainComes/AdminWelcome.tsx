import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { FaUserTie, FaUsers, FaTruck } from "react-icons/fa";
import DriverCard from "../components/cards/DriverCard";
import CardHeader from "../components/cards/CardHeader";
import CardTitle from "../components/cards/CardTitle";
import CardContent from "../components/cards/CardContent";
import { useGetUserCompanyQuery } from "../welcomeSlice";
import RegisterCompany from "../components/RegisterCompany";
const AdminWelcome = () => {
  const user_local = localStorage.getItem('user')
  const user = JSON.parse(user_local ? user_local :"undefined")

  // Example data (Replace with real API data)
  const drivers = { active: 12, inactive: 4 };
  const customers = 87;
  const officers = { active: 6, inactive: 2 };
  let company;
  let response;


   const {data,isError, error}  =  useGetUserCompanyQuery({ email:user.email });


   if(isError) {
    console.log(error.data)

   }


if(!data) { return (<RegisterCompany/>) // render the  the create company page form
}
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome,</h1>
      <p className="text-gray-500">Here's an overview of your company's status:</p>
      
        <DriverCard title="Drivers Status" content="alerts of your current status to day" actions={['View All']}/>
     
    </div>
  );
};

export default AdminWelcome;
