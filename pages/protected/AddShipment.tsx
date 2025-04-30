'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '@/features/common/headerSlice'

const AddShipment = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
     dispatch(setPageTitle({ title : "New Shipment Records - Add"}))
    },[])


  return (
    <div>
      
    </div>
  )
}

export default AddShipment
