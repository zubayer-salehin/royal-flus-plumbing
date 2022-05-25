import React from 'react';

const MyPortofolio = () => {
    return (
        <div className='ml-32 my-5 p-8 bg-secondary text-white sm:w-4/6 rounded-md'>
            <p className='text-xl font-medium mb-2'>Hi There</p>
            <h3 className='text-4xl font-bold mb-2'>I am Zubayer Salehin</h3>
            <h2 className='text-2xl font-medium mb-3'>I am Web Developer</h2>
            <h5>Email Address : <span className='text-blue-500'>zubearsalehin@gamil.com</span></h5>
            <h5>Education : Kishoregonj Polytechnic Institute,Computer Department, 5th Semister</h5>
            <h2 className='text-2xl font-medium mt-3'>Look What Can I Do ?</h2>
            <ul className='list-disc ml-5'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>BOOTSTRAP</li>
                <li>TAILWIND</li>
                <li>REACT</li>
                <li>MONGO DB</li>
                <li>EXPRESS</li>
                <li>NODE JS</li>
            </ul>
            <h2 className='text-xl font-medium mt-3'>Live Website Link : </h2>
            <p className='mt-2'>1. <a className='link' target="_blank" href="https://orgafresh-fruites.web.app/home">orgafresh-fruites.web.app</a></p>
            <p className='mt-2'>2. <a className='link' target="_blank" href="https://strong-crisp-c489e7.netlify.app/Home">Digital Watch Reveiw Website</a></p>
            <h2 className='text-xl font-medium mt-3 mb-1'>Description : </h2>
            <p>My name is zubayer salehin.I will learn web development.I am daily learn,practice and working 10-12 hour approx. Web developers have two main career paths to choose from, depending on work style and level of experience. You might opt for a stable, salaried position, or enjoy more autonomy as an independent contractor.Programming skills will always be in demand. Complement your coding prowess with a strong work ethic, and you’ll build a career that comes with high pay and even higher job satisfaction.</p>
        </div>
    );
};

export default MyPortofolio;