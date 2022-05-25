import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faThumbsUp, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'


const Works = () => {
    return (
        <div className='mx-12 mb-24'>
            <h1 className='text-4xl text-gray-900 font-bold mb-20 text-center'>Here's How We Operate</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <FontAwesomeIcon className='text-7xl text-green-500 mb-3' icon={faCartShopping} />
                    <h4 className='text-2xl text-gray-900 font-medium mb-2'>YOU PLACE YOUR ORDER</h4>
                    <p className='text-gray-900'>Place your order via voicemail or via our App Ordering System before 2am, to receive same day delivery.</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-7xl text-green-500 mb-3' icon={faTruckArrowRight} />
                    <h4 className='text-2xl text-gray-900 font-medium mb-2'>WE PICK, PACK & DELIVER</h4>
                    <p className='text-gray-900' >We pick, pack & deliver your order on time in modern, refrigerated delivery vehicles with GPS tracking.</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-7xl text-green-500 mb-3' icon={faThumbsUp} />
                    <h4 className='text-2xl text-gray-900 font-medium mb-2'>SAME DAY REPLACEMENT</h4>
                    <p className='text-gray-900' >If there’s something that you’re not satisfied with, we’ll replace it on the same day or issue you a credit.</p>
                </div>
            </div>
        </div>
    );
};


export default Works;