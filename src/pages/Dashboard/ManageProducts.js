import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading/Loading';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [partsCount, setPartsDeleteCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://stroyka-server-side.onrender.com/parts")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false);
            })

    }, [partsCount])

    const handlePartsDelete = (id) => {
        fetch(`https://stroyka-server-side.onrender.com/parts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setPartsDeleteCount(partsCount + 1);
                }
            })
    }

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='m-3 sm:m-0'>
            <h2 className='text-3xl font-medium py-3'>Manage Tools</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((singleParts, index) => <tr key={singleParts._id}>
                            <th>{index + 1}</th>
                            <td className='flex justify-center'> <img className='w-8 rounded-full' src={singleParts.image} alt="" /> </td>
                            <td>{singleParts.name}</td>
                            <td>{singleParts.price}</td>
                            <td>{singleParts.quantity}</td>
                            <td>
                               <button className='btn btn-error btn-sm' onClick={() => handlePartsDelete(singleParts._id)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;