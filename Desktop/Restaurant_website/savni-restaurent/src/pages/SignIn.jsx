import React from 'react'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'

const SignIn = () => {
    return (
        <div>
        <Navbar />
        <div
            className='mt-12 ml-40 mb-40 mr-14 '
        >
            {/* div for card */}
            <div
                className='w-full h-[700px]  bg-white shadow-lg rounded-3xl mx-auto 
                flex
              '
            >
                {/* left div */}
                <div
                    className='w-[65%] 
                    rounded-tl-3xl rounded-bl-3xl
                    ml-20 
                  '
                >
                    <h1
                    className='text-5xl font-semibold mt-12 mb-12'
                    >
                        Sign In
                    </h1>

                    <form
                    className='flex flex-col space-y-4 mt-12  mr-12 mb-12 '
                    >
                        <span
                            className='flex space-x-12 mt-4 mb-8 '
                        >
                            <span
                            className='flex space-x-2'
                            >
                                <input type="radio" name="option" id="customer"
                                    className='cursor-pointer
                                    '
                                />
                                <label htmlFor="email">As a Customer</label>
                            </span>

                            <span
                                className='flex space-x-2'
                            >
                                <input type="radio" name="option" id="rider"
                                    className='cursor-pointer'
                                />
                                <label htmlFor="email">As a Rider</label>
                            </span>
                        </span>
                        {/* Inputs for email and for password */}
                        <input type="email"
                            placeholder='Email Address'
                            className='
                            px-4 py-2 border-2 border-[#828282]
                            focus:outline-none
                            '
                        />
                        <input type="password"
                            placeholder='Password'
                            className='
                            px-4 py-2 border-2 border-[#828282]
                            focus:outline-none
                            '
                        />
                        {/* Forgot Password */}
                        <span
                        className='ml-auto'
                        >
                            <a href="#"
                                className='mt-4 mb-40
                                text-[#5C6574]
                                '
                            >Forgot Password?</a>
                        </span>

                        {/* Sign In Button */}
                        <button
                            className='bg-[#11111F] text-white
                            px-12 py-5 mt-20    
                            '
                        >Sign In</button>

                        {/* Sign Up */}
                        <span
                        className='py-4 text-center '
                        >
                            Don&apos;t have an account? <a href="#"
                                className='
                                font-semibold
                                '
                            >Sign Up</a>
                        </span>

                    </form>
                </div>
                {/* right div */}
                <div
                    className='w-[35%] bg-[#11111F]
                  rounded-tr-3xl rounded-br-3xl
                  '
                >
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default SignIn