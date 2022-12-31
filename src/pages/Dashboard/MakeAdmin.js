import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../shared/Loading/Loading';

const MakeAdmin = () => {

    const [users, setUsers] = useState([]);
    const [userDeleteCount, setUserDeleteCount] = useState(0);
    const [adminCreate, setAdminCreate] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://stroyka-server-side.vercel.app/allUser", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false);
            })

    }, [userDeleteCount, adminCreate])

    const handleUserDelete = (id, uid) => {

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
                fetch(`https://stroyka-server-side.vercel.app/user?id=${id}&&uid=${uid}`, {
                    method: 'DELETE',
                    headers: {
                        "content-type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setUserDeleteCount(userDeleteCount + 1);
                        }
                    })
            }
        })
    }

    const handleUserAdmin = (email) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Making an user as Admin will grant them enhanced privileges. Are you sure you want to make as admin?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Make as Admin'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://stroyka-server-side.vercel.app/user/admin/${email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire(
                                'Admin Done',
                                `This ${email} Person was now a website Admin.`,
                                'success'
                            )
                            setAdminCreate(adminCreate + 1)
                        }
                    })
            }
        })
    }

    return (loading ? <Loading loadingStatus="true"></Loading> :
        <div className='mx-4 sm:mx-0'>
            <h2 className='pt-5 pb-3 text-2xl font-bold'>Make Admin</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>admin list</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((singleUser, index) => <tr key={singleUser._id}>
                            <th>{index + 1}</th>
                            <td>{singleUser.email}</td>
                            <td>
                                {singleUser.role !== "admin" ? <button onClick={() => handleUserAdmin(singleUser.email)} className='btn btn-success btn-sm rounded-sm'>Make Admin</button> : <span className='text-success'>Already Admin</span>}
                            </td>
                            <td>
                                <button className='btn btn-error btn-sm rounded-sm' onClick={() => handleUserDelete(singleUser._id, singleUser.uid)}>Remove user</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;