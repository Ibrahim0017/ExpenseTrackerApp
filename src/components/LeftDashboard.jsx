import React from 'react'
import LogoDiv from './LogoDiv'
import Menudiv from './Menudiv'

const LeftDashboard = () => {
  return (
     <>
     <div className='w-[15%] fixed h-[100%] bg-slate-400 flex flex-col items-center'>
        <LogoDiv />
        <Menudiv />
     </div>
     </>
  )
}

export default LeftDashboard