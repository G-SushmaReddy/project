import* as React from 'react';
import facebook from './Images/fb.png';
import Instagram from './Images/insta.png';
import Twitter from './Images/twit.png';
import YouTube from './Images/R.png';
import LinkedIn from './Images/Link.png';
import CopyRight from './Images/CR.png';
import logo from './Images/logo.png';



function EndHome()
{
    return(
        <div className='RectHomeEnd'>

            
      
            
            <div className='RecEnd'></div>


            <div className='GetToKnow'>
            Get to know us 
            </div>
            <div className='AboutUs'>
                About us 
              
            </div>
            <div className='OurTeam'>
                Our Team 
              
            </div>
            <div className='Partners'>
                Partners
              
            </div>
            <div className='Terms'>
                Terms & Conditions
              
            </div>

            <div className='Contact'>
                Contact Information
               
            </div>
            <div className='ConInfo'> 
                <p>Donato</p>

                <p className='p1'> 079-0987896
               
                </p>
                <p className='p1'>041-0988765</p>
               <p className='p1'>052-0986785</p> 

                <p >Donato@gmail.com</p>
                </div>
                <img src={facebook} className='fb' alt='my img1'></img>
                <img src={Instagram} className='insta' alt='my img2'></img>
                <img src={Twitter} className='twit' alt='my img3'></img>
                <img src={YouTube} className='UTube' alt='my img4'></img>
                <img src={LinkedIn} className='Link' alt='my img5'></img>
                <img src={CopyRight} className='CR' alt='my img6'></img>
                <img src={logo} className='logoEnd'alt='my img7'></img>

                
                <div>
                    <p className='p2'> 2023 Donato</p>
                </div>
                <div>
                    <p className='p3'> Non-profit organization</p>
                </div>

                
        </div>
        
    )
}


export default EndHome;
