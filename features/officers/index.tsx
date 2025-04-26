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
import { OfficerType } from "@/types/System";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewOfficerModal = () => {
    dispatch(
      openModal({
        title: "Add New Officer",
        bodyType: MODAL_BODY_TYPES.OFFICER_ADD_NEW,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewOfficerModal()}
      >
        Add New
      </button>
    </div>
  );
};

const Officers = () => {
  const current_companyId = localStorage.getItem("current-company-id");
  const [officers, setOfficers] = useState<OfficerType[]>([]);
  // const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();

  const getOfficers = async () => {
    const response = await axios.get(
      `${baseUrl}users/all?role=officer&companyId=${current_companyId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  
    setOfficers(response.data);
  };

  useEffect(() => {
    getOfficers();
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

  const deleteCurrentOfficer = (index:number) => {
    dispatch(
      openModal({
        title: "Confirmation",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: `Are you sure you want to delete this officer?`,
          type: CONFIRMATION_MODAL_CLOSE_TYPES.DRIVER_DELETE,
          index,
        },
      })
    );
  };

  return (
    <>
      <TitleCard
        title="Current Officers"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Leads List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Officer Name</th>
                <th>Officer Email </th>
                <th>Officer Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {officers.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        {/* <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div> */}
                        {/* <div>
                          <div className="font-bold">{l.first_name}</div>
                          <div className="text-sm opacity-50">
                            {l.last_name}
                          </div>
                        </div> */}
                      </div>
                      <div className="text-base-content text-lg font-semibold">{l.user.name}</div>
                    </td>
                    <td className="text-base-content">{l.user.email}</td>
                    <td className="text-base-content">{l.user.phone}</td>
                    <td>
                      <button
                        title="click me"
                        className="btn btn-square btn-ghost text-red-500"
                        onClick={() => deleteCurrentOfficer(l.user.id)}
                      >
                        <TrashIcon className="w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
};

export default Officers;
