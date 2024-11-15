import React from 'react'
import LogoDiv from '../../components/LogoDiv'
import EmployeesMenu from './EmployeesMenu'

const LeftEmployees = () => {
  return (
    <>
    <div className='w-[15%] fixed h-[100%] bg-slate-400 flex flex-col items-center mobileTab:hidden'>
       <LogoDiv />
      <EmployeesMenu/>
    </div>
    </>
  )
}

export default LeftEmployees