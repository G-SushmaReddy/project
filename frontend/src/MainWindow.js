import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Header';
import MenuBar from './MenuBar';
import Posting from './Posting';
import PostBox from './PostBox';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';
import axios from 'axios';
import Rectangle from './Rectangle';

function MainWindow()
{
  const user = useSelector(selectUser);
  const token = user.token;
  const [posts, setPosts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
    }

      axios.get(`http://localhost:3001/api/post/all`, {
        headers: {
          'x-access-token': token
        }
      }).then((response) => {
        const data = response.data;
        console.log(data)
        setPosts(data)
       
      })
    
  }, [[],isUpdate]);

  const handlePost = () => {
    // Add the new post to the posts array
    // setPosts([...posts, newPost]);
    setIsUpdate(!isUpdate);
  };
    return(
        <div className='App' >
          {/* <Rectangle /> */}
          {/* <Rectangle/> */}
      <Header/>
      
      <MenuBar/>
      <Posting onPost={handlePost} />
      <PostBox posts={posts} />
    
        </div>
    );
}

export default MainWindow;