"use client";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Input/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import axios from "axios";
import { baseUrl } from "@/utils/app_data";
// import { deleteLead, getLeadsContent } from "./userSlice"
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../utils/globalConstantUtil";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { showNotification } from "../common/headerSlice";
import { DriverType } from "@/types/System";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewDriverModal = () => {
    dispatch(
      openModal({
        title: "Add New Driver",
        bodyType: MODAL_BODY_TYPES.DRIVER_ADD_NEW,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 py-2 btn-sm normal-case bg-teal-500 text-white  "
        onClick={() => openAddNewDriverModal()}
      >
        Add New
      </button>
    </div>
  );
};

const Users = () => {
  const current_companyId = localStorage.getItem('current-company-id')
  const [drivers, setDrivers] = useState<DriverType[]>([])
  // const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();
  
  const getDrivers = async () => {
    
   const response = await axios.get(`${baseUrl}users/all?role=driver&companyId=${current_companyId}`,{
     headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
     }
   })

   setDrivers(response.data)
  }

  useEffect(() => {
    getDrivers()
    // dispatch(getLeadsContent())
  }, []);

  const getDummyStatus = (index:number) => {
    if (index % 5 === 0) return <div className="badge">Not Interested</div>;
    else if (index % 5 === 1)
      return <div className="badge badge-primary">In Progress</div>;
    else if (index % 5 === 2)
      return <div className="badge badge-secondary">Sold</div>;
    else if (index % 5 === 3)
      return <div className="badge badge-accent">Need Followup</div>;
    else return <div className="badge badge-ghost">Open</div>;
  };


  const deleteCurrentDriver = (index:number) => {
    dispatch(
      openModal({
        title: "Confirmation",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: `Are you sure you want to delete this driver?`,
          type: CONFIRMATION_MODAL_CLOSE_TYPES.DRIVER_DELETE,
          index,
        },
      })
    );
  };

  return (
    <>
      <TitleCard
        title="Current Drivers"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Leads List in table format loaded from slice after api call */}
      {drivers.length > 0 ? (
         <div className="overflow-x-auto w-full">
         <table className="table w-full">
           <thead>
             <tr>
               <th>Driver Name</th>
               <th>Driver Email </th>
               <th>Vehicle ID</th>
               <th>Actions</th>
             </tr>
           </thead>
          
           {
             drivers && (
               <tbody>
               {drivers.map((l, k) => {
                 return (
                   <tr key={k}>
                     <td className="text-base-content">
                       {l.user.name} 
                     </td>
                     <td className="text-base-content">{l.user.email}</td>
                    
                     <td className="text-base-content">{l.vehicleId}</td>
                     <td>
                       <button
                         title="click me"
                         className="btn btn-square btn-ghost text-red-500  "
                         onClick={() => deleteCurrentDriver(l.user.id)}
                       >
                         <TrashIcon className="w-5" />
                       </button>
                     </td>
                   </tr>
                 );
               })}
                </tbody>
             )}
          
         </table>
       </div>
      ) : (
        <p className="text-base-content text-lg font-semibold" >No drivers available.</p>
      )} 
      </TitleCard>
    </>
  );
};

export default Users;
