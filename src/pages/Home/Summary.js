import React from 'react';
import { faCircleCheck, faFlag, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Summary = () => {
    return (
        <div id='summary' className='py-16 sm:py-32'>
            <div className='summaryBackgroundImageSet'>
                <div className='customContainer'>
                    <h2 className='pt-[80px] pb-[70px] uppercase text-4xl text-white font-bold text-center'>Millions Business Trust Us</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-10'>
                        <div>
                            <FontAwesomeIcon className='text-5xl text-white' icon={faFlag}></FontAwesomeIcon>
                            <h3 className='text-5xl font-bold mb-2 mt-5 text-white'>72</h3>
                            <p className='text-xl text-white'>Countries</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-5xl text-white' icon={faCircleCheck}></FontAwesomeIcon>
                            <h3 className='text-5xl font-bold mb-2 mt-5 text-white'>535+</h3>
                            <p className='text-xl text-white'>Complete Projects</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-5xl text-white' icon={faUsers}></FontAwesomeIcon>
                            <h3 className='text-5xl font-bold mb-2 mt-5 text-white'>273+</h3>
                            <p className='text-xl text-white'>Happy Clients</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className='text-5xl text-white' icon={faThumbsUp}></FontAwesomeIcon>
                            <h3 className='text-5xl font-bold mb-2 mt-5 text-white'>432+</h3>
                            <p className='text-xl text-white'>Feedbacks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;