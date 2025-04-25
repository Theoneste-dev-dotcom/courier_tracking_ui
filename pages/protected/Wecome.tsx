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
       
        let the_name = user.name.split(' ')[0]
       
        dispatch(setPageTitle({ title : ` Hey ${(the_name).charAt(0).toUpperCase()+(the_name).slice(1).toLowerCase()},`}))
      }, [])

    return(
        <WelcomePage />
    )
}

export default InternalPage
