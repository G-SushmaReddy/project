import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './Searchbar';
import LogOut from './LogOut';
import image from './Images/colorlogo.png';
import Form from './Form';

function FoodRequestingForm()
{
    return(
        <div>
<div className='Recthead'>
        <img src={image} className='imgHead' alt='imgx'></img>
    </div>
   
    <Form/>

   
   

        </div>
    
    );
}
export default FoodRequestingForm;