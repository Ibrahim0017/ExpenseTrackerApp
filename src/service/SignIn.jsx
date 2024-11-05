import React from 'react'
import SignInInput from './SignInInput'
import Slider from '../pages/Slider'

const SignIn = () => {
  return (
    <div className='w-full h-[100svh] flex flex-row-reverse'>
        <SignInInput/>
        <Slider className=' sm-hidden'/>
    </div>
  )

}

export default SignIn