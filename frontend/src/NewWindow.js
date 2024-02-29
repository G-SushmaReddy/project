import* as React from 'react';
import './App.css';
import Rectangle from './Rectangle';
import SignIn from './SignIn';


function NewWindow()
{
    return(
        <div className='App'>
            <SignIn/>
            <Rectangle/>
           
        </div>
    );
}

export default NewWindow;