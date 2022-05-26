import { faBattery2, faBatteryFull, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../shared/Footer';
import Loading from '../shared/Loading/Loading';


const todayDate = new Date();
const orderDate = todayDate.toDateString();

const Purchase = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [singleParts, setSingleParts] = useState({});
    const { _id, name, image, description, price, quantity, minimumOrderQuantity } = singleParts;
    const [orderQuantity, setOrderQuantity] = useState(10);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://mysterious-river-90884.herokuapp.com/parts/${id}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setSingleParts(data)
                setLoading(false);
            })
    }, [id]);

    const handleQuantityAdd = (e) => {
        e.preventDefault();
        setOrderQuantity(Number(orderQuantity) + 1);
    }

    const handleQuantityMinus = (e) => {
        e.preventDefault();
        setOrderQuantity(Number(orderQuantity) - 1);
    }

    const handleBooking = (e) => {
        e.preventDefault();
        if (quantity < orderQuantity) {
            toast.error(`You have order ${name} quantity ${quantity} or less than ${quantity}`);
            return;
        }
        if (minimumOrderQuantity > orderQuantity) {
            toast.error(`You have order ${name} quantity ${minimumOrderQuantity} or more than ${minimumOrderQuantity}`);
            return;
        }
        const order = {
            partsId: _id,
            name: user?.displayName,
            email: user?.email,
            partsName: name,
            orderDate: orderDate,
            quantity: orderQuantity,
            price: orderQuantity * price,
            phone: e.target.phone.value,
            address: e.target.address.value
        }

        fetch("https://mysterious-river-90884.herokuapp.com/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`${name} Parts is order`)
                } else {
                    toast.error(`${name} Parts is not book`);
                }
            })
    }


    return (loading ? <Loading loadingStatus="true"></Loading> :
        <>
            <div className='flex justify-center mb-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-8/12">
                    <div>
                        <figure className='flex justify-center mt-5'><img className='w-60' src={image} alt="Shoes" /></figure>
                        <div className="card-body text-gray-900 p-5">
                            <h2 className="card-title">
                                {name}
                            </h2>
                            <h2 className='text-xl font-medium'>Price : <span className='text-orange-500'>${price}</span></h2>
                            <div className='flex g-5'>
                                <div className='text-center mr-5'>
                                    <p className='font-bold'>{minimumOrderQuantity}</p>
                                    <p className='font-medium'> <FontAwesomeIcon className='text-red-500' icon={faBattery2}></FontAwesomeIcon> Minimum Order</p>
                                </div>
                                <div className='text-center'>
                                    <p className='font-bold'>{quantity}</p>
                                    <p className='font-medium'> <FontAwesomeIcon className='text-green-500' icon={faBatteryFull}></FontAwesomeIcon> Available Quantity</p>
                                </div>
                            </div>
                            <p className='mb-1'>{description}</p>
                        </div>
                    </div>
                    <div className="card-body border-l-2">
                        <h2 className='text-2xl mb-5 font-bold text-center'>Order Form</h2>
                        <form onSubmit={handleBooking}>
                            <div className='flex justify-between'>
                                <div className="form-control">
                                    <label className="label h-12 font-medium">
                                        <span className="label-text">Name : </span>
                                    </label>
                                    <label className="label h-12 font-medium mt-3">
                                        <span className="label-text">Email : </span>
                                    </label>
                                    <label className="label h-12 font-medium mt-3">
                                        <span className="label-text">Parts Name : </span>
                                    </label>
                                    <label className="label h-12 font-medium mt-3">
                                        <span className="label-text">Quantity : </span>
                                    </label>
                                    <label className="label h-12 font-medium mt-3">
                                        <span className="label-text">Phone : </span>
                                    </label>
                                    <label className="label h-12 font-medium mt-3">
                                        <span className="label-text">Address : </span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <input type="text" defaultValue={user.displayName} className="input input-bordered w-64" disabled readOnly />
                                    <input type="text" defaultValue={user.email} disabled className="input input-bordered mt-3" readOnly />
                                    <input type="text" defaultValue={name} disabled className="input input-bordered mt-3" readOnly />
                                    <div>
                                        <button onClick={handleQuantityMinus} className={`h-12 px-4 rounded mr-1 bg-gray-200 ${minimumOrderQuantity >= orderQuantity ? "btn-disabled" : ""}`}  ><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>

                                        <input onChange={(e) => setOrderQuantity(e.target.value)} type="text" value={orderQuantity} className="input input-bordered w-20 text-center mt-3 focus:outline-none" />

                                        <button onClick={handleQuantityAdd} className={`h-12 px-4 bg-gray-200 rounded ml-1 ${quantity <= orderQuantity ? "btn-disabled" : ""}`}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                                    </div>
                                    <input type="text" name="phone" placeholder='Phone Number' className="input input-bordered mt-3" required />
                                    <input type="text" name="address" placeholder='Address' className="input input-bordered mt-3" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-success text-white capitalize' type="submit" value="Order Place" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;