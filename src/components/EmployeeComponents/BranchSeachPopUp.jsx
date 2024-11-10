import { IoSearch } from "react-icons/io5";

const BranchSeachPopUp = ({handleSearchOpen}) => {
  return (
    <div className="fixed  gap-2 inset-0 h-screen tablet:py-2 z-50 max-md:px-6 bg-bgTrans flex items-center justify-center mobileTab:z-50 ">
    <div className="relative flex items-center ">
        <p className="absolute left-3 top-3 text-[#BBBEC8] ">
          <IoSearch />
        </p>
        <input
          type="text"
          placeholder="search  branch"
          className=" px-[40px] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm "
        />
  
    </div>
    <button className="px-4 py-[10px] border-none bg-gray-800 text-reponsiveText tetx-white font-semibold font-[calibri] rounded-md text-white " onClick={handleSearchOpen}>Search</button>
</div>
  )
}

export default BranchSeachPopUp