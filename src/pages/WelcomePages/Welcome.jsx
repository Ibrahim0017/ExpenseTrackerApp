import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminside from './Adminside'
import EmployeeSide from './EmployeeSide'

const Welcome = () => {
  return (
    <Routes>
      <Route path = "/adminside" Element ={<Adminside />} />
      <Route path = "/employeeside" Element ={< EmployeeSide />} />
    </Routes>
  )
}

export default Welcome