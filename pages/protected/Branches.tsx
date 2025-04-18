'use client'
import { setPageTitle } from '@/features/common/headerSlice'
import Branches from '@/features/leads'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Branches"}))
      }, [])


    return(
        <Branches />
    )
}

export default InternalPage
