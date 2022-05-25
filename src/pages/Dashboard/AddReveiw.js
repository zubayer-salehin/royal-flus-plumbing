import React from 'react';
import { toast } from 'react-toastify';

const AddReveiw = () => {

    const handleReveiwAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const Address = e.target.address.value;
        const image = e.target.image.value;
        const rating = Number(e.target.rating.value);
        const description = e.target.description.value;
        const newReveiw = { name, Address, image, rating,description };

        fetch("http://localhost:5000/reveiws", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReveiw)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Reveiw Added`)
                    e.target.reset();
                } else {
                    toast.error(`${name} Please again fill the form`);
                }
            })
    }

    return (
        <div className='ml-5 '>
            <h2 className='text-3xl my-3 font-medium'>Add a Reveiw</h2>
            <div className='sm:w-1/2 bg-gray-200 p-10 sm:p-5 rounded-md mr-5'>
                <form onSubmit={handleReveiwAdd}>
                    <div className='sm:flex justify-between'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered sm:w-56" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="address" className="input input-bordered sm:w-56" required />
                        </div>
                    </div>
                    <div className='sm:flex justify-between mt-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Image URL" className="input input-bordered sm:w-56" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" name='rating' max="5" min="1" placeholder="Rating 1 out of 5" className="input input-bordered sm:w-56" required />
                        </div>
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Reveiw Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReveiw;