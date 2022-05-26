import React, { useEffect, useState } from 'react';
import Loading from '../shared/Loading/Loading';
import SingleParts from './SingleParts';

const Products = () => {

    const [parts, setParts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://mysterious-river-90884.herokuapp.com/parts")
            .then(res => res.json())
            .then(data => {
                setParts(data)
                setLoading(false);
            })
    }, [])
    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='mx-3 sm:mx-10 mb-24'>
            <h2 className='text-4xl text-center py-10 text-gray-900 font-bold'>Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12'>
                {parts.slice(-6).reverse().map(singleParts => <SingleParts key={singleParts._id} singleParts={singleParts}></SingleParts>)}
            </div>
        </div>
    );
};

export default Products;