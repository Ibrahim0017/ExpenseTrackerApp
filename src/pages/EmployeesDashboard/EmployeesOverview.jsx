import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Admin Pages/Profile'

const EmployeesOverview = () => {
  return (
    <>
      <div className="p-5 mt-16 bg-[#f9f9f9] w-[85%] absolute right-0  gap-4 justify-between">
        <Routes>
          <Route path="/settings" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default EmployeesOverview