import React from 'react';
import Banner from './Banner';
import Location from './Location';
import AllParts from './AllParts';
import Reveiw from './Reveiw';
import Summary from './Summary';
import Works from './Works';
import Footer from "../shared/Footer"

const Home = () => {
    return (
        <>
            <div className='px-4 sm:px-12'>
                <Banner></Banner>
                <AllParts></AllParts>
                <Summary></Summary>
                <Reveiw></Reveiw>
                <Works></Works>
                <Location></Location>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;