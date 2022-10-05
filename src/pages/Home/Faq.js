import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from "../../assets/FAQ/faq.jpg"


const Faq = () => {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch("Faq.json")
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    return (
        <div id='faq' className='customContainer mt-3'>
            <h2 className='text-4xl text-gray-900 text-center pt-[96px] pb-[75px] font-bold'>Frequently Ask Qusetion</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div className='flex flex-col gap-2.5'>
                    {faq.map(f => <div key={f.questionNumber} tabindex="0" class="collapse collapse-arrow bg-base-100 text-gray-900">
                        <input type="checkbox" className='peer' />
                        <div class="collapse-title text-lg font-bold bg-white border-[1px]  border-zinc-300 "> <span className='mr-1.5 text-gray'>0{f.questionNumber}.</span>
                            {f.question}
                        </div>
                        <div class="collapse-content p-0 border-r-[1px] border-l-[1px]  border-zinc-300  bg-white  peer-checked:border-b-[1px]">
                            <div className='p-7 pb-5'>
                                <h5 className='font-bold mb-4 text-lg'>Answer :</h5>
                                <p>{f.Answer}</p>
                            </div>
                        </div>
                    </div>)}
                </div>
                <div>
                    <img className='max-w-full max-h-full' src={Image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;