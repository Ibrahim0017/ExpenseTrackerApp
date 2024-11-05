import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";

import { CiEdit } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

const ViewMore = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <IoMdMore className="cursor-pointer hover:scale-125" onClick={toggleContent} />
      {showContent && (
        <div className="bg-white absolute right-16 size-[165px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
          <div className="flex items-center gap-1 py-2 pl-1 w-full hover:bg-gray-100 hover:rounded-[5px] hover:cursor-pointer hover:">
            <div>
            <IoBagOutline />
            </div>
            <Link to='/admin/expense/detail'><div >View detail</div></Link>
          </div>
          <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
            <div>
              <CiEdit />
            </div>
            <div>Edit details</div>
          </div>
          <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
            <div>
              <IoKeyOutline />
            </div>
            <div>Change permission</div>
          </div>
          <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500">
            <div>
              <RiDeleteBin6Line />
            </div>
            <div>Delete user</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewMore;
