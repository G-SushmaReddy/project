import './Editposting.css';
import React, { useState } from 'react';
import upload from './Images/upload.png';
import video from './Images/video.png';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

// import { use } from '../../backend/src/app';

function Editposting({ onPost }) {
  const user = useSelector(selectUser);
  const token = user.token;


  const { id } = useParams();

  // console.log(id);

  if (!token) {
    window.location.href = '/login';
  }
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);



  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
    }
    if (id) {
      axios.get(`http://localhost:3001/api/post/${id}`, {
        headers: {
          'x-access-token': token
        }
      }).then((response) => {
        const data = response.data;
        setPostText(data.content);
        setSelectedImage(data.image);
      })
    }else{
      axios.get(`http://localhost:3001/api/post/all`, {
        headers: {
          'x-access-token': token
        }
      }).then((response) => {
        const data = response.data;
        console.log(data)
        setPostText(data.content);
        setSelectedImage(data.image);
      })
    }
  }, []);


  const handlePostClick = async () => {
    const formData = new FormData();
    formData.append('content', postText);
    formData.append('image', selectedImage);

    try {
      if (id) {
        const editURL = `http://localhost:3001/api/post/${id}`;
        const response = await axios.put(editURL, formData, {
          headers: {
            'x-access-token': token,
            'Content-Type': 'multipart/form-data', // Required for file upload
          }
        });

        if (response.status === 200) {
          alert("Data updated successfully!");
          // Redirect or perform another action after updating the post.
        } else {
          alert("Failed to update data in the database");
        }
      } else {
        const response = await axios.post('http://localhost:3001/api/post/', formData, {
          headers: {
            'x-access-token': token,
            'Content-Type': 'multipart/form-data', // Required for file upload
          }
        });

        if (response.status === 201) {
          alert("Data added successfully!");
          // Redirect or perform another action after creating a new post.
        } else {
          alert("Failed to add data to the database");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to add/update data in the database.");
    }
    onPost();

  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // const handlePostClick = () => {
  //   // Create a new post object with text and image data
  //   const newPost = {
  //     text: postText,
  //     image: selectedImage,
  //   };

  //   // Pass the new post to the onPost callback
  //   onPost(newPost);

  //   // Clear the input fields
  //   setPostText('');
  //   setSelectedImage(null);
  // };

  return (
    <div className='Postingnew'>
      <img src={upload} alt='upload' className='upload' />
      <div className='photo'>Photo</div>
      <img src={video} alt='video' className='upload' id='video' />
      <div className='photo' id='VideoUp'>Video</div>
      <div className="horizontal-line" id='hori'></div>
      <input
        type='text'
        className='Postingtext'
        placeholder='What is on your mind?'
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
      />
      <div className="horizontal-line" id='hori1'></div>
      <div className="rectanglePost">
        <button className="buttonPost" onClick={(e) => {
          e.preventDefault();
          handlePostClick();
        }}>Post</button>
      </div>
    </div>
  );
}

export default Editposting;
