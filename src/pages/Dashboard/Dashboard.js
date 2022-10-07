import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHouseChimney, faList, faListCheck, faPlus, faUserCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Footer from '../shared/Footer';


const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <>
            <div className="drawer drawer-mobile mb-24">
                <input id="sidebar-open" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content sm:mr-5 sm:ml-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="sidebar-open" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 border-r-2 bg-white sm:bg-transparent">
                        <li className='font-bold border-b-2 border-primary'><div><FontAwesomeIcon className='text-secondary' icon={faHouseChimney}></FontAwesomeIcon> Dashboard</div></li>
                        <li className='border-b-2'><Link className='font-medium' to="/dashboard"> <FontAwesomeIcon className='text-secondary' icon={faUserCheck}></FontAwesomeIcon> My Profile</Link></li>
                        {!admin ?
                            <>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/myOrders"> <FontAwesomeIcon className='text-secondary' icon={faCartShopping}></FontAwesomeIcon> My Booking</Link></li>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/addReveiw"> <FontAwesomeIcon className='text-secondary' icon={faCommentDots}></FontAwesomeIcon> Add Reveiw</Link></li>
                            </>
                            :
                            <>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/manageOrders"> <FontAwesomeIcon className='text-secondary' icon={faList}></FontAwesomeIcon> Manage Booking</Link></li>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/addProduct"> <FontAwesomeIcon className='text-secondary' icon={faPlus}></FontAwesomeIcon>Add Product</Link></li>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/manageProducts"> <FontAwesomeIcon className='text-secondary' icon={faListCheck}></FontAwesomeIcon> Manage Product</Link></li>
                                <li className='border-b-2'><Link className='font-medium' to="/dashboard/makeAdmin"> <FontAwesomeIcon className='text-secondary' icon={faUserPlus}></FontAwesomeIcon> Make Admin</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;