import { Link } from 'react-router-dom'
// import Adminside from './Adminside'
// import EmployeeSide from './EmployeeSide'
import imgLogo from "../../assets/Logo1.svg"

const Welcome = () => {
  return (
    <div className='w-[100%] justify-center flex items-center'>
      <div className='w-[70%] flex flex-col justify-center items-center h-[100vh]'>
      <div className='mt-[-40px]'><img src={imgLogo} className='size-[200px]'/></div>
    <div className='mt-[-30px] w-full flex flex-col items-center'>
    <h1 className='text-2xl'>Select Your Role</h1>
   <div className='flex gap-3 w-full mt-4 mobileTab:flex-col'>
   <Link to="/sign-up/admin" className='w-full bg-gray-800 h-[70px] flex justify-center items-center text-[20px] font-medium text-white rounded-md'>Sign up as Admin</Link>
   <Link to="/sign-up/staff" className='w-full bg-gray-800 h-[70px] flex justify-center items-center text-[20px] font-medium text-white rounded-md'>Sign up as Staff</Link>
   </div>
    </div>
  </div>
    </div>
  )
}

export default Welcome