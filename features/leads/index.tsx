"use client";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Input/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../utils/globalConstantUtil";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { showNotification } from "../common/headerSlice";
import axios from "axios";
import { selectCompanyId } from "../welcome/welcomeSlice";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewBranchModal = () => {
    dispatch(
      openModal({
        title: "Add New Branch",
        bodyType: MODAL_BODY_TYPES.BRANCH_ADD_NEW,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewBranchModal()}
      >
        Add New
      </button>
    </div>
  );
};

interface BRANCH_OBJ {
  name: "";
  location: "";
  email: "";
  manager_name: "";
  phone_number: "";
  companyId: "";
}
function Branches() {
  // const { leads } = useSelector((state) => state.lead);
  const [branches, setBranches] = useState<BRANCH_OBJ[]>([]);
  const dispatch = useDispatch();

  const current_companyId = localStorage.getItem("current-company-id");
  
  const getBranches = async () => {
    const res = await axios.get(
      `http://localhost:3001/branches/company-branches/${current_companyId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (res) {
      // console.log(res.data);
      setBranches(res.data);
    } else {
      console.log("failed to fetch ");
    }
  };

  useEffect(() => {
    getBranches();
    // dispatch(getLeadsContent())
  }, []);

  const getDummyStatus = (index: any) => {
    if (index % 5 === 0) return <div className="badge">Not Interested</div>;
    else if (index % 5 === 1)
      return <div className="badge badge-primary">In Progress</div>;
    else if (index % 5 === 2)
      return <div className="badge badge-secondary">Sold</div>;
    else if (index % 5 === 3)
      return <div className="badge badge-accent">Need Followup</div>;
    else return <div className="badge badge-ghost">Open</div>;
  };

  const deleteCurrentLead = (index: any) => {
    dispatch(
      openModal({
        title: "Confirmation",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: `Are you sure you want to delete this branch?`,
          type: CONFIRMATION_MODAL_CLOSE_TYPES.BRANCH_DELETE,
          index,
        },
      })
    );
  };

  return (
    <>
      <TitleCard
        title="Current Branch Records"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Leads List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Branch Name</th>
                <th>Branch Email</th>
                <th>Branch Location</th>
                <th>Branch Manager Name</th>
                <th>Branch Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((l, k) => {
                return (
                  <tr key={k} className="text-base-content">
                    <td>
                      <div className="font-bold ">{l.name}</div>
                    </td>
                    <td className="text-base-content">{l.email}</td>

                    <td className="text-base-content">{l.location}</td>
                    <td className="text-base-content">{l.manager_name}</td>
                    <td className="text-base-content">{l.phone_number}</td>
                    <td>
                      <button
                        title="click me"
                        className="btn btn-square btn-ghost text-red-500"
                        onClick={() => deleteCurrentLead(k)}
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
}

export default Branches;
