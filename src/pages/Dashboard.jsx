import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex justify-between ">
        <div className="sidebar w-96 h-screen bg-yellow-300">
            <h2 className='text-2xl'>Sidebar</h2>
        </div>
        <div className="DashboardContent p-6 w-full bg-gray-100">
            <div className="content">
                <h2 className='text-2xl'>Dashboard Content</h2>
            </div>
        </div>
    </div>
  )
}

export default Dashboard