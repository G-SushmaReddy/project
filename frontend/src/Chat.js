import React, { useState,useEffect } from 'react';
import Header from './Header';
import SearchBar from './Searchbar';
import image from './Images/colorlogo.png';
import LogOut from './LogOut';
import Nav from './nav/Nav';
import ChatBody from './chatBody/ChatBody';


function Chat() {
    return (
        <div className="__main">
     <div className='Recthead1'>
            <img src={image} className='imgHead' alt='imgx'></img>
           
            <LogOut/>
        </div>
      <ChatBody/>
    </div>
    )
}

export default Chat;