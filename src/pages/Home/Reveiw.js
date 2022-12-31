import React, { useEffect, useState } from 'react';
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Loading from '../shared/Loading/Loading';


const Reveiw = () => {

    const [reveiws, setReveiws] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://stroyka-server-side.vercel.app/reveiws", {
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setReveiws(data)
                setLoading(false);
            })
    }, [])


    return (
        <div id="testimonial" className='pt-[40px]'>
            <div className="bg-[url('/src/assets/Testimonial/testimonialBackgroundImage.jpg')] bg-cover bg-bottom">
                <div className="customContainer pb-[60px]">
                    <h2 className='text-4xl text-center font-bold text-white pt-[70px] pb-[60px]'>Testimonials</h2>
                    {loading ? <Loading loadingStatus="true"></Loading> :
                        <Swiper className='px-3'
                            modules={[Pagination, A11y, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                            pagination={{ clickable: true }}>
                            {reveiws.slice(-6).reverse().map(rev => <SwiperSlide key={rev._id}>
                                <div className="card bg-base-100 rounded-sm">
                                    <div className="card-body text-secondary">
                                        <div className='flex my-2'>
                                            <div className="rounded-full ring ring-indigo-500">
                                                {
                                                    rev.image
                                                        ?
                                                        <img className='w-16 rounded-full' src={rev.image} alt="" />
                                                        :
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-[63px] h-[63px] border-2  text-slate-800 m-auto bg-white bg-opacity-50 text-4xl rounded-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                                                }
                                            </div>
                                            <div className='ml-4'>
                                                <h5 className='text-xl text-bold'>{rev.name}</h5>
                                                <p>{rev.Address}</p>
                                            </div>
                                        </div>
                                        <p>{rev.description.slice(0, 170) + "..."}</p>
                                        <div>
                                            <p className='inline font-medium'>Ratings : </p>
                                            <div className="rating rating-sm inline">
                                                {[...Array(5)].map((rat, ind) => <input key={ind} type="radio" name="rating-2" className={`mask mask-star-2 ${rev.rating >= ind + 1 ? "bg-orange-600" : "bg-orange-300"}`} />)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                            <div className='w-full h-20 none'>
                            </div>
                        </Swiper>}
                </div >
            </div>
        </div>
    )
};

export default Reveiw;