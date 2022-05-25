import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleProductAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const quantity = Number(e.target.quantity.value);
        const minimumOrderQuantity = 10;
        const description = e.target.description.value;
        const newProduct = { name, price, image, quantity,description,minimumOrderQuantity };

        fetch("http://localhost:5000/parts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Product Added`)
                    e.target.reset();
                } else {
                    toast.error(`${name} Product is Already exists`);
                }
            })
    }

    return (
        <div className='m-5 sm:m-0'>
            <h2 className='text-3xl font-medium py-3'>Add Tools</h2>
            <form onSubmit={handleProductAdd} className='sm:w-1/3 p-10 sm:p-6 bg-gray-200'>
                <input type="text" name='name' placeholder="Product Name" className="input w-full max-w-xs input-bordered mb-3" /><br />
                <input type="text" name='price' placeholder="Product Price" className="input w-full max-w-xs input-bordered mb-3" /><br />
                <input type="text" name='image' placeholder="Product Image Url " className="input w-full max-w-xs input-bordered mb-3" /><br />
                <input type="text" name='quantity' placeholder="Product qunatity" className="input w-full input-bordered max-w-xs mb-3" /><br />
                <textarea name='description' className="textarea w-full textarea-bordered" placeholder="Description"></textarea>
                <div className='text-center'>
                    <input className='btn btn-success mt-3 w-52' type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;