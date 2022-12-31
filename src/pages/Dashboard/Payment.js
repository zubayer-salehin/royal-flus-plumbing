import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51L1LdlFkK6QGOuLXCBCooyA8PvCjeda2eY9cY8BEL5I6fsuz7kvLbqBeNtu65yeVR7stE1GR3xxZrrTf3qrw5qGJ00xmWY3tm7');

    const { id } = useParams();
    const url = `https://stroyka-server-side.vercel.app/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    return (
        <>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Payment</h2>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl ml-10 mt-5 mb-5">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 className="card-title">Please Pay for {order.partsName} Parts</h2>
                    <h2 className=" text-secondary font-medium">{order.partsName} quantity : {order.quantity}</h2>
                    <p className='font-medium'>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 ml-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;