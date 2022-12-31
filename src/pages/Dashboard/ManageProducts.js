import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../shared/Loading/Loading';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [partsCount, setPartsDeleteCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://stroyka-server-side.vercel.app/parts")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false);
            })

    }, [partsCount])

    const handlePartsDelete = (id) => {


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
                fetch(`https://stroyka-server-side.vercel.app/parts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            setPartsDeleteCount(partsCount + 1);
                        }
                    })
            }
        })
    }

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='m-3 sm:m-0'>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Manage Products</h2>
            <div className="overflow-x-auto mt-2">
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
                                <button className='btn btn-error btn-sm rounded-sm' onClick={() => handlePartsDelete(singleParts._id)}>Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;