import * as React from 'react';
import logo from './Images/colorlogo.png';
import facebook from './Images/fb.png';
import link from './Images/Link.png';
import google from './Images/google.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function SignUp() {
    //create states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [gmail, setGmail] = useState("");
    //check
    const [check, setCheck] = useState(false);

    //create function
    //localhost:3001/api/user/

    async function sign() {
        //check if the user checked the terms and conditions
        if (!check) {
            alert("You must agree to the terms and conditions");
            return;
        }
        
        let body = {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: gmail
        };
        try {
            const response = await axios.post('http://localhost:3001/api/user/', body);
    
            if (response.status === 201) {
                alert("Data added successfully!");
            } else {
                alert("Failed to add data to the database");
            }
        } catch (error) {
            
            console.error("Error:", error);
            alert("An error occurred while trying to add data to the database.");
        }

    }

    return (
        <div className='RectNew' id='rectnew1'>


            <img src={logo} alt='img1' className='imgSign' />

            <div className='SignUpBox'>
                <div className='RectButton1'>
                    <Link className='link1' to="/new-window">Sign In</Link>
                </div>
                <div className='SignUp1'>
                    Sign Up
                </div>

                <form>
                    <div>

                        <input className='FirstName' type="text" id="FirstName" name="FirstName" placeholder='First Name' 
                        onChange={
                            (e) => {
                                setFirstname(e.target.value);
                            }
                        } 
                        />
                    </div>
                    <div>

                        <input className='LastName' type="text" id="LastName" name="LasttName" placeholder='Last Name' 
                        onChange={
                            (e) => {
                                setLastname(e.target.value);
                            }
                        }
                        />
                    </div>
                    <div>

                        <input className='Gmail' type="email" id="Gmail" name="Gmail" placeholder='Gmail address' 
                        onChange={
                            (e) => {
                                setGmail(e.target.value);
                            }
                        }
                        />
                    </div>
                    <div>

                        <input className='username1' type="text" id="username" name="username" placeholder='User Name' 
                        onChange={
                            (e) => {
                                setUsername(e.target.value);
                            }
                        }
                        />
                    </div>


                    <div>

                        <input className='password1' type="password" id="password" name="password" placeholder='Password' 
                        onChange={
                            (e) => {
                                setPassword(e.target.value);
                            }
                        }
                        />
                    </div>
                    <div>

                        <input className='termsCon' type="checkbox" name="remember" 
                        onChange={
                            (e) => {
                                setCheck(e.target.checked);
                            }

                        }
                        />
                        <div className='Termcon'>
                            <p>I agree to Donato’s all <span className='sty'>Terms and conditions</span> and <span className='sty'>Privacy Policy</span></p>
                        </div>

                    </div>

                    <button id="button2" type="submit" className='buttonSub'  
                    onClick={
                        (e) => {
                            e.preventDefault();
                            sign();
                        }
                    }
                    >Submit</button>
                    <div className="horizontal-line left" id='hll'></div>

                    <div className='smallhead' id='sm'>
                        or connect with
                    </div>
                    <div className="horizontal-line right" id='hlr'></div>


                    <img src={facebook} className='fb1' id='fbb' alt='fb'></img>
                    <div className="vertical-line left"></div>
                    <img src={google} className='google' id='goo' alt='google'></img>
                    <div className="vertical-line right"></div>
                    <img src={link} alt='linked' id='lin' className='linkedi'></img>
                </form>


            </div>


        </div>


    )
}

export default SignUp;