'use client'
import { setPageTitle } from '@/features/common/headerSlice'
import WelcomePage from '@/features/welcome'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const InternalPage = () => {
    const dispatch = useDispatch()
    const user_local = localStorage.getItem('user')
    const user = JSON.parse(user_local ? user_local : "undefined")

    useEffect(() => {
        dispatch(setPageTitle({ title : ` Hey ${(user.name).charAt(0).toUpperCase()+(user.name).slice(1).toLowerCase()},`}))
      }, [])

    return(
        <WelcomePage />
    )
}

export default InternalPage
