import React from 'react';
import background from "../../assets/photo-1519389950473-47ba0277781c.jpeg"

const Banner = () => {
    return (
        <div className="hero mb-12 pt-10 sm:mb-14 sm:pt-14">
            <div className="hero-content flex-col lg:flex-row-reverse p-1 sm:p-4 mb-4 sm:mb-0">
                <img src="https://img.freepik.com/free-photo/sanitary-technician-gesturing-thumb-up_23-2147772204.jpg?t=st=1653495216~exp=1653495816~hmac=c400ae679c4e8f0da9178edfd1bbfc820918e692202517499546a6c7d97c773d&w=740" className="sm:max-w md:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='text-gray-900'>
                    <h1 className="text-5xl font-bold leading-tight text-secondary">Big Choice to Plumbing Tools</h1>
                    <p className="py-6 text-secondary mr-5">Royal Flus Plumbing is the international trade association for plumbing product manufacturers, suppliers and certifier organizations. Its member companies produce most of the nation’s plumbing products.</p>
                    <button type="button" className="btn btn-primary px-8 border-0 font-bold text-secondary">
                        GET STARED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;