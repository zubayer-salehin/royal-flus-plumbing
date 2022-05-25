import { faCircleCheck, faFlag, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <div className='sm:mx-16 mb-24'>
            <h2 className='uppercase text-4xl text-gray-900 font-bold text-center mb-20'>Millions Business Trust Us</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 text-center gap-10'>
                <div>
                    <FontAwesomeIcon className='text-5xl text-blue-500' icon={faFlag}></FontAwesomeIcon>
                    <h3 className='text-5xl font-bold mb-2 mt-5 text-secondary'>72</h3>
                    <p className='text-xl text-secondary'>Countries</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-5xl text-blue-500' icon={faCircleCheck}></FontAwesomeIcon>
                    <h3 className='text-5xl font-bold mb-2 mt-5 text-secondary'>535+</h3>
                    <p className='text-xl text-secondary'>Complete Projects</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-5xl text-blue-500' icon={faUsers}></FontAwesomeIcon>
                    <h3 className='text-5xl font-bold mb-2 mt-5 text-secondary'>273+</h3>
                    <p className='text-xl text-secondary'>Happy Clients</p>
                </div>
                <div>
                    <FontAwesomeIcon className='text-5xl text-blue-500' icon={faThumbsUp}></FontAwesomeIcon>
                    <h3 className='text-5xl font-bold mb-2 mt-5 text-secondary'>432+</h3>
                    <p className='text-xl text-secondary'>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;