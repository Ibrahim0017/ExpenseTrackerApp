import image from "../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import ViewMore from "../../components/ViewMore";
// import Pagination from './adminexpensedetail/Pagination';
// import Posts from "./adminexpensedetail/Posts";
import { Link } from 'react-router-dom';



const OrderTable = ({filteredExpenses}) => {
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
          {filteredExpenses?.map((value, index) => (
            <tr className="text-[14px] border-b hover:border-none font-medium hover:cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out hover:bg-gray-50" key={index}>
            <td className="text-[14px] flex gap-2 items-center font-medium px-3 py-3 ">
              <div className="size-10 rounded-full">
                <img className="rounded-full size-full" src={image} />
              </div>
              <Link to={`/admin/expense/detail/${value._id}`}>
              <div>{`${value?.employee?.firstName} ${value?.employee?.lastName}`}</div>
        </Link>
        </td>
           

                <td className="px-3 py-3">{value.title}</td>
                <td className="px-3 py-3">{value.quantity}</td>
                <td className="px-3 py-3">₦{value.price}</td>
                <td className="px-3 py-3">{value.reason}</td>
                <td className="px-3 py-3">{value.branch?.name}</td>
                <td className="px-3 py-3">10/may/2023</td>
                <td className="px-3 py-3">
                  <ViewMore id={value._id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <Posts posts={currentPosts} loading={loading}/> */}
      {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
    </div>
  );
};

export default OrderTable;
