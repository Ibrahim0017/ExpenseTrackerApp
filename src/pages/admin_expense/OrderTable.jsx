import { useState, useEffect } from 'react';
import image from "../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import ViewMore from "../../components/ViewMore";
import axios from "axios";
import Pagination from './adminexpensedetail/Pagination';
import Posts from "./adminexpensedetail/Posts";



const OrderTable = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage + postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full mt-[20px] flex flex-col items-center justify-center">
      <table className="min-w-[70rem]">
        <thead className="text-[15px] bg-gray-50">
          <tr className="text-left rounded-sm">
            <th className="font-medium px-3 py-3">Staff name</th>
            <th className="font-medium px-3 py-3">Expense name</th>
            <th className="font-medium px-3 py-3">Quantity</th>
            <th className="font-medium px-3 py-3">Price</th>
            <th className="font-medium px-3 py-3">Reason</th>
            <th className="font-medium px-3 py-3">Branch </th>
            <th className="font-medium px-3 py-3">Date Added</th>
            <th className="font-medium px-3 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[14px] font-medium hover:cursor-pointer hover:transition-all hover:duration-500 ">
            <td className="text-[14px] flex gap-2 items-center font-medium px-3 py-3">
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
        </tbody>
      </table>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
};

export default OrderTable;
