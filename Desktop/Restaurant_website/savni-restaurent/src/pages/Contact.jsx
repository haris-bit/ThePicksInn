import React from 'react'
// import icons for phone, fax and email
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
    return (
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
                        className='text-5xl font-semibold mt-12 mb-4'
                    >
                        Get In Touch
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Quisquam, quod.  sit amet consectetur adipisicing.
                    </p>

                    <form
                        className='flex flex-col space-y-4 mt-12  mr-12 mb-12 '
                    >
                        {/* Inputs for email and for password */}
                        <input type="text"
                            placeholder='Name'
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
                            placeholder='Phone Number'
                            className='
                            px-4 py-2 border-2 border-[#828282]
                            focus:outline-none
                            '
                        />
                        {/* How did you find us? */}

                        <select name="contact" id="contact"
                        className='px-4 py-2 border-2 '
                        >
                            <option value="How did you find us?">How did you find us?</option>
                            <option value="Google">Google</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                        </select>

                        {/* Sign In Button */}
                        <button
                            className='bg-[#11111F] text-white
                            px-12 py-5 mt-20 font-semibold    
                            '
                        >SEND</button>

                        {/* Sign Up */}
                        <span
                            className='py-4
                            flex space-x-12
                            '
                        >
                            <span
                            className='flex items-center space-x-4 '
                            >
                                <FiPhone
                                // increase the size of the icon
                                    className='text-2xl'
                                />
                                <span>
                                    <h1>PHONE</h1>
                                    <p>+1 234 567 890</p>
                                </span>
                            </span>

                            <span
                                className='flex items-center space-x-4'
                            >
                                <FiMail
                                className='text-2xl'
                                />
                                <span>
                                    <h1>
                                        FAX
                                    </h1>
                                    <p>
                                        +1 234 567 890
                                    </p>
                                </span>
                            </span>

                            <span
                                className='flex items-center space-x-4'
                            >
                                <FiMapPin />
                                <span>
                                    <h1>
                                        EMAIL
                                    </h1>
                                    <p>
                                        info@marcc.com.au
                                    </p>
                                </span>
                            </span>

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
    )
}

export default Contact