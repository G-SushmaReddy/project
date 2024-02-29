import* as React from 'react';
import image from './Images/R.jpeg';

function WhoNeedlt()
{
    return(
        
      <div className='WhooNeedIt' >
        Who Needs It
        <img src={image} className='imageW' alt='imgx'/>
        <div className="ellipse-1"> </div>
      <div className="one">
        1 
      </div>
      <div className='text1'>Individuals and families in need.</div>
      <div className="ellipse-2"> </div>
      <div className="two">
        2
      </div>
      <div className='text2'>Food Banks and Charitable Organizations.</div>
      <div className="ellipse-3"> </div>
      <div className="three">
        3
      </div>
      <div className='text3'>Shelters and Community Centers.</div>
      <div className="ellipse-4"> </div>
      <div className="four">
        4
      </div>
      <div className='text4'>Local Charities and Nonprofits.</div>


        <div className='WhoNeedIt'>Who needs it</div>
    </div>
 
    )
}

export default WhoNeedlt;