import React from 'react'
import EspenseTrack from './EspenseTrack'
import Cartegory from './Cartegory'

const DashboardOverview = () => {
  return (
    <>
    <div className='p-5 h-[90%] bg-[#f9f9f9]  gap-4 justify-between'> 
       <div className='p-5 h-[90%] bg-[#f9f9f9] flex gap-4 justify-between'>
       <EspenseTrack />
       <Cartegory />
       </div>
    </div>
    </>
  )
}

export default DashboardOverview