import React from 'react';
import Banner from './Banner';
import Location from './Location';
import AllParts from './AllParts';
import Reveiw from './Reveiw';
import Summary from './Summary';
import Works from './Works';
import Footer from "../shared/Footer"
import Faq from './Faq';

const Home = () => {
    return (
        <>
            <div>
                <Banner></Banner>
                <AllParts></AllParts>
                <Summary></Summary>
                <Works></Works>
                <Reveiw></Reveiw>
                <Faq></Faq>
                <Location></Location>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;