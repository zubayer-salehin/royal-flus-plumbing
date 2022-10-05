import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [orderDeleteCount, setOrderDeleteCount] = useState(0);
    const email = user?.email;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://mysterious-river-90884.herokuapp.com/orders?email=${email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate("/");
                }
                return res.json();
            })
            .then(data => setOrders(data))
    }, [email, orderDeleteCount, navigate])

    const handleOrderDelete = (id) => {
        const browserConfirm = window.confirm("Are you sure You want to delete");
        if (browserConfirm) {
            fetch(`https://mysterious-river-90884.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setOrderDeleteCount(orderDeleteCount + 1);
                    }
                })
        }
    }


    return (
        <div className='p-3'>
            <h2 className='text-3xl font-medium py-3'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.partsName}</td>
                            <td>{order.quantity}</td>
                            <td>
                                {order.paid === true ?
                                    <>
                                        <span className='text-success mr-2'>Paid,</span>
                                        <span className="text-orange-500"> transaction Id: <br />{order.transactionId}</span>
                                    </>
                                    :
                                    <>
                                        <button className='btn btn-error btn-sm mr-2' onClick={() => handleOrderDelete(order._id)}>Cancle</button>
                                        <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm btn-success w-16'>Pay</Link>
                                    </>
                                }
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;