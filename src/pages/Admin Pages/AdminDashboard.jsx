import React from 'react'
import LeftDashboard from '../../components/LeftDashboard'
import RightDashboard from '../../components/RightDashboard'

const AdminDashboard = () => {
  return (
    <>
    <div className='flex h-[100vh]'>
    <LeftDashboard />
    <RightDashboard />
    </div>
    </>
  )
}

export default AdminDashboard