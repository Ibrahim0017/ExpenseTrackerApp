import React from 'react'

const File = () => {
  return (
    <div className='w-full h-full'>
        <form action="">
            <div>Welcome Back!</div>
            <div>Welcome back, please fill in your details</div>
            <div>
                <label id="name">Full Name</label>
                <input type="text" placeholder='Enter name' className='px-20 py-4 border rounded-md' />
            </div>
        </form>
    </div>
  )
}

export default File