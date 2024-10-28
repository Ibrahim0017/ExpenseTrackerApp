import React from 'react'
import logo from '../assets/react.svg'

const LogoDiv = () => {
  return (
    <div className='w-full h-16 bg-gray-900 border-grey border flex justify-center items-center '>
        <div className='' >
            <img src={logo}/>
        </div>
    </div>
  )
}

export default LogoDiv