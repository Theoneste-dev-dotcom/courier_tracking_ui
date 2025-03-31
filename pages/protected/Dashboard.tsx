'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Dashboard from '../../features/dashboard/index'

function InternalPage(){
    const dispatch = useDispatch()
    const user_local = localStorage.getItem('user')
    const user = JSON.parse(user_local ? user_local : "undefined")

    useEffect(() => {
        dispatch(setPageTitle({ title : `${(user.role).charAt(0).toUpperCase()+(user.role).slice(1).toLowerCase()} Dashboard`}))
      }, [])

    return(
        <Dashboard />
    )
}

export default InternalPage