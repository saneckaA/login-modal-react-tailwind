import React from 'react'
import Content from '../Content';
import Image from '../Image';

const Card = () => {
    return (
        <div className='bg-white relative rounded-xl flex flex-col m-6 space-y-10 shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0'>
            <Content />
            <Image />
        </div>
    )
}

export default Card;