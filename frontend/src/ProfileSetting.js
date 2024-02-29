import* as React from 'react';
import Header from './Header';
import image from './Images/colorlogo.png';
import SearchBar from './Searchbar';
import LogOut from './LogOut';
import ProfileInside from './ProfileInside';


function ProfileSetting()
{
    return(
        <div className='App' id='profileSet'>
           <div className='Recthead'>
            <img src={image} className='imgHead' alt='imgx'></img>
           
           <LogOut/>
           <ProfileInside/>
        </div>

        </div>
    );
}
export default ProfileSetting;