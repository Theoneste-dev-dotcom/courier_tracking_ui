'use client'
import { setPageTitle } from '@/features/common/headerSlice'
import Leads from '@/features/leads'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Shipments from '@/features/shippings'
const InternalPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Shipments"}))
      }, [])


  return (
    <div>
      {/* <Leads/> */}
      <Shipments/>
    </div>
  )
}

export default InternalPage
