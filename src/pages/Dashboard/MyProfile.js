import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [userInfo, setUserInfo] = useState({});
    const [userUpdateStatus, setUserUpdateStatus] = useState(0);

    useEffect(() => {
        fetch(`https://mysterious-river-90884.herokuapp.com/user?email=${email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [email, userUpdateStatus])

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const address = e.target.address.value;
        const email = e.target.email.value;
        const profession = e.target.profession.value;
        const description = e.target.description.value;
        const newUser = { name, address, email, profession, description };

        fetch(`https://mysterious-river-90884.herokuapp.com/userUpdate?email=${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Your user was updated`)
                    setUserUpdateStatus(userUpdateStatus + 1);
                    e.target.reset();
                } else {
                    toast.error(`${name} Please again fill the form`);
                }
            })
    }


    return (
        <div className='ml-5'>
            <h2 className='text-3xl font-medium py-3 w-48'>My Profile</h2>
            <div className='sm:w-1/2 bg-gray-200 p-10 sm:p-5 rounded-md mr-5 sm:mr-0'>
                <form onSubmit={handleUpdateUser}>
                    <div className='sm:flex justify-between'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered sm:w-56" defaultValue={userInfo?.name} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered sm:w-56" value={email} readOnly/>
                        </div>
                    </div>
                    <div className='sm:flex justify-between mt-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="Address" className="input input-bordered sm:w-56" defaultValue={userInfo?.address} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">profession</span>
                            </label>
                            <input type="text" name='profession' placeholder="Profession" className="input input-bordered sm:w-56" defaultValue={userInfo?.profession} required />
                        </div>
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' defaultValue={userInfo?.description} className="textarea" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Update Profile" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default MyProfile;