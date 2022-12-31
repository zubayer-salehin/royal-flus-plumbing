import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';

const AddReveiw = () => {

    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [user] = useAuthState(auth);
    const email = user?.email;

    useEffect(() => {
        setLoading(true);
        fetch(`https://stroyka-server-side.onrender.com/user?email=${email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
                setLoading(false);
            })

    }, [email])

    const handleReveiwAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const Address = e.target.address.value;
        const image = userInfo?.image;
        const rating = Number(e.target.rating.value);
        const description = e.target.description.value;
        const newReveiw = { name, Address, image, rating, description };

        fetch("https://stroyka-server-side.onrender.com/reveiws", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReveiw)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    e.target.reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${name} Reveiw Added`,
                        showConfirmButton: true,
                    })
                } else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: `${name} Please again fill the form`,
                        showConfirmButton: true,
                    })
                }
            })
    }

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='m-3 sm:m-0'>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Add Review</h2>
            <div className='py-7' style={{ backgroundColor: "#f4f7fc" }}>
                <form className='sm:w-1/2 bg-white mx-5 p-5 rounded-2xl' onSubmit={handleReveiwAdd}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={userInfo?.name} placeholder="Name" className="input input-bordered rounded-sm " required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name='address' defaultValue={userInfo?.address} placeholder="address" className="input input-bordered rounded-sm " required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="number" name='rating' max="5" min="1" placeholder="Rating 1 out of 5" className="input input-bordered rounded-sm " required />
                    </div>
                    <div className="form-control mt-2.5">
                        <label className="label">
                            <span className="label-text">Tell Us About Services</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered rounded-sm" placeholder="Tell Us"></textarea>
                    </div>
                    <div className="form-control mt-8">
                        <input className='btn btn-success capitalize rounded-sm' type="submit" value="Reveiw Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReveiw;