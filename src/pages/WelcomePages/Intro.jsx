import {useEffect} from 'react'
import imgLogo from "../../assets/Logo2.svg"
import { useNavigate } from 'react-router-dom'; 
import { TbLoader } from "react-icons/tb";

const Intro = () => {
  const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate('/welcome');
      }, 2000); // 2-second delay
    }, []);
  
    return (
      <div className='flex justify-center items-center w-full h-[100vh] bg-gray-700'>
       <div className='flex flex-col items-center'>
       <div><img src={imgLogo} className='size-[300px]' /></div>
       <p className='text-4xl text-white'><TbLoader /></p>
       </div>
      </div>
  )
}

export default Intro