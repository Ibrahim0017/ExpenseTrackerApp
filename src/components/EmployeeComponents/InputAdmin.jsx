import React  from 'react'

const InputAdmin = ({type, placeholder, name, Title, icon, handleChange, error}) => {

  return (
    <>
    <div className='mt-1'>
        <label className=' w-full font-[calibri] font-medium text-[17px]'>{Title}</label>
          <div className='W-full'>
          <input className='pl-[15px] w-full py-[9px] focus:outline-[#BBBEC8] font-[calibri] rounded-md border border-[#BBBEC8] mt-1' type={type} placeholder={placeholder} name={name} onChange={handleChange} required />
        </div>
       
    </div>
     {error && <div className='text-red-500 text-[12px]'>{error} </div>}
     </>
  )
}

export default InputAdmin