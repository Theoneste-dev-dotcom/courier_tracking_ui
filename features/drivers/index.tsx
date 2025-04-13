"use client";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Input/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
// import { deleteLead, getLeadsContent } from "./userSlice"
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../utils/globalConstantUtil";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { showNotification } from "../common/headerSlice";

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
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewDriverModal()}
      >
        Add New
      </button>
    </div>
  );
};

const Users = () => {
  const current_companyId = localStorage.getItem('current-company-id')
  const [drivers, setDrivers] = useState([])
  // const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();

  const getDrivers = async () => {

  }

  useEffect(() => {
    getDrivers()
    // dispatch(getLeadsContent())
  }, []);

  const getDummyStatus = (index) => {
    if (index % 5 === 0) return <div className="badge">Not Interested</div>;
    else if (index % 5 === 1)
      return <div className="badge badge-primary">In Progress</div>;
    else if (index % 5 === 2)
      return <div className="badge badge-secondary">Sold</div>;
    else if (index % 5 === 3)
      return <div className="badge badge-accent">Need Followup</div>;
    else return <div className="badge badge-ghost">Open</div>;
  };


  const deleteCurrentDriver = (index) => {
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
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Driver Name</th>
                <th>Driver Email </th>
                <th>Created At</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Vehicle ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      {l.name}
                    </td>
                    <td>{l.email}</td>
                    <td>
                      {moment(new Date())
                        .add(-5 * (k + 2), "days")
                        .format("DD MMM YY")}
                    </td>
                    <td>{getDummyStatus(k)}</td>
                    <td>{l.vehicle_id}</td>
                    <td>
                      <button
                        title="click me"
                        className="btn btn-square btn-ghost"
                        onClick={() => deleteCurrentDriver(k)}
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

export default Users;
