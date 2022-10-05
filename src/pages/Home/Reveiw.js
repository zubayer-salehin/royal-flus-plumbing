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
        fetch("https://stroyka-server-side.onrender.com/reveiws", {
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


    return loading ? <Loading loadingStatus="true"></Loading> :
        <div id="testimonial" className='pt-[40px]'>
            <div className="bg-[url('/src/assets/Testimonial/testimonialBackgroundImage.jpg')] bg-cover bg-bottom">
                <div className="customContainer pb-[60px]">
                    <h2 className='text-4xl text-center font-bold text-white pt-[70px] pb-[60px]'>Testimonials</h2>
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
                        {reveiws.slice(-6).reverse().map(rev => <SwiperSlide>
                            <div key={rev._id} className="card bg-base-100 rounded-sm">
                                <div className="card-body text-secondary">
                                    <div className='flex my-2'>
                                        <div className="rounded-full ring ring-indigo-500">
                                            <img className='w-16 rounded-full' src={rev.image} alt="" />
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
                    </Swiper>
                </div >
            </div>
        </div>
};

export default Reveiw;