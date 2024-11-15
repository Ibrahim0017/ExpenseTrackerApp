import { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import CreateBranch from '../../components/EmployeeComponents/CreateBranch';
import { Link } from 'react-router-dom';
import { IoIosGitBranch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import axios from 'axios';
import {useSelector} from "react-redux";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { useAdminProfileQuery } from "../../service/AdminProfile/AdminProfileRTK";

const BranchPage = () => {



    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState()
    const tokenHolder = useSelector((state) => state.user_reducer?.users);
    const [searchOpen, setSearchOpen] =useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBranches, setFilteredBranches] = useState([]);

    const { data: organisationData } = useAdminProfileQuery();

    const filteredData = data?.filter(
      (el) => el.organisation._id === organisationData._id
    );  

    
console.log(organisationData)
    const handleSearchOpen = () =>{
      setSearchOpen(!searchOpen)
    }

    const handleButtonOpen = () => {
      setIsOpen(!isOpen);
    };
    console.log(isOpen);

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

    useEffect(() => {
      if (data) {
         setFilteredBranches(filteredData);
      } 
    }, [data]);
  
    const handleSearch = (e) => {
      const searchValue = e.target.value.toLowerCase();
      setSearchTerm(searchValue);
  
      if (searchValue === "") {
        setFilteredBranches(filteredData);
      } else {
        const filteredData = filteredData?.filter((branch) => {
          return (
            branch.name.toLowerCase().includes(searchValue) ||
            branch.address.toLowerCase().includes(searchValue) 
          );
        });
        setFilteredBranches(filteredData);
      }
    };


console.log(filteredBranches)

  return (
    <>
    <div className='w-full flex justify-center'>
        <div className='w-[95%]'>
        <div className="w-full flex justify-between items-center py-5 ">
          <p className="text-reponsiveText2 font-semibold ">Branches </p>
          {searchOpen? 
             <div className="relative flex items-center mobileTab:flex pc:hidden md:hidden lg:hidden border-b border-[#BBBEC8] ">
             <button onClick={handleSearchOpen} className="text-[#BBBEC8] text-2xl"><MdKeyboardBackspace /></button>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="search branch"
            className=" pl-[10px] w-full py-2 bg-[#F9F9F9] focus:outline-none text-[14px] rounded-sm"
          />
         
      </div>
          :
               <div className="flex gap-5 items-center pc:flex md:flex lg:flex">
               <div className="relative flex items-center ">
                 <p className="absolute left-3 top-3 text-[#BBBEC8] mobile:cursor-pointer mobileTab:top-[-6px] mobileTab:left-[-10px] mobileTab:text-xl" >
                   <IoSearch className="mobileTab:hidden" />
                   <IoSearchOutline onClick={handleSearchOpen} className="pc:hidden md:hidden lg:hidden mobileTab:flex"/>
                 </p>
                 <input
                   type="text"
                   value={searchTerm}
                   onChange={handleSearch}
                   placeholder="search branch"
                   className=" px-[40px] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm mobileTab:hidden tablet:flex tablet:pr-[10px]"
                 />
           
             </div>
             <button
               onClick={handleButtonOpen}
               className="px-4 py-[10px] border-none bg-gray-800 text-reponsiveText tetx-white font-semibold font-[calibri] rounded-md text-white mobile:"
             >
             + Add Branch
             </button>
             </div>
 }
      </div>
      
      <div>
        <p>{filteredData?.length} Branch(es) Found</p>
        <div className='grid gap-3 grid-cols-cardGrid mt-4'>
          {filteredBranches?.map((props, index)=> (
               <div className=' w-full bg-white py-4 flex flex-col items-center shadow-md pt-3 rounded-md'  key={index} >
               <div className='w-[90%]' >
               <div className='flex justify-between items-center text-[20px]'>
                <Link to = {`/admin/branchdetail/${props._id}`} >
                <p className='flex gap-1 items-center'>
                  <p><IoIosGitBranch /></p>
                  {(props.name.at(0).toUpperCase()) + (props.name.slice(1))}</p> 
                  </Link>
                  <p className='cursor-pointer'><DotsComponent/> </p>
                  </div>
                <p className='mt-2 flex gap-1 items-center'> <p><IoLocationOutline /></p>{props.address.slice(0, 30)}...</p>
               </div>
               <div className='border-t w-full mt-2'></div>
               <div className='w-[90%] mt-2'>
               <div className='w-full flex justify-between mt-2'>
                <p className=' font-medium text-gray-800 text-[17px]'>No of Employees:  </p>
                <p className='font-medium'>{props?.employee?.length}</p>
                </div>
                <div className='flex justify-between mt-2'>
                <p className=' font-medium text-gray-800 text-[17px]'>No of Expense: </p>
                <p className=' font-medium'>{props  ?.expense?.length}</p>
                </div>
               </div> 
              </div>
              
          ))}
        </div>
      </div>
        </div>
    </div>

    <div className={`bg-bgTrans top-0 justify-center left-0 items-center ${isOpen ? "flex" : "hidden"} absolute h-[100vh] w-full`}>
      <CreateBranch handleButtonOpen={handleButtonOpen}/>
    </div>
    </>
  )
}

const DotsComponent = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }

  return(
    <>
    <div onClick={handleOpen} className='text-[20px]'>
    <HiOutlineDotsVertical /> 
    </div>
    {open && (
      <div className="bg-white absolute ml-[-130px] w-[140px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
      <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
        <div>
          <CiEdit />
        </div>
        <div>Suspend </div>
      </div>
      <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500" >
        <div>
          <RiDeleteBin6Line />
        </div>
        <div>Delete</div>
      </div>
    </div>
   )}
  </>
  )
}

export default BranchPage