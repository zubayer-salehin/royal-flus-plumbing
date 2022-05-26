import React from 'react';
import { faBattery2, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Product = ({singleParts }) => {

    const { _id,name, image, price, quantity, minimumOrderQuantity, description } = singleParts
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 drop-shadow-lg">
            <figure><img className='w-60 h-60' src={image} alt="Shoes" /></figure>
            <div className="card-body text-secondary p-5">
                <h2 className="card-title">
                    {name}
                </h2>
                <h2 className='text-xl font-medium'>Price : <span className='text-secondary'>${price}</span></h2>
                <div className='flex g-5'>
                    <div className='text-center mr-5'>
                        <p className='font-bold'>{minimumOrderQuantity}</p>
                        <p className='font-medium'> <FontAwesomeIcon className='text-red-500' icon={faBattery2}></FontAwesomeIcon> Minimum Order</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold'>{quantity}</p>
                        <p className='font-medium'> <FontAwesomeIcon className='text-green-500' icon={faBatteryFull}></FontAwesomeIcon> Available Quantity</p>
                    </div>
                </div>
                <p className='mb-1'>{description.slice(0, 120)}</p>
                <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary text-secondary w-1/2">Book Now</button>
            </div>
        </div>
    );
};

export default Product;