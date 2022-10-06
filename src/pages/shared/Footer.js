import { faClock, faEarthAsia, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import facebook from "../../assets/Footer/Vector.png"
import instagrame from "../../assets/Footer/Vector-1.png"
import linkdin from "../../assets/Footer/Vector-2.png"
import youtube from "../../assets/Footer/Vector-3.png"

const Footer = () => {

    const year = new Date().getFullYear();

    const [email, setEmail] = useState("");

    const handleNewsLater = (e) => {
        e.preventDefault();
        setEmail("");
    }

    return (
        <footer className="bg-gray-900 text-white text-center sm:text-left px-10 sm:px-20">
            <div className="customContainer pb-5 pt-10 paddingDecrease">
                <div className="grid sm:grid-cols-12 gap-8 sm:gap-16 py-4">
                    <div className="sm:col-span-4 mb-4 mb-lg-0">
                        <h6 className="text-lg uppercase font-medium">Contact Us</h6>
                        <p className="font-italic my-5">Royal Flus Plumbing is the international trade association for plumbing product manufacturers, suppliers and certifier organizations.</p>
                        <ul className="list-unstyled text-center mb-0">
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon> <li className="my-1">715 Street, New York 10021 USA</li>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <li className="my-1">royalflushplumbing@gmail.com</li>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon> <li className="my-1">(800) 060-0730, (800) 060-0730</li>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <li className="my-1">Mon-Sat 10:00pm - 7:00pm</li>
                            </div>
                        </ul>
                    </div>
                    <div className="sm:col-span-2 mb-4 mb-lg-0">
                        <h6 className="text-lg uppercase font-medium mb-5">Shop</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Delivery Information</li>
                            <li className="mb-2">Privacy Policy</li>
                            <li className="mb-2">Brands</li>
                            <li className="mb-2">Contact Us</li>
                            <li className="mb-2">Returns</li>
                            <li className="mb-2">Site Map</li>
                        </ul>
                    </div>
                    <div className="sm:col-span-2 mb-4 mb-lg-0">
                        <h6 className="text-lg uppercase font-medium mb-5">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">Store Location</li>
                            <li className="mb-2">Order History</li>
                            <li className="mb-2">Wish List</li>
                            <li className="mb-2">Newsletter</li>
                            <li className="mb-2">Specials</li>
                            <li className="mb-2">Gift Certificates</li>
                            <li className="mb-2">Affiliate</li>
                        </ul>
                    </div>
                    <div className="sm:col-span-4 mb-lg-0">
                        <h6 className="text-lg uppercase font-medium mb-5">Newsletter</h6>
                        <p className='mb-4'>Be the first to know about exciting our tools collection. Incradible tools and much more.</p>
                        <form onSubmit={handleNewsLater}>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="input w-56 max-w-xs text-gray-900 font-medium rounded-none" />
                            <input className='btn btn-primary text-secondary ml-0 sm:ml-3 mt-4 sm:mt-0 rounded-none' type="submit" value="Subscribe" />
                        </form>
                        <p className='mt-5 mb-3'>Follow us on social networks</p>
                        <div className='flex justify-center sm:justify-start items-center gap-5'>
                            <div className='w-7'>
                                <img src={facebook} alt="" />
                            </div>
                            <div className='w-7'>
                                <img src={instagrame} alt="" />
                            </div>
                            <div className='w-7'>
                                <img src={linkdin} alt="" />
                            </div>
                            <div className='w-8'>
                                <img src={youtube} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-3">
                <div className="text-center">
                    <p className=" mb-0 py-2">Copyright © {year} Royal Flus Plumbing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;