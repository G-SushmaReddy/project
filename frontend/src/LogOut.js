import React, { useState } from 'react';
import logout1 from './Images/logoutpng.png';
import { Link } from 'react-router-dom';
import { logout } from './slices/slices';
import { useDispatch } from 'react-redux';
function LogOut()
{
  const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    // Add your logout logic here
    // For example, call an API to log the user out
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };
    
    return(
        <div >
            <div className='Logout'>
            <div onClick={handleLogoutClick}>
                <div className='txtlogout'>LogOut</div>
                <div><img src={logout1} alt='logout' className='logoutimg'></img></div>
            </div>
           
      </div>
      {showConfirmation && (
        <div className='confirmation-dialog'>
          <div className='message'>Are you sure? Do you want to LogOut?</div>
          <div className='button-container'>
            <button onClick={handleConfirmLogout}><Link className='link1' to="/">Yes</Link></button>
            <button onClick={handleCancelLogout}>No</button>
          </div>
        </div>
      )}

        </div>
    )
}

export default LogOut;