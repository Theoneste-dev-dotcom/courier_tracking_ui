'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import SystemLogs from '../../features/transactions'
import { LogTabs } from '@/features/transactions/LogTabs'
import ClientDashboard from '@/features/transactions/ClientLogs'

function InternalPage(){
    const dispatch = useDispatch()
    const user_local = localStorage.getItem('user')
    const user = JSON.parse(user_local ? user_local : "undefined")





    useEffect(() => {
        dispatch(setPageTitle({ title : user.role == 'client' ? "My Activity" : "System Logs"}))
      }, [])


    return(
        user.role == 'client' ? <ClientDashboard /> : <LogTabs />
    )
}

export default InternalPage