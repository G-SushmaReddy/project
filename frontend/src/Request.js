import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';
import image from './Images/editx.png';
import image1 from './Images/delete.png';
import image2 from './Images/linkreq.png';
import SearchBar from './Searchbar';

function Requests() {
  const user = useSelector(selectUser);
  const token = user.token;
  
  const [requestData, setRequestData] = useState([]);
 

  async function deleteRequest(id){

    console.log(id)
    const response = await fetch(`http://localhost:3001/api/foodrequest/${id}`,{
      method:'DELETE',
      headers: {
        'x-access-token': token
      }
    })
    const data = await response.json();
    console.log(data)
    fetchData();
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/foodrequest/all',
      {
        headers: {
          'x-access-token': token
        }
      }
      
      ); 
      const data = await response.json();
      console.log(data)
      setRequestData(data); 
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div >

      <SearchBar/>
      <h1>Requests</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Organization</th>
            <th>Organization ID</th>
            <th>Number of People</th>
            <th>Category</th>
            <th>Food Type</th>
            <th>Size</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {requestData.map((request, index) => (
            <tr key={index}>
              <td>{request.firstname}</td>
              <td>{request.organization}</td>
              <td>{request.organizationid}</td>
              <td>{request.numberofpeople}</td>
              <td>{request.category}</td>
              <td>{request.foodtype}</td>
              <td>{request.size}</td>
              <td>{request.location}</td>
              <td>{request.contact}</td>
              <td>
                <img src={image} id='editreq'
              style={{cursor:'pointer'}}
             onClick={()=>{
                window.location.href=`/foodRequestingForm/${request._id}`
             }} 
              alt='reqEdit'></img>
              </td>
              <td><img 
              onClick={()=>{
                // deleteRequest(request._id)

                if(window.confirm("Are you sure you want to delete this request?")){
                  deleteRequest(request._id)
                }
              }}
              src={image1} id='editreq' alt='reqDelete'></img></td>
              <td>
              <img 
              onClick={()=>{
                
                window.location.href=`/share/${request._id}`

              }}
              src={image2} id='editreq' alt='reqDelete'></img>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }  

export default Requests;
