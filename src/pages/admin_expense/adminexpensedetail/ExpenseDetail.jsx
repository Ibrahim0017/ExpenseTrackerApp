import image from "../../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import { useGetOneExpensesQuery } from "../../../service/expense/ExpenseRTK";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  useCommentMutation,
  useGetAllCommentQuery,
} from "../../../service/comment/BranchRTK";
import { useEmployeeProfileQuery } from "../../../service/employee/EmployeeRTK";
import moment from "moment";
import { useAdminProfileQuery } from "../../../service/AdminProfile/AdminProfileRTK";

const ExpenseDetail = () => {
  const [message, setMessage] = useState();
  const { id } = useParams();
  const { data, error } = useGetOneExpensesQuery(id);

  console.log(error);
  const [comment, { isLoading }] = useCommentMutation();
  const { data: profileData } = useEmployeeProfileQuery();
  const { data: organisation } = useAdminProfileQuery();
  const { data: commentData, error: isError } = useGetAllCommentQuery();
  const filterComment = commentData?.data.filter((el) => el.expense === id);
  console.log(filterComment);
  console.log(commentData?.data);
  console.log(profileData);

  const createComment = () => {
    comment({ message, id });
  };

  return (
    <div className="w-full flex my-[20px] flex-col justify-center bg-white p-5">
      <div className="w-full h-[100px] bg-gradient-to-r from-gray-200 to-yellow-500"></div>
      <div className="w-full pl-5 relative bottom-8 flex items-end gap-2  tablet:flex tablet:items-center tablet:flex-col tablet:relative tablet:bottom-5">
        <div className="size-28 rounded-full">
          <img
            className="rounded-full size-full tablet:size-full"
            src={image}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-medium text-lg tablet:items-center tablet:text-center">{`${data?.data.employee?.firstName} ${data?.data.employee?.lastName}`}</div>
          <div className="text-[15px] tablet:text-center">
            {`${data?.data.branch?.address}`}
          </div>
        </div>
      </div>
      <div className="w-full p-5 gap-6 flex flex-col">
        <div className="w-full ">
          <div className="font-medium mb-[15px]">Expense Information</div>
          <div className="w-full mt-[10px] overflow-x-auto">
            <table className="w-full mx-auto max-w-screen-2xl">
              <tbody>
                <tr className="text-center">
                  <td className="font-medium py-5 border">Expense item</td>
                  <td className="border">{`${data?.data.price}`}</td>
                </tr>
                <tr className="text-center">
                  <td className="border font-medium py-5">Quantity</td>
                  <td className="border">{`${data?.data.quantity}`}</td>
                </tr>
                <tr className="text-center">
                  <td className="border font-medium py-5">Price</td>
                  <td className="border">₦{`${data?.data.price}`}</td>
                </tr>
                <tr className="text-center">
                  <td className="border font-medium py-5">Date Added</td>
                  <td className="border">23/oct/2024</td>
                </tr>
                <tr className="text-center">
                  <td className="border font-medium py-5">
                    Reason for Expense
                  </td>
                  <td className="border">{`${data?.data.reason}`}</td>
                </tr>
                <tr className="text-center">
                  <td className="border font-medium py-5">Branch</td>
                  <td className="border">{`${data?.data.branch?.name}`}</td>
                </tr>
                <tr className="text-center">
                  <td className="border font-medium py-5">Expense Date</td>
                  <td className="border">date</td>
                </tr>
              </tbody>
            </table>
            
          </div>
        </div>
        <div className="w-full py-[10px] tablet:w-full">
          <div className="w-full rounded-[10px] overflow-y-auto scrollbar-hide bg-white">
            <div className="flex w-full justify-between pb-2 border-b items-center">
              <div className="font-medium">Comment</div>
            </div>
            <div className="py-[20px] tablet:w-full">
              {/* <div>
                {filterComment?.map((props, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <div className="flex justify-center gap-3 items-center">
                        {props.senderId === profileData?.data._id ? (
                          <div className="size-10 rounded-full ">
                            <img
                              className="size-full rounded-full"
                              src={image}
                            />
                          </div>
                        ) : (
                          <div className="size-10 rounded-full ">
                            <img
                              className="size-full rounded-full"
                              src={image}
                            />
                          </div>
                        )}
                        <div className="flex flex-col justify-center">
                          <div className="text-[14px] font-medium">
                            Liam Reuben
                          </div>
                          <div className="text-[12px]">
                            {moment(props?.createdAt).fromNow()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] flex items-center justify-center">
                      <div className="w-[100%] flex mt-[10px] pl-[53px]">
                        <div className="text-[14px] text-gray-600 ">
                          {props.message}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="flex flex-col ">
                <div className="w-full">
                  {filterComment?.map((props, index) => (
                    <div className="flex flex-col" key={index}>
                      <div
                        className={`flex ${
                          props.senderId === profileData?.data._id || props.senderId === organisation?.data._id
                            ? "justify-end"
                            : null
                        }`}
                      >
                        <div
                          className={`${
                            props.senderId === profileData?.data._id
                              ? "bg-gray-300 text-black"
                              : "bg-blue-500 text-white"
                          } rounded-md mt-3 max-w-lg p-2`}
                        >
                          <div className="text-md font-medium">
                            {props.message}
                          </div>
                          <div className="text-xs text-right ml-10">
                            {moment(props?.createdAt).fromNow()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

             
              </div>

              <div className="mt-[30px]">
                <div className=" text-gray-700  text-[13px] font-medium">
                  {" "}
                  <span className="border-b border-gray-400">REPLY</span>
                </div>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message..."
                  className="pt-[3px] pb-[3px] mt-[10px] pl-[10px] w-full h-[100px] rounded-bl-xl text-[14px] rounded-br-xl bg-gray-50 outline-none placeholder:text-[14px] cursor-pointer"
                ></textarea>

                <div className="w-full mt-2 flex justify-end">
                  <button
                    onClick={createComment}
                    className="text-[15px] text-white font-medium border bg-blue-500 px-[35px] py-2 hover:bg-blue-600 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetail;