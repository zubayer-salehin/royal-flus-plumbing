import React from 'react';
import { faBattery2, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Product = ({singleParts }) => {

    const { _id,name, image, price, quantity, minimumOrderQuantity, description } = singleParts
    const navigate = useNavigate();

    return (
        <div className="card singlePartsBoxShadow">
            <figure><img className='w-60 h-60 mt-6' src={image} alt="Shoes" /></figure>
            <div className="card-body text-secondary p-5">
                <h2 className="card-title font-medium">
                    {name}
                </h2>
                <h2 className='text-xl font-normal'>Price : <span className='text-secondary font-bold'>${price}</span></h2>
                <div className='flex gap-6 sm:gap-8'>
                    <div className='text-center'>
                        <p className='text-sm sm:text-base font-medium'>{minimumOrderQuantity}</p>
                        <p className='text-sm sm:text-base font-medium'> <FontAwesomeIcon className='text-red-500' icon={faBattery2}></FontAwesomeIcon> Minimum Order</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm sm:text-base font-medium'>{quantity}</p>
                        <p className='text-sm sm:text-base font-medium'> <FontAwesomeIcon className='text-green-500' icon={faBatteryFull}></FontAwesomeIcon> Available Quantity</p>
                    </div>
                </div>
                <p className='mb-1'>{description.slice(0, 125)+"..."}</p>
                <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary text-secondary w-1/2 rounded-sm">Book Now</button>
            </div>
        </div>
    );
};

export default Product;