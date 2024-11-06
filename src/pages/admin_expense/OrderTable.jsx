import { useState, useEffect } from 'react';
import image from "../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import ViewMore from "../../components/ViewMore";
import axios from "axios";
import Pagination from './adminexpensedetail/Pagination';
import Posts from "./adminexpensedetail/Posts";
import ExpenseDetail from './adminexpensedetail/ExpenseDetail';
import { useGetAllExpensesQuery } from '../../service/expense/ExpenseRTK';



const OrderTable = () => {
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(10);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         setPosts(res.data);
    //         setLoading(false);
    //     }

    //     fetchPosts();
    // }, []);

    // const indexOfLastPost = currentPage + postsPerPage
    // const indexOfFirstPost = indexOfLastPost - postsPerPage
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const {data,isLoading,error} = useGetAllExpensesQuery()

    console.log(data)
    console.log(error)
  return (
    <div className="w-full mt-[20px] overflow-x-auto">
      <table className="w-full min-w-[55rem]">
        <thead className="w-full text-[15px] bg-gray-100">
          <tr className="text-left rounded-sm">
            <th className="font-medium px-3 py-3">Staff name</th>
            <th className="font-medium px-3 py-3">Expense name</th>
            <th className="font-medium px-3 py-3">Quantity</th>
            <th className="font-medium px-3 py-3">Price</th>
            <th className="font-medium px-3 py-3">Reason for Expense</th>
            <th className="font-medium px-3 py-3">Branch </th>
            <th className="font-medium px-3 py-3">Expense Date</th>
            <th className="font-medium px-3 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[14px] border-b hover:border-none font-medium hover:cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out hover:bg-gray-50">
            <td className="text-[14px] flex gap-2 items-center font-medium px-3 py-3 ">
              <div className="size-10 rounded-full">
                <img className="rounded-full size-full" src={image} />
              </div>
              <div>Sophia Brown</div>
            </td>

            <td className="px-3 py-3">Accessories</td>
            <td className="px-3 py-3">3</td>
            <td className="px-3 py-3">$320.00</td>
            <td className="px-3 py-3">Faulty</td>
            <td className="px-3 py-3">Chevron</td>
            <td className="px-3 py-3">10/may/2023</td>
            <td className="px-3 py-3">
                <ViewMore />
            </td>
          </tr>

          <tr className="sm:text-[14px] border-b rounded-lg hover:shadow-md transition-all duration-300 ease-in-out hover:bg-gray-50
           font-medium hover:cursor-pointer hover:transition-all hover:duration-500 hover:border-none">
            <td className="text-[14px] flex gap-2 items-center font-medium px-3 py-3">
              <div className="size-10 rounded-full">
                <img className="rounded-full size-full" src={image} />
              </div>
              <div>Vodka Woods</div>
            </td>

            <td className="px-3 py-3 text-[14px]">Accessories</td>
            <td className="px-3 py-3 text-[14px]">3</td>
            <td className="px-3 py-3 text-[14px]">$320.00</td>
            <td className="px-3 py-3 text-[14px]">Faulty</td>
            <td className="px-3 py-3 text-[14px]">Chevron</td>
            <td className="px-3 py-3 text-[14px]">10/may/2023</td>
            <td className="px-3 py-3 text-[14px]">
                <ViewMore />
            </td>
          </tr>
        </tbody>
      </table>
      {/* <Posts posts={currentPosts} loading={loading}/> */}
      {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
    </div>
  );
};

export default OrderTable;
