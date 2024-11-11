import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmployeesDashboard from '../EmployeesDashboard/EmployeesDashboard'
import SignIn from '../../service/SignIn'
import File from "../../service/File";

const EmployeeSide = () => {
  return (
    <Routes>
        <Route path="/signUp" element={<File/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/employeesdash/*" element={<EmployeesDashboard />} />  
    </Routes>
  )
}

export default EmployeeSide