import axios from 'axios';
import  { useState, useEffect } from 'react'
import { TbLetterX } from "react-icons/tb";
import {useSelector} from "react-redux";

const CreateBranch = ({handleButtonOpen}) => {

  const [branch, setBranch] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState()
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const handleChange = (event) =>{
    const {name, value} = event.target
    setValues({...values, [name]:value})
}
console.log(values)

  const handleBranchSubmit = (e) =>{
    e.preventDefault()
    setIsLoading(true);
    // setBranch(true);


    setTimeout( async() => {
    try{
      let createBranch =  axios.post(
        'https://expense-tracker-ruug.onrender.com/api/branch/create ',
        values,
        {headers: {
          Authorization: `Bearer ${tokenHolder}`
        }},
      )
      
      console.log(createBranch)
      setBranch(createBranch)
      setIsLoading(false)
      handleButtonOpen()


    }catch(errors){
      console.log(errors)
      setIsLoading(false)
    }
  })
    
  }

  console.log(branch)


  



  return (
    <div className="fixed inset-0 h-screen tablet:py-2 z-50 bg-bgTrans flex items-center justify-center max-md:z-50 ">
      <div className='w-[50%]  flex justify-center flex-col items-center py-2 bg-white h-[300px] tablet:w-[80%] tablet:h-[400px]'>
        <div className='w-full flex justify-center pb-3 border-b border-[#BBBEC8] '>
            <div className="w-[95%]  flex justify-between">
            <div className="text-[20px] font-semibold">Add New Branch</div>
            <p
              className="text-[25px] text-[#c4c1c1] cursor-pointer"
              onClick={handleButtonOpen}
            >
              <TbLetterX />
            </p>
            </div>
        </div>
        <form className='w-[95%]' onSubmit={handleBranchSubmit}>
            <div className='w-full flex justify-between gap-4 tablet:flex-col mt-3'>
                <div className='w-full'>
                    <p>Branch Name</p>
                    <div>
                        <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border'  name='name' onChange={handleChange}/>
                    </div>
                </div>
                <div className='w-full'>
                    <p>Branch Address</p>
                    <div>
                        <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' name='address' onChange={handleChange} />
                    </div>
                </div>
                <div className='w-full'>
                    <p>Phone</p>
                    <div>
                        <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' name='phone' onChange={handleChange} />
                    </div>
                </div>
            </div>
            <button 
            type="submit"
            disabled={isLoading}
            className="px-4 py-[10px] border-none bg-gray-800  text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white mt-4">
               {isLoading ? "Loading..." : "Create Branch"}
            </button>
        </form>
    </div>
    </div>
  )
}

export default CreateBranch