import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';

const MyOrders = () => {

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [orderDeleteCount, setOrderDeleteCount] = useState(0);
    const email = user?.email;
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`https://stroyka-server-side-production.up.railway.app/orders?email=${email}`, {
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
            .then(data => {
                setOrders(data)
                setLoading(false);
            })
    }, [email, orderDeleteCount, navigate])

    const handleOrderDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://stroyka-server-side-production.up.railway.app/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setOrderDeleteCount(orderDeleteCount + 1);
                        }
                    })
            }
        })
    }


    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='m-3 sm:m-0'>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>My Booking</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full text-center">
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
                                        <button className='text-success'>Payment Successfull</button>
                                    </>
                                    :
                                    <>
                                        <Link to={`/dashboard/payment/${order._id}`} className='btn btn-sm btn-success w-16 rounded-sm mr-3.5'>Pay</Link>
                                        <button className='btn btn-error btn-sm rounded-sm' onClick={() => handleOrderDelete(order._id)}>Cancle</button>
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