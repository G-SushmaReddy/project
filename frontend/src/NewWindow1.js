import* as React from 'react';
import './App.css';
import Rectangle from './Rectangle';
import SignUp from './SignUp';


function NewWindow1()
{
    return(
        <div className='App'>
            <SignUp/>
          
            <Rectangle/>
           
        </div>
    );
}

export default NewWindow1;