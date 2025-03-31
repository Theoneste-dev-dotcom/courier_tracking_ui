'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Dashboard from '../../features/dashboard/index'
import { loadUserFromStorage } from '@/features/user/authSlice'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        const respo = dispatch(loadUserFromStorage())
        if(respo) {
            console.log(respo)
        }else {
            console.log(respo)
            console.log("we don't have any user")
        }
      }, [dispatch]);
    useEffect(() => {
        dispatch(setPageTitle({ title : "Dashboard"}))
      }, [])


    return(
        <Dashboard />
    )
}

export default InternalPage