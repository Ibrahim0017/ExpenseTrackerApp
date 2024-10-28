import React from 'react'
import imageA from '../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg'

const EmployeeDetail = () => {

    const data = [
        {image: imageA}
    ]


  return (
    <div>
        <div>
        <div className='w-full h-[150px] bg-red-100'></div>
        <div className=''>
            <div><img src={imageA} className='size-[150px] border rounded-full mt-[-60px]' /></div>
            <div>
                <p className='text-[25px] font-semibold'>Nnorom Uchechi</p>
                <p className='text-[15px] '>uccy@gmail.com</p>
                <p className='text-[17px] font-medium'>Ikorodu Branch</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EmployeeDetail