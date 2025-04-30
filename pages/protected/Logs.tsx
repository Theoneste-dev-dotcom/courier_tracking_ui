'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import SystemLogs from '../../features/transactions'
import { LogTabs } from '@/features/transactions/LogTabs'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "System Logs"}))
      }, [])


    return(
        <LogTabs />
    )
}

export default InternalPage