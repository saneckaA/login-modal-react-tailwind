import React from 'react';
import facebook from '../images/facebook.png';
import google from '../images/google.png';

const Content = () => {
    return (
        <div className='flex flex-col p-6 md:p-20 '>
            <h2 className='font-mono mb-5 text-4xl font-bold'>Log In</h2>
            <p className='font-sans font-light text-gray-600 max-w-sm mb-12'>Log into your account to upload or download pictures, videos or music.</p>
            <div>
                <input type='text' placeholder='Enter your email address'
                    className='w-full border border-gray-400 rounded-md p-6 placeholder:font-sans placeholder:font-light'
                />
            </div>
            <div className='flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 items-center justify-between'>
                <div className='font-thin text-cyan-700'>Forgot password?</div>
                <button className='w-full md:w-auto p-6 bg-cyan-700 rounded-md text-white flex flex-row 
                justify-center items-center space-x-4 font-sans font-bold shadow-sm px-9
                hover:bg-opacity-90 hover:shadow-lg transition hover:translate-y-0.5 duration-150 '>
                    <span>Next</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-7"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24vH0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="13" y1="18" x2="19" y2="12" />
                        <line x1="13" y1="6" x2="19" y2="12" />
                    </svg>
                </button>

            </div>
            <div className='border-b border-gray-300 mt-6'></div>
            <div className='flex flex-col items-center mt-6 space-y-5'>
                <div className='text-sm text-gray-400 font-thin'>Or log in with</div>
                <div className='flex flex-row space-x-5'>
                    <button className='border border-gray-400 px-8 py-2 rounded-md flex items-center justify-center space-x-2 
                    shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150 md:w-1/2'>
                        <img className='w-8' src={facebook} />
                        <span>Facebook</span>
                    </button>
                    <button className='border border-gray-400 px-8 py-2 rounded-md flex flex-row items-center justify-center space-x-2
                    shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0 transition duration-150'>
                        <img className='w-8' src={google} />
                        <span>Google</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Content;