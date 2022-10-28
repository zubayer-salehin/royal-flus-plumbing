import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../shared/Loading/Loading';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [orderDeleteCount, setOrderDeleteCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://stroyka-server-side-production.up.railway.app/allOrders", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false);
            })

    }, [orderDeleteCount])

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
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Manage Booking</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.email}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.partsName}</td>
                            <td>{order.quantity}</td>
                            <td className='font-medium'>{order.paid === true ?
                                <button className='btn btn-sm btn-success text-white rounded-sm'>Paid</button>
                                :
                                <button className='btn btn-sm bg-primary border-0 rounded-sm  text-white hover:bg-primary hover:text-white'>Unpaid</button>
                            }</td>
                            <td className='px-0'>
                                <button className='btn btn-sm btn-error rounded-sm' onClick={() => handleOrderDelete(order._id)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;