import React, { useState, useEffect } from 'react';
import image1 from './Images/img1.jpg';
import image2 from './Images/img2.jpg';
import image3 from './Images/img3.jpeg';
import image4 from './Images/img4.jpeg';


function Giftbox() {
  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
    // Add more image URLs as needed
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='giftbox'>
      <img src={images[currentImageIndex]} alt="gift" style={{ width: '100%', height: '100%' }} />
<div className='boxx'>

</div>
<div> <img src={images[currentImageIndex]} alt="gift" style={{ width: '100%', height: '100%' }} /></div>
<div className='boxx1'>

</div>
    </div>
    

  );
}

export default Giftbox;
