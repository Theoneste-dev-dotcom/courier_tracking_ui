import React, { useEffect, useState } from 'react'
import theo from '@/public/assets/images/theo.png'
import john from '@/public/assets/images/john.png'
import peter from '@/public/assets/images/peter.png'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'



const shipments_data = [
    {
        name: "Potatoes",
        shipment: "HB577 CAR PLATE",
        currentStatus: "Previously Scanned at Mahoko Branch"
    },
    {
        name: "Potatoes",
        shipment: "HB577 CAR PLATE",
        currentStatus: "Previously Scanned at Mahoko Branch"
    },
    {
        name: "Potatoes",
        shipment: "HB577 CAR PLATE",
        currentStatus: "Previously Scanned at Mahoko Branch"
    },
    {
        name: "Potatoes",
        shipment: "HB577 CAR PLATE",
        currentStatus: "Previously Scanned at Mahoko Branch"
    }
]

const ShipmentsStatus = () => {
    const user_local = localStorage.getItem("user");
    const {id}= JSON.parse(user_local ? user_local : "undefined");

    const companyId = localStorage.getItem('current-company-id')
    //current shipments of today
    const [shipments, setShipments] = useState([])

    // fetch shipment for a company
    const fetchShipmentForCompany = async () => {
        const response = await axios.get(`http://localhost:3001/shipments/company/${companyId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(response) {
            console.log(response.data);
            // setShipments(response.data)
        } 
    }

    const fetchClientShipment = async () => {
        const response = await axios.get(`http://localhost:3001/shipments/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(response) {
            console.log(response.data)
            //setshipments(response.data)
        }
    }

    
    useEffect(()=>{
        if(companyId) {
            fetchShipmentForCompany()
        }
        fetchClientShipment();
     }, [])
    
    
    //fetch shipment for a client


  return (
    <div className='relative'>
      
       {
        shipments_data.map((shipment, key)=> (
          <div key={key} className='flex gap-4 items-center bg-base-100  rounded-lg m-3 justify-start '>
              {/* <div>
                <Image className='default w-12 h-12 object-fit-cover rounded-full' title='peter' src={shipment.image} alt={`${shipment.name }'s image`}  />
              </div> */}
              <h2 className='text-base-content'>{shipment.name}</h2>
              <p className='text-base-content'>{shipment.currentStatus}</p>
          </div>

        ))
       }
       <div>
        <Link href={'/'} className='text-teal-300 absolute right-6'>View All</Link>
       </div>
    </div>
  )
}

export default ShipmentsStatus
