import React from 'react' 
import image from "../../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ExpenseDetail = () => {
  return (
    <div className='w-full flex items-center flex-col justify-center'>
        <div className='w-full h-[100px] bg-gradient-to-r from-blue-900 to-black'></div>
        <div className='w-[90%] relative bottom-5 flex items-end gap-2'>
            <div className='size-28 rounded-full '><img className='rounded-full size-full' src={image} /></div>
            <div className='flex flex-col justify-center'>
                <div className='font-medium text-lg'>James Moore</div>
                <div className='text-[15px]'>House Z, Oluwale, Chevron drive, Lekki-Lagos.</div>
            </div>
        </div>
        <div className='w-[90%] gap-6 flex '>
            <div className='w-[65%] py-[10px] '>
                <div className='font-medium mb-[10px]'>Expense Information</div>
                <table className='min-w-[43rem] '>
                 
                    <tbody>
                        <tr className='text-center'>
                            <td className='font-medium py-5 border'>Expense item</td>
                            <td className='border'>Office new printer</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border font-medium py-6 '>Quantity</td>
                            <td className='border'>2</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border font-medium py-6'>Amount</td>
                            <td className='border'>$420.00</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border font-medium py-6'>Date Added</td>
                            <td className='border'>23/oct/2024</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='border font-medium py-5'>Reason</td>
                            <td className='border'>The last one was faulty</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-[35%] py-[10px] '>
                <div className='w-full rounded-[10px] overflow-y-scroll  scrollbar-hide bg-gray-50'>
              <div className='flex w-full p-[10px] justify-between border-b items-center'>
              <div className='font-medium'>Comment</div>
                <div className='text-[18px] font-medium hover:cursor-pointer'>x</div>
              </div>
              <div className='p-[20px]  '>
                <div className='flex justify-between'>
                  <div className='flex justify-center gap-3 items-center'>
                  <div className='size-10 rounded-full '><img className='size-full rounded-full' src={image} /></div>
                    <div className='flex flex-col justify-center'>
                        <div className='text-[14px] font-medium'>Liam Reuben</div>
                        <div className='text-[12px]'>27 minutes ago</div>
                    </div>
                  </div>
                    <div><HiOutlineDotsHorizontal /></div>
                </div>

                <div className='text-[14px] text-gray-600 mt-[10px]'>A better understanding of usage can aid in priortizing future efforts I'm sorry I replied to your emails after only three weeks</div>

                <div className='mt-[30px]'>

                    <div className=' text-gray-700  text-[13px] font-medium'> <span className='border-b border-gray-400'>REPLY</span></div>
                    <textarea placeholder='Enter your comment...' className='pt-[3px] pb-[3px] mt-[10px] pl-[10px] prvg-[10px] w-full h-[100px] rounded-bl-xl text-[14px] rounded-br-xl bg-white outline-none placeholder:text-[14px]'>
                      
                    </textarea>
                    <div className='w-full flex justify-end'><button className='text-[14px] text-white font-medium border bg-blue-700 px-5 py-1 hover:bg-blue-800 rounded-md'>Send</button></div>

                </div>

</div>
                </div>

               
            </div>
        </div>
    </div>
  )
}

export default ExpenseDetail