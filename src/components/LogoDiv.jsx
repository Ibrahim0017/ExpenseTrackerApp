import React from 'react'
import logo from '../assets/Logo2.svg'

const LogoDiv = () => {
  return (
    <div className='w-full h-[10%] bg-gray-900 border-grey border flex justify-center items-center '>

        <div className='w-[100px] h-[25px] ' >
            <img className='w-full h-[100%]' src={logo}/>
        </div>
    </div>
  )
}

export default LogoDiv