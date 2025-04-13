'use client'
import { setPageTitle } from '@/features/common/headerSlice'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

const InternalPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Drivers"}))
      }, [])

  return (
    <div>
      <Drivers/>
    </div>
  )
}

export default InternalPage
