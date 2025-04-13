'use client'
import { setPageTitle } from '@/features/common/headerSlice'
import Officers from '@/features/officers'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const InternalPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Officers"}))
      }, [])

  return (
    <div>
      <Officers/>
    </div>
  )
}

export default InternalPage
