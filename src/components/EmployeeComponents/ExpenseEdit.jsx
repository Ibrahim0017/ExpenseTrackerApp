import { TbLetterX } from "react-icons/tb";

const ExpenseEdit = ({handleButtonOpen}) => {
  return (
    <div className='w-[70%] h-[350px] bg-white border flex flex-col items-center pt-6'>
         <div className="w-full flex justify-center pb-3  border-b border-[#BBBEC8] ">
          <div className="w-[95%]  flex justify-between">
            <div className="text-[20px] font-semibold">Edit Expense</div>
            <p
              className="text-[25px] text-[#c4c1c1] cursor-pointer"
              onClick={handleButtonOpen}
            >
              <TbLetterX />
            </p>
          </div>
        </div>
        <form className='w-[80%]'>
        <div className='w-full flex justify-between gap-4 max-sm:flex-col mt-3'>
        <div className='w-full'>
            <p>Expense name</p>
            <div>
            <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' />
            </div>
        </div>
        <div className='w-full'>
            <p>Price</p>
            <div>
            <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' />
            </div>
        </div>
        </div>
        <div className='w-full flex justify-between gap-4 max-sm:flex-col max-sm:mt-2'>
        <div className='w-full'>
            <p>Quantity</p>
            <div>
            <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' />
            </div>
        </div>
        <div className='w-full'>
            <p>Description</p>
            <div>
            <textarea  className=' mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' />
            </div>
        </div>
        </div>
        <div className="mt-3">
            <button className="px-4 py-[10px] border-none bg-gray-800  text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white">
              Submit
            </button>
          </div>
    
        </form>
    </div>
  )
}

export default ExpenseEdit