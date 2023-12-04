import React from 'react';
import image from '../images/image.jpg';

const Image = () => {
  return (
    <img className='w-[430px] hidden md:block ' src={image} />
  )
}

export default Image;