import { setPageTitle } from '@/features/common/headerSlice'
import React, { useEffect } from 'react'

import Admins from '@/features/admins'
import { useDispatch } from 'react-redux'

const Admin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "Company Admins"}))
      }, [])
  return (
    <div>
     <Admins/>
    </div>
  )
}

export default Admin