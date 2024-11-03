import* as React from 'react';
import img from './Images/filepost.png';
import friend from './Images/friend.png';
import chat from './Images/chat.png';
import request from './Images/request.png';
import help from './Images/help.png';
import { Link } from 'react-router-dom';
import Giftbox from './Giftbox';
import HelpCenter from './HelpCenter';

function SideBar()
{
    return(
        <div>
            <button className='sidebutton'><img src={img} alt='imgpost' className='postimage'></img> <Link className='link1' to="/myposts"> My posts</Link> </button>
            <button className='sidebutton' id='chat'><img src={chat} alt='chat' className='chatimg'></img> <Link className='link1' to="/chat"> Chat </Link> </button>
            <button className='sidebutton' id='privacy'><img style={{cursor:'pointer'}} src={request} alt='privacy' className='privacyimg'></img> <Link className='link1' to="/requests">   Requests</Link></button>
            <button className='sidebutton' id='help'><img src={help} alt='help' className='helpimg'></img>  <Link className='link1' to="/HelpCenter">Help Center</Link></button>

         {/* <Giftbox/> */}
        </div>
    )
}
export default SideBar;