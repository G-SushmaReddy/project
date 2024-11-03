import React from 'react'
import LogOut from './LogOut';
import image from './Images/colorlogo.png';
import Request from './Request';

function RequestsWindow() {
  return (
    <div><div className='Recthead'>
    <img src={image} className='imgHead' alt='imgx'></img>
    
    <LogOut/>
    <Request/>


</div>




</div>
  )
}

export default RequestsWindow;