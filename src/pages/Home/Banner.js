import React from 'react';
import { EffectFade, Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from "../../assets/Banner/slide-1.jpg"
import slider2 from "../../assets/Banner/slide-2.jpg"
import slider3 from "../../assets/Banner/slide-3.jpg"


const Banner = () => {
    return (
        <Swiper
            modules={[EffectFade, Navigation, A11y, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            effect={"fade"}
            loop={true}
            navigation
            slidesPerView={1}>
            <SwiperSlide className='relative'>
                <img className='bannerImage max-w-full' src={slider1} alt="" />
                <div className='absolute bannerImagePositionSet'>
                    <h2 className='text-left text-3xl sm:text-5xl font-bold text-white bannerTitleStyle smallDeviceTitle'>Big Choice Of <span className='inline sm:block'>Plumbing Products</span></h2>
                    <p className='pt-6 pb-6 hidden sm:block text-white'>Most plumbers think of their website as an online brochure. In reality, <br /> your plumbing company’s website is a 24-hour virtual sales rep, <br /> capable of generating massive amounts of leads and sales.</p>
                    <div className='text-left mt-5 sm:mt-0'>
                        <button className='px-7 py-3.5 mr-3 sm:mr-5 bg-primary text-secondary rounded-sm smallDeviceButton'>Shop Now</button>
                        <button className='px-7 py-3.5 bg-secondary text-white rounded-sm smallDeviceButton'>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='bannerImage' src={slider2} alt="" />
                <div className='absolute bannerImagePositionSet'>
                    <h2 className='text-left text-3xl sm:text-5xl font-bold text-white bannerTitleStyle smallDeviceTitle'>Screw Driver <span className='inline sm:block'>Professional Tools</span></h2>
                    <p className='pt-6 pb-6 hidden sm:block text-white'>Most plumbers think of their website as an online brochure. In reality, <br /> your plumbing company’s website is a 24-hour virtual sales rep, <br /> capable of generating massive amounts of leads and sales.</p>
                    <div className='text-left mt-5 sm:mt-0'>
                        <button className='px-7 py-3.5 mr-3 sm:mr-5 bg-primary text-secondary rounded-sm smallDeviceButton'>Shop Now</button>
                        <button className='px-7 py-3.5 bg-secondary text-white rounded-sm smallDeviceButton'>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img className='bannerImage' src={slider3} alt="" />
                <div className='absolute bannerImagePositionSet'>
                    <h2 className='text-left text-3xl sm:text-5xl font-bold text-white bannerTitleStyle smallDeviceTitle'>One More <span className='inline sm:block'>Unique Header</span></h2>
                    <p className='pt-6 pb-6 hidden sm:block text-white'>Most plumbers think of their website as an online brochure. In reality, <br /> your plumbing company’s website is a 24-hour virtual sales rep, <br /> capable of generating massive amounts of leads and sales.</p>
                    <div className='text-left mt-5 sm:mt-0'>
                        <button className='px-7 py-3.5 mr-3 sm:mr-5 bg-primary text-secondary rounded-sm smallDeviceButton'>Shop Now</button>
                        <button className='px-7 py-3.5 bg-secondary text-white rounded-sm smallDeviceButton'>About Us</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;