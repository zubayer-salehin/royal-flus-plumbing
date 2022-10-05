import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading/Loading';
import SingleParts from './SingleParts';


const Products = () => {

    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://stroyka-server-side.onrender.com/parts", {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setParts(data)
                setLoading(false);
            })
    }, [])


    return loading ? <Loading loadingStatus="true"></Loading> :
        <div id='products'>
            <div className='customContainer'>
                <h2 className='text-4xl text-center pt-[80px] pb-[70px] text-gray-900 font-bold'>Our Products</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12'>
                    {parts.slice(-6).reverse().map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts}></SingleParts>)}
                </div>
            </div>
        </div>
};

export default Products;