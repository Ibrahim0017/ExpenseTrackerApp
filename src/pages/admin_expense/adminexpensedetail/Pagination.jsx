import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className=''>
          <ul className="border-t border-b border-l rounded-sm inline-flex flex-wrap -space-x-px">
            {pageNumbers.map(number => (
              <li key={number} className="px-3 hover:bg-gray-50 border-r py-2 cursor-pointer">
                <a onClick={() => paginate(number)} href="!#" className="text-blue-500 font-medium">
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
    }

export default Pagination;