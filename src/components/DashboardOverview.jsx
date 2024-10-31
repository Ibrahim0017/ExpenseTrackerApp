import React from 'react'
import EspenseTrack from './EspenseTrack'
import Cartegory from './Cartegory'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeePage from '../pages/EmployeePages/EmployeePage'
import BranchPage from '../pages/EmployeePages/BranchPage'
import BranchDetail from '../pages/EmployeePages/BranchDetail'

const DashboardOverview = () => {
  return (
    <>
    <div className='p-5  bg-[#f9f9f9]  gap-4 justify-between'> 
    <BrowserRouter>
    <Routes>
        <Route path='/expenseTrack' element={<EspenseTrack/>} />
        <Route path='/employee' element={<EmployeePage/>} />
        <Route path="/branchpage" element={<BranchPage />} />
        <Route path="/branchdetail" element={<BranchDetail />} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default DashboardOverview

{/* <div className='p-5 h-[90%] bg-[#f9f9f9] flex gap-4 justify-between'>
<EspenseTrack />
<Cartegory />
</div> */}