import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';



const MyProfile = () => {

    const [loading, setLoading] = useState(true);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [userInfo, setUserInfo] = useState({});
    const [userUpdateStatus, setUserUpdateStatus] = useState(0);
    const imageStorageKey = "bbb41293b29baeed6436287ccb9bbf00"
    const [userPicture, SetUserPicture] = useState("");


    const handleFileSelected = async (e) => {
        const file = Array.from(e.target.files)
        const image = file[0];
        const formData = new FormData();
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        await fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    SetUserPicture(result.data.url);
                }
            })
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://mysterious-river-90884.herokuapp.com/user?email=${email}`, {
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

    }, [email, userUpdateStatus])


    const handleUpdateUser = async (e) => {
        setLoading(true);
        e.preventDefault();
        const name = e.target.name.value;
        const address = e.target.address.value;
        const email = e.target.email.value;
        const profession = e.target.profession.value;
        const description = e.target.description.value;
        const newUser = {
            name, address, email, profession, description,
            image: userInfo?.image ? userInfo?.image : userPicture
        };

        fetch(`https://mysterious-river-90884.herokuapp.com/userUpdate?email=${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserUpdateStatus(userUpdateStatus + 1);
                    e.target.reset();
                    setLoading(false);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${name} Your Profile was updated`,
                        showConfirmButton: true,
                    })
                } else {
                    setLoading(false);
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
        <div>
            <h2 className='pl-3 sm:pl-0 pt-5 pb-3 text-2xl font-bold border-b-2'>My Profile</h2>
            <form onSubmit={handleUpdateUser} className='sm:flex py-10 px-8 sm:px-16'>
                <div className='sm:w-3/12 pb-5 sm:pb-0 text-center sm:text-left 2xl:text-center'>
                    <div className="avatar sm:ml-3 mb-10">
                        <div className="sm:w-36 rounded-full">
                            {
                                userInfo?.image
                                    ?
                                    <img src={userInfo?.image} alt='' />
                                    :
                                    userPicture
                                        ?
                                        <img src={userPicture} alt="" />
                                        :
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-[144px] h-[144px] border-2  text-slate-800 m-auto bg-white bg-opacity-50 text-4xl rounded-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                            }

                        </div>
                    </div>
                    <div>
                        <label className='bg-secondary py-2 px-8 text-white rounded-3xl' htmlFor="filePicker">
                            Upload Photo
                        </label>
                        <input type="file" onChange={handleFileSelected} id="filePicker" name='file' style={{ visibility: "hidden" }} />
                    </div>
                </div>
                <div className='sm:w-9/12'>
                    <div className='grid grid-cols-1 gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Full Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={userInfo?.name} placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label none">
                                <span className="label-text font-medium">Email Address<span className='ml-2 text-gray-400'>(Email Address cannot be change)</span></span>
                            </label>
                            <input type="text" name='email' defaultValue={userInfo?.email} placeholder="Email Address" className="input input-bordered" readOnly disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Profession</span>
                            </label>
                            <input type="text" name='profession' defaultValue={userInfo?.profession} placeholder="Profession" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Permanent Address</span>
                            </label>
                            <input type="text" name='address' defaultValue={userInfo?.address} placeholder="Permanent Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">About Your Self</span>
                            </label>
                            <textarea name='description' defaultValue={userInfo?.description} className="textarea textarea-bordered h-28" placeholder="Description"></textarea>
                        </div>
                        <div className='text-center'>
                            <input className='w-64 py-3 mt-3 text-white bg-secondary rounded' type="submit" value="Update Profile" />
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default MyProfile;