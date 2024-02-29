import * as React from 'react';
import logo from './Images/colorlogo.png';
import facebook from './Images/fb.png';
import link from './Images/Link.png';
import google from './Images/google.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { login } from "./slices/slices";
import { useDispatch } from "react-redux";


function SignIn() {
    const dispatch = useDispatch();

    // create state for usrenmae and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function SignIn(){
        await axios.post("http://localhost:3001/api/user/login", {
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
            dispatch(login(response.data));
            window.location.href = "/Mainwindow";
        }).catch((error) => {
            console.log(error);
        })

    }
    return (
        <div className='RectNew'>


            <img src={logo} alt='img1' className='imgSign' />

            <div className='SignInBox'>
                <div className='RectButton'>
                    <Link className='link1' to="new-window1">Sign Up</Link>
                </div>
                <div className='Signin'>
                    Sign In
                </div>

                <form>
                    <div>

                        <input className='username' type="text" id="username" name="username" placeholder='User Name'
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        />
                    </div>
                    <div>

                        <input className='password' type="password" id="password" name="password" placeholder='Password' 
                        onChange={
                            (e) => {
                                setPassword(e.target.value);

                        }}
                        />
                    </div>
                    <div>
                        <label className='Remember-label'>
                            <input className='Remember' type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <div className='Forgot'>
                        Forgot password ?
                    </div>
                    <button id="button1" type="submit" className='buttonLog' 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            SignIn();
                        }
                    } 
                    >Log in</button>
                    <div className="horizontal-line left"></div>

                    <div className='smallhead'>
                        or connect with
                    </div>
                    <div className="horizontal-line right"></div>


                    <img src={facebook} className='fb1' alt='fb'></img>
                    <div className="vertical-line left"></div>
                    <img src={google} className='google' alt='google'></img>
                    <div className="vertical-line right"></div>
                    <img src={link} alt='linked' className='linkedi'></img>
                </form>


            </div>


        </div>


    )
}

export default SignIn;