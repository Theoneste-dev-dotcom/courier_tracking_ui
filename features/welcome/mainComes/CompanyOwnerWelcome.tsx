"use client";
import React, { useEffect, useState } from "react";

import RegisterCompany from "../components/RegisterCompany";
import DriverCard from "../components/cards/DriverCard";
import axios from "axios";
import { selectCompanyId } from "../welcomeSlice";
import { setCompanyId } from "../welcomeSlice";
import { useDispatch, useSelector } from "react-redux";
import DriversStatus from "../components/DriversStatus";
import AdminsStatus from "../components/AdminsStatus";
import AskedQuestions from "../components/AskedQuestions";
import OfficersStatus from "../components/OfficersStatus";
import ClientsStatus from "../components/ClientssStatus";
import NotificationsComponent from "../components/Notifications";
const CompanyOwnerWelcome = () => {
  const dispatch = useDispatch();
  const user_local = localStorage.getItem("user");
  const user = JSON.parse(user_local ? user_local : "undefined");

  const companyId = useSelector(selectCompanyId);

  // Example data (Replace with real API data)
  const drivers = { active: 12, inactive: 4 };
  const customers = 87;
  const officers = { active: 6, inactive: 2 };


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
  const getCompanyOwner = async () => {
    try {
      if (companyId) {
        const response = await axios.get(
          `http://localhost:3001/users/all?role=company_owner&companyId=${companyId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
    
      }
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getCurrentCompany();
    getCompanyOwner(), [];
  });

  if (!companyId) {
    return <RegisterCompany />; // render the  the create company page form
  }
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-info">Welcome,</h1>
      <p className="dark:text-gray-500 text-black">
        Here's an overview of your company's status:
      </p>

      {/* Notifcatiion status */}
      <div>
        <NotificationsComponent/>
      </div>

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
          <div className="">
            <h2 className=" text-info text-xl pt-6">
              Info about your System managers (Admins){" "}
            </h2>
            <AdminsStatus />
          </div>
        )}

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
      {/* <DriverCard
        title="Drivers Status"
        content="alerts of your current status to day"
        actions={["View All"]}
      /> */}
    </div>
  );
};

export default CompanyOwnerWelcome;
