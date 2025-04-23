import axios from 'axios';
import React from 'react'
import { setCompanyId } from '../welcomeSlice';

const CurrentCompany = () => {
    const user_local = localStorage.getItem("user");
    const { id } = JSON.parse(user_local ? user_local : "undefined");

    

    // fetch all companies related to the current user or clients
    const getCurrentCompany = async () => {
        const respo = await axios.get(
          "http://localhost:3001/users/user-company/company",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
    
        console.log("current company response => ", respo.data);
        localStorage.setItem('current-company-id', respo.data.id)
        dispatch(
          setCompanyId({ companyId: respo.data.id, companyName: respo.data.name })
        );
      };

      // fetching the transactions of the clients with his company
      const fetchTransaction = async() =>  {
        const resp = axios.get(`http://localhost:3001/`)
      }
      
  return (
    <div>
      <h2>Workings with your Recent Companies</h2>
      {/* displaying his recent companies of this week */}

    </div>
  )
}

export default CurrentCompany
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}

