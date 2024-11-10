import { useState, useEffect } from "react";
import { TbLetterX } from "react-icons/tb";
import {useSelector} from "react-redux";
import axios from 'axios';

const CreateEmployee = ({ handleButtonOpen }) => {


  const [employee, setEmployee] = useState(false)
  const [values, setValues] = useState()
  const [data, setData] = useState()
  const tokenHolder = useSelector((state) => state.user_reducer?.users);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) =>{
    const {name, value} = event.target
    setValues({...values, [name]:value})
}
console.log(values)


  const handleEmployeeSubmit = (e) =>{
    e.preventDefault()
    // handleButtonOpen()


    setTimeout( async() => {
    try{
      let createEmployee =  axios.post(
        'https://expense-tracker-ruug.onrender.com/api/organisation/employee/create',
        values,
        {headers: {
          Authorization: `Bearer ${tokenHolder}`
        }}, 
      )
      setIsLoading(true)
      
      console.log(createEmployee)
      setEmployee(createEmployee)
      // handleButtonOpen()

    }catch(errors){
      console.log(errors)
    }
  })
    
  }

  const getAllBranches = async() =>{

    try{
    const res = await axios.get('https://expense-tracker-ruug.onrender.com/api/branch', 
      {headers: {
        Authorization: `Bearer ${tokenHolder}`
      }},
    )
    console.log(res)
    setData(res.data.data)
  }
    catch(errors){
        console.log(errors)
    }
  }

  useEffect(() =>{
    getAllBranches()
  }, [])
 

  console.log(employee)
  return (
    <>
    <div className="fixed inset-0 h-screen tablet:py-2 z-50 max-md:px-6 bg-bgTrans flex items-center justify-center mobileTab:z-50 ">
    <div className="w-[60%] h-[350px]  max-md:overflow-y-scroll bg-white border flex flex-col items-center pt-6 tablet:w-[90%] tablet:h-[500px]">
        <div className="w-full flex justify-center pb-3 max-md:pb-0  border-b border-[#BBBEC8] ">
          <div className="w-[95%]  flex justify-between">
            <div className="text-[20px] font-semibold">Add New Employee</div>
            <p
              className="text-[25px] text-[#c4c1c1] cursor-pointer"
              onClick={handleButtonOpen}
            >
              <TbLetterX />
            </p>
          </div>
        </div>
        <form className="w-[95%]" onSubmit={handleEmployeeSubmit}>
          <div className="w-full flex justify-between gap-4 tablet:flex-col mt-3">
            <div className="w-full">
              <p>First Name</p>
              <div>
                <input
                  type="text"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                  onChange={handleChange}
                  name='firstName'
                />
              </div>
            </div>
            <div className="w-full">
              <p>Last Name</p>
              <div>
                <input
                  type="text"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                  onChange={handleChange}
                  name='lastName'
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between gap-4 tablet:flex-col tablet:mt-2">
            <div className="w-full">
              <p>E-mail</p>
              <div className="w-full">
                <input
                  type="email"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                  onChange={handleChange}
                  name="email"
                />
              </div>
            </div>
            <div className="w-full">
              <p>Branch</p>
              <div>
                
                  <select name='branchId' className= {`py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border  ` }onChange={handleChange}  >
                  <option selected disabled>~Selected~</option>
                  {data?.map((value, index) => (
                  <option key={index} value={value._id}>{value.name}</option>
                  
              
                ))}
                </select>
               
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button className="px-4 py-[10px] border-none bg-gray-800  text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white">
            {isLoading? "Loading.." : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateEmployee;
