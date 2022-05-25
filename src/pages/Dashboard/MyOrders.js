import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        fetch(`http://localhost:5000/orders?email=${email}`, {
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
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setOrderDeleteCount(orderDeleteCount + 1);
                }
            })
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
                                        <label htmlFor="order-delete-confirm" className='btn btn-error btn-sm mr-2'>Cancle</label>
                                        <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm btn-success w-16'>Pay</Link>
                                        <input type="checkbox" id="order-delete-confirm" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle overscroll-none">
                                            <div className="modal-box">
                                                <h3 className="text-xl font-medium">Are you sure ?</h3>
                                                <p className="py-4 text-red-500">
                                                    Do you really want to delete this order ? This process cannot <br /> be undone
                                                </p>
                                                <div className="modal-action">
                                                    <label htmlFor="order-delete-confirm" className="btn btn-success">Cancle</label>
                                                    <label onClick={() => handleOrderDelete(order._id)} htmlFor="order-delete-confirm" className="btn btn-error">Delete</label>
                                                </div>
                                            </div>
                                        </div>
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