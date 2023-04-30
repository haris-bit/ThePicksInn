import React from 'react'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
// import user profile image from react-icons
// import { FaUserCircle } from "react-icons/fa";
// import upload image icon from react-icons
import { AiOutlineUpload } from "react-icons/ai";

const RiderRegistration = () => {
    return (
        <div>
            <Navbar />
            <section
                className='flex flex-col h-full 
        shadow-lg rounded-3xl mx-auto ml-40 mr-40
        '
            >
                <h1
                    className='text-5xl font-semibold mt-12 mb-2 ml-20'
                >
                    Rider Registration
                </h1>
                <p
                    className='text-2xl text-gray-400 ml-20 mt-4 '
                >
                    Please Fill the Following Details to get things ready for you
                </p>

                <form
                    className='grid grid-cols-2 gap-8 mt-12 ml-20 mr-20 mb-12 '
                >

                    {/* Inputs for email and for password */}

                    <input type="text"
                        placeholder='Full Name'
                        className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
                    />
                    <input type="email"
                        placeholder='Email Address'
                        className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
                    />
                    <input type="text"
                        placeholder='Contact Number'
                        className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
                    />

                    <input type="text"
                        placeholder='CNIC Number'
                        className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
                    />

                    <input type="text"
                        placeholder='Age'
                        className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
                    />

                    <input type="text"
                        placeholder='Qualification'
                        className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
                    />

                    {/* Input for gender */}
                    <span
                        className='flex '
                    >
                        <label
                            className='text-gray-800'
                        >
                            What&apos;s Your Gender?
                        </label>

                        {/* radio button for male and female */}
                        <div
                            className='flex flex-row ml-4'
                        >

                            <input type="radio"
                                name='gender'
                                value="male"
                                className='
                border-2 border-[#828282]
                focus:outline-none
                '
                            />

                            <label
                                className='ml-2'
                            >
                                Male
                            </label>

                            <input type="radio"
                                name='gender'
                                value="female"
                                className='
                border-2 border-[#828282]
                focus:outline-none
                ml-4
                '
                            />
                            <label
                                className='ml-2'
                            >
                                Female
                            </label>
                        </div>



                    </span>


                    <div
                    className='flex justify-around w-full '
                    >
                        <div>
                            <label
                                className='text-gray-800'
                            >
                                Upload your Licence
                                <AiOutlineUpload className='inline-block ml-2' />
                                <input type="file"
                                    className='hidden'
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                className='text-gray-800'
                            >
                                Upload your CNIC
                                <AiOutlineUpload className='inline-block ml-2' />
                                <input type="file"
                                    className='hidden'
                                />
                            </label>
                        </div>
                    </div>
                    <input type="submit"
                        value='Sign Up'
                        className='
            col-span-2
            mt-4 mb-4 ml-40 mr-40
            px-4 py-4 border-2 border-[#828282]
            focus:outline-none
            bg-[#11111F] text-white font-semibold
            hover:bg-[#828282] hover:text-[#11111F] hover:cursor-pointer
            '
                    />


                    {/* Already have an account */}
                    <span
                        className='col-span-2 text-center text-gray-400'
                    >
                        Already have an account?
                        <a href="#" className='text-[#11111F] ml-2 font-semibold hover:underline'>Sign In</a>
                    </span>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default RiderRegistration