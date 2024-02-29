import* as React from 'react';
import logo from './Images/logo_2.png';
import imgbackg from './Images/backg.png';




const Benefit = () => {
    return (
        <div className="benefitRectangle">
            {/* <img src={imgbackg}></img> */}
           

            
            <div className="benefitsText">
                
                Benefits
            </div>
            
 
            <img src={imgbackg} id='rectb'></img>
            <div className="benefit-text" style={{ top: '1036px' }}>Surplus food from hotels, restaurants, and individuals is efficiently directed to those in need, minimizing wastage.</div>
      <div className="benefit-text" style={{ top: '1125px' }}>The platform fosters a sense of community by connecting donors, recipients, and organizations in a meaningful way.</div>
      <div className="benefit-text" style={{ top: '1214px' }}>Food banks and individuals can request the specific items they need, ensuring that no one goes hungry.</div>
      <div className="benefit-text" style={{ top: '1298px' }}>Quick and user-friendly interfaces enable seamless sharing and request of food items.</div>
      <div className="benefit-text" style={{ top: '1382px' }}>Clear profiles and communication channels build trust and transparency between donors and recipients.</div>
      {['1057px', '1139px', '1226px', '1318px', '1402px'].map((top, index) => (
        <div key={index} className="ellipse" style={{ top }}></div>
      ))}
      

            <img src={logo} alt="Descriptive alt text"  />
        </div>
    );
}

export default Benefit;