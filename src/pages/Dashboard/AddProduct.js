import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleProductAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const quantity = Number(e.target.quantity.value);
        const minimumOrderQuantity = 10;
        const description = e.target.description.value;
        const newProduct = { name, price, image, quantity, description, minimumOrderQuantity };

        fetch("https://stroyka-server-side.vercel.app/parts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    e.target.reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${name} Product Added`,
                        showConfirmButton: true,
                    })
                } else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: `${name} Product is Already exists`,
                        showConfirmButton: true,
                    })
                }
            })
    }

    return (
        <div className='m-3 sm:m-0'>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Add Product</h2>
            <div className='py-7 mb-7' style={{ backgroundColor: "#f4f7fc" }}>
                <form onSubmit={handleProductAdd} className='sm:w-1/2 bg-white mx-5 p-5 rounded-2xl'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='name' placeholder="product name" className="input w-full input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="text" name='price' placeholder="product price" className="input w-full input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input type="text" name='image' placeholder="product image url " className="input w-full input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Product qunatity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="product qunatity" className="input w-full input-bordered rounded-sm" required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Product Description</span>
                        </label>
                        <textarea name='description' className="textarea w-full textarea-bordered rounded-sm" placeholder="Tell Us About This Product" required></textarea>
                    </div>
                    <div className='text-center'>
                        <input className='btn btn-success capitalize rounded-sm w-full mt-8' type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddProduct;