import React from 'react'
import DashboardStats from '../components/DashboardStats'
import DashboardTopBar from '../components/DashboardTopBar'

const ClientComp = ({updateDashboardPeriod, statsData}) => {
  return (
    <div>
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
    </div>
  )
}

export default ClientComp
