'use client'
import SpecificShipment from '@/pages/protected/SpecificShipment'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const shipmentId = 0;
  return (
    <div>
       <SpecificShipment shipmentId={shipmentId}/>
    </div>
  )
}

export default page
