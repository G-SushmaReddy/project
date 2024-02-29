import React from 'react';
import image from './Images/editx.png';
import image1 from './Images/delete.png';
function PostBox({ posts }) {
  const maxItemsPerRow = 3; // Maximum items per row

  return (
    <div className='PostBox'>

      <div id='PostBox1' className='posts-container'>
        {posts.map((post, index) => (
          <div key={index} className='singlePost'>
          <div className='currentUser'>{post.postedBy}<p>
      
            </p></div>
            <p>{post.content}</p>
            <div key={index}>
              {post.image && (
                <img
                  src={"http://localhost:3001"+post.image}
                  alt='Selected Image'
                  className='selectedImage'
                />
              )}
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default PostBox;
