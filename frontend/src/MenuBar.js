import* as React from 'react';
import image from './Images/edit.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';


function MenuBar()

{

    const user = useSelector(selectUser);
    console.log(user);


    return(
        <div className='menu'>
            <div className='option1'>
                {

                user.firstname.substring(0,10)
                }..
            </div>
            <div className='option2'>
                Food posting form
            </div>
            <div className='option3'><Link className='link1' id='linkreq' to='/FoodRequestingForm'>Food Request form</Link></div>
            <div className='option4'>Community form/feed</div>
            <div className='option5'>Notification</div>
            <div className='ellipseMain'>
               <Link className='link1'  to="ProfileSetting"> <img src={image} alt='edit' className='edit'></img></Link>

            </div>

        </div>
    );
}
export default MenuBar;