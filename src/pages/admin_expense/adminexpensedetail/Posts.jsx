import React from 'react'

const Posts = ({ posts, loading }) => {
  
  if(loading) {
        return <h2>Loading...</h2>;
    }

    return (
    <ul className="space-y-2 mb-4 border-b border-gray-200">
      {posts.map(post => (
        <li key={post.id} className="py-2 px-4 bg-white hover:bg-gray-100">
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
