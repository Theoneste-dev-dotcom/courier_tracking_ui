import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaUserTie, FaUsers, FaTruck } from "react-icons/fa";
import DriverCard from "../components/cards/DriverCard";
import CardHeader from "../components/cards/CardHeader";
import CardTitle from "../components/cards/CardTitle";
import CardContent from "../components/cards/CardContent";

import RegisterCompany from "../components/RegisterCompany";
import { selectCompanyId, setCompanyId } from "../welcomeSlice";
import ClientsStatus from "../components/ClientssStatus";
import OfficersStatus from "../components/OfficersStatus";
import AskedQuestions from "../components/AskedQuestions";
import DriversStatus from "../components/DriversStatus";
import axios from "axios";
const OfficerWelcome = () => {
  const dispatch = useDispatch();
  const user_local = localStorage.getItem('user')
  const user = JSON.parse(user_local ? user_local :"undefined")

  // Example data (Replace with real API data)
 const companyId = useSelector(selectCompanyId)
 
 const getCurrentCompany = async () => {

  const respo = await axios.get(
    "http://localhost:3001/users/user-company/company",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  localStorage.setItem('current-company-id', respo.data.id)
  dispatch(
    setCompanyId({ companyId: respo.data.id, companyName: respo.data.name })
  );
  
};

useEffect(()=> {
  getCurrentCompany()
}, [])

if(!companyId) {
  return (
    <div className="text-base-content text-xl font-semibold">You are not a member of any company</div>
  )
}
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome,</h1>
      <p className="text-gray-500">Here's an overview of company's status in ur company:</p>
      
        {/* <DriverCard title="Drivers Status" content="alerts of your current status to day" actions={['View All']}/> */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-center gap-6">
        <div className="">
          <h3 className="text-info text-xl font-light">
            Notifications About the recent drivers.
          </h3>

          <div className="">
            <DriversStatus />
          </div>
        </div>

        <div className="">
          <h3 className="text-info text-xl font-light pt-6">
            Notifications About recent Clients.
          </h3>

          <div>
            <ClientsStatus />
          </div>
        </div>

        {user.role == "company_owner" && (
          <div>
            <h2 className=" text-info text-xl pt-6">
              Info about your System officers (Admin){" "}
            </h2>
            <OfficersStatus />
          </div>
        )}

        <div className="">
          <h2 className=" text-info text-xl pt-6">
            {" "}
            Get The asked Questions in company service Quality{" "}
          </h2>

          <div>
            <AskedQuestions />
          </div>
        </div>
      </div>

    </div>
  );
};

export default OfficerWelcome;
