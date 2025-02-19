import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import RecentShipments from './components/RecentShipments'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'
import { useState } from 'react'

const statsData = [
    {title : "New Users", value : "20", icon : <UserGroupIcon className='w-12 h-12'/>, description : "↗︎ 2300 (22%)"},
    {title : "Total Shipments", value : "545", icon : <CreditCardIcon className='w-12 h-12'/>, description : "Current month"},
    {title : "Pending Shipments", value : "450", icon : <CircleStackIcon className='w-12 h-12'/>, description : "50 in hot leads"},
    {title : "Active Users", value : "190", icon : <UsersIcon className='w-12 h-12'/>, description : "↙ 300 (18%)"},
    {title : "Delivered Shipments", value : "300", icon : <UsersIcon className='w-12 h-12'/>, description : "↙ 300 (18%)"},
    {title : "Canceled Shipments ", value : "200", icon : <UsersIcon className='w-12 h-12'/>, description : "↙ 300 (18%)"},
    {title : "Drirvers/Vehicles", value : "520", icon : <UsersIcon className='w-12 h-12'/>, description : "↙ 300 (18%)"},
]



function Dashboard(){

    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>



        {/** ---------------------- Different charts ------------------------- */}
            {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div> */}
            
        {/** ---------------------- Different stats content 2 ------------------------- */}
        
            {/* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div> */}

        {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
                <RecentShipments />
                {/* <DoughnutChart /> */}
            </div>
        </>
    )
}

export default Dashboard