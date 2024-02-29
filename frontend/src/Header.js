import* as React from 'react';
import image from './Images/colorlogo.png';
import SearchBar from './Searchbar';
import LogOut from './LogOut';
import img1 from './Images/img2.jpg';
import img2 from './Images/img1.jpg';
import Rectangle from './Rectangle';
import SideBar from './SideBar';


function Header()
{
    return (
      <div>
       
        <div className='Recthead'>
            <img src={image} className='imgHead' alt='imgx'></img>
            <SearchBar/>
            <LogOut/>
        </div>

        {/* <Rectangle/> */}
        
        <div>
            {/* <img src={img1} alt='img1' className='img1'>
            </img> */}
            <SideBar/>
        </div>
        <div className='midrect'> 

        </div>

        <div>
            {/* <img src={img2} alt='img2' className='img2'>
            </img> */}
        </div>


      </div>
    )
}
export default Header;