import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';
import { useParams } from 'react-router-dom';

function Form() {
    
    const user = useSelector(selectUser);
    const token = user.token;

    
    const { id } = useParams();

    console.log(id);


    if (!token) {
        window.location.href = '/login';
    }

   

    const [firstname, setFirstname] = useState('');
    const [organization, setOrganization] = useState('');
    const [organizationid, setOrganizationid] = useState('');
    const [numberofpeople, setNumberofpeople] = useState('');  
    const [size, setSize] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');
    const [category, setCategory] = useState('');
    const [foodType, setFoodType] = useState('');

    const [check, setCheck] = useState(false);







    useEffect(() => {

        if (!token) {
            window.location.href = '/login';
        }

        if(id){
            
            axios.get(`http://localhost:3001/api/foodrequest/${id}`, {
            headers: {
                'x-access-token': token
            }
        }).then((response) => {
            const data = response.data;
            setFirstname(data.firstname);
            setOrganization(data.organization);
            setOrganizationid(data.organizationid);
            setNumberofpeople(data.numberofpeople);
            setCategory(data.category);
            setFoodType(data.foodtype);
            setSize(data.size);
            setLocation(data.location);
            setContact(data.contact);
        }).catch((error) => {
            console.log(error.message);
        });
        }

    },[token,id]);

    async function form() {
        //check if the user checked the checkbox
        if (!check) {
            alert("sure dont you need a link to share data");
            return;
        }
        
        let body = {
            firstname: firstname,
            organization: organization,
            organizationid: organizationid,
            numberofpeople: numberofpeople,
            category: category,
            foodtype: foodType,
            size: size,
            location: location,
            contact: contact,
            // token: token
        };
        console.log(body);
        try {
            const editURL = `http://localhost:3001/api/foodrequest/${id}`;
            
            if(id){
                const response = await axios.put(editURL, body, {
                    headers: {
                        'x-access-token': token
                    }
                });

                if (response.status === 200) {
                    alert("Data updated successfully!");
                    window.location.href = '/requests';
                }else{
                    alert("Failed to update data to the database");
                }

                return;

            }

            const response = await axios.post('http://localhost:3001/api/foodrequest/', body, {
                headers: {
                    'x-access-token': token
                }
            });
    
            if (response.status === 201) {
                alert("Data added successfully!");
                window.location.href = '/requests';
                

                
            } else {
                alert("Failed to add data to the database");
            }
        } catch (error) {
            
            console.error("Error:", error.message);
            alert("An error occurred while trying to add data to the database.");
        }

    }


    const categoryOptions = ['Children', 'Elders', 'Youngsters'];

    const foodTypeOptions = ['Vegetarian', 'Non-vegetarian','Anything'];
    return (
        <div className='App' id='profileSet'>
            <div>

                <div className='para1'>
                    <div className='ppp'>Hi !!! Welcome to Food Requesting form.</div>
                    <div className='p1x'>
                        This form helps you to give the details on food request. Please fill the form with correct
                    </div>
                    <div className='p2x'>
                        details. User the Organization ID that was given by Donaco. If you want to share this

                    </div>
                    <div className='p3x'>
                        details click on the generate a link.Don't forget to delete your request once it is fulfilled.

                        <div className="horizontal-line" id='hllF' ></div>
                    </div>

                </div>


            </div>
            <div >
                <label className='label1' id='Fname'>First Name:<br></br><input className='inputname' id='inputFname' 
                value={firstname}
                type='text'
                onChange={
                    (e) => {
                        setFirstname(e.target.value);
                    }
                }></input></label>
                
                <label className='label1' id='Org'>Organization Name:<br></br><input className='inputname' id='inputOrgname' type='text'
                value={organization}
                onChange={
                    (e) => {
                        setOrganization(e.target.value);
                    }
                }></input></label>
                <label className='label1' id='OrgID'>Organization ID:<br></br><input className='inputname' id='inputOrgID' type='number'
                value={organizationid}
                onChange={
                    (e) => {
                        setOrganizationid(e.target.value);
                    }
                }>
                
                </input></label>
                <label className='label1' id='NoOrg'>Number of people in the organization:<br></br><input className='inputname' id='inputNoOrg' type='text'
                value={numberofpeople}
                onChange={
                    (e) => {
                        setNumberofpeople(e.target.value);
                    }
                }></input></label>
                
                
                <label className='label1' id='Cat'>Category:<br></br>

                    <select 
                        className='inputname'
                        id='inputcat'
                        value={category}

                        onChange={(e) => setCategory(e.target.value)}
                        style={{ fontSize: '20px' }}
                    >
                        <option value="">Select Category</option>
                        {categoryOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select></label>
                <label className='label1' id='Ftype'>Food type(willingness):<br></br> <select
                    className='inputname'
                    id='inputFtype'
                    value={foodType}
                    onChange={(e) => setFoodType(e.target.value)}
                    style={{ fontSize: '20px' }}
                >
                    <option value="" >Select Food Type</option>
                    {foodTypeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select></label>
                <label className='label1' id='Fsize'>Food Packet size:<br></br><input className='inputname' id='inputFsize' type='number'
                value={size}
                onChange={
                    (e) => {
                        setSize(e.target.value);
                    }
                }></input></label>
                <label className='label1' id='Locat'>Location:<br></br><input className='inputname' id='inputLoct' type='text'
                value={location}
                onChange={
                    (e) => {
                        setLocation(e.target.value);
                    }
                }></input></label>
             
                <label className='label1' id='NoC'>Contact Number:<br></br><input className='inputname' id='inputNoC' type='text'
                value={contact}
                onChange={
                    (e) => {
                        setContact(e.target.value);
                    }
                }></input></label>

                <input className='termsCon' id='check' type="checkbox" name="remember" 
                
                onChange={
                    (e) => {
                        setCheck(e.target.checked);
                    }
                } />
                <div className='Termcon' id='Generate'>
                    <p>Generate a link to show this details to others</p>
                </div>

                <div>
                    <button className='butt' 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            form();
                        }
                    }>
                        Submit

                    </button>
                </div>
                <div>
                    <button className='butt1' >
                       <Link className='link1' to='/MainWindow'>Cancel</Link> 

                    </button>

                </div>
            </div>


        </div>
    )

}

export default Form;