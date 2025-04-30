import { setPageTitle } from '@/features/common/headerSlice'
import ShipmentStatus from '@/features/welcome/components/ShipmentsStatus'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const SpecificShipment = ({shipmentId}:{shipmentId:number}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Shipment"}))
      }, [])
      
  return (
    <div>
     <ShipmentStatus shipmentId={shipmentId}/>
    </div>
  )
}

export default SpecificShipment
