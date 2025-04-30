'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'
import AddShipment from '@/features/shippings/AddShipment'

const AddShipmentPage = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
     dispatch(setPageTitle({ title : "New Shipment Records - Add"}))
    },[])


  return (
    <div>
      <AddShipment/>
    </div>
  )
}

export default AddShipmentPage
