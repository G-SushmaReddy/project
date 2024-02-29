import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';

function ProfileInside()
{
    const user = useSelector(selectUser);
    console.log(user);

    return(
        <div>
 <div className='ellipseMain' id='EllipseBig'>

</div>
<div >
{
        user.firstname
    }
    <label className='label1'>First Name:
   <br></br><input className='inputname' type='text' ></input></label>

</div>
<div >
    <label className='label1' id='lastlabel'>Last Name:<br></br><input className='inputname' id='inputlast' type='text'></input></label>

</div>
<div >
    <label className='label1' id='DOB'>Date of Birth:<br></br><input className='inputname' id='DOBinput' type='text'></input></label>


</div>

<div >
    <label className='label1' id='Gender'>Gender:<br></br><input className='inputname' id='Genderinput' type='text'></input></label>

</div>
<div >
    <label className='label1' id='Address'>Address:<br></br><input className='inputname' id='Genderinput' type='text'></input></label>

</div>
<div >
    <label className='label1' id='PhoneNo'>Phone Number:<br></br><input className='inputname' id='Genderinput' type='text'></input></label>

</div>
<div >
    <label className='label1' id='Best'>Best Define your Role:<br></br><input className='inputname' id='Bestinput' type='text'></input></label>

</div>

<div >
    <label className='label1' id='Comp'>Company name:<br></br><input className='inputname' id='Compinput' type='text'></input></label>

</div>
<div >
    <label className='label1' id='Loc'>Location:<br></br><input className='inputname' id='Locinput' type='text'></input></label>

</div>

<div >
    <label className='label1' id='Descp'>Description:<br></br><input className='inputname' id='Descpinput' type='text'></input></label>

</div>
<button  type="submit" className='buttonsave' id="buttonsave"  >Save Changes</button>


        </div>
       
    )
}

export default ProfileInside;