'use client'
import { setPageTitle } from '@/features/common/headerSlice'
import Clients from '@/features/clients'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'


const InternalPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Clients"}))
      }, [])

  return (
    <div>
      <Clients/>
    </div>
  )
}

export default InternalPage
