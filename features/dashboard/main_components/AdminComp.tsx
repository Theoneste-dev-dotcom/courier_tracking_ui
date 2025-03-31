import React from 'react'
import DashboardTopBar from '../components/DashboardTopBar'
import DashboardStats from '../components/DashboardStats'
import RecentShipments from '../components/RecentShipments'

const AdminComp = ({updateDashboardPeriod, statsData}) => {
  return (
    <div>
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
    </div>
  )
}

export default AdminComp
