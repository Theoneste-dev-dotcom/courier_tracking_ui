'use client'
import React from 'react'
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
import axios from 'axios';

const TopSideButtons = () => {
  const dispatch = useDispatch();
  return (
    <div></div>
  )
};


const Clients = () => {
  const current_companyId = localStorage.getItem('current-company-id')
  const [clients, setClients] = useState([])
  // const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();

  const getClients = async () => {
    const response = await axios.get(`http://localhost:3001/users/all?role=client&companyId=${current_companyId}`,{
      headers: {
       'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)
    // setClients(response.data)
  }
  useEffect(() => {
    getClients()
    // dispatch(getLeadsContent())
  }, []);

  return (
    <>
      <TitleCard
        title="Current Clients"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Leads List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Client Email </th>
                <th>Client Phone</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      {l.user.name}
                    </td>
                    <td>{l.user.email}</td>
                    <td></td>
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

export default Clients;

