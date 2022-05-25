import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading/Loading';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [orderDeleteCount, setOrderDeleteCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:5000/allOrders", {
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

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='m-3 sm:m-0'>
            <h2 className='text-3xl font-medium py-3'>Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
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
                            <td>{order.orderDate}</td>
                            <td>{order.partsName}</td>
                            <td>{order.quantity}</td>
                            <td>
                                <button onClick={() => handleOrderDelete(order._id)} className='btn btn-error btn-sm'>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;