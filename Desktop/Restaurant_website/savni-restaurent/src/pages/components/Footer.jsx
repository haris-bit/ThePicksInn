import Image from "next/image"
// import circled facebook, twitter and instagram icons from react-icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer
            className='w-full h-96 relative'
        >
            <div
                className=" ml-40
                40 flex"
            >
                {/* Div for logo and lorem ipsum */}
                {/* left div */}
                <div>
                    {/* Logo */}
                    <Image src="/logo.png" alt="logo" width={200} height={200}
                    className = "ml-2 mb-4 "
                    />
                    {/* Lorem ipsum */}
                    <div
                        className="
                            text-[#5C6574]
                        "
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Quisquam, quod.
                        <span
                        className="underline"
                        >
                            Learn More
                        </span>
                    </div>

                    <div
                    className="flex flex-col "
                    >
                        <h3
                        className="mt-6  mb-6 font-semibold "
                        >Opening Hours</h3>
                        <div
                        className="flex space-x-8 "
                        >
                        <span
                        className="text-[#5C6574]"
                        >
                            <h4>
                                Monday - Friday
                            </h4>
                            <h4>
                                8:00 am - 9:00 pm
                            </h4>
                        </span>
                        <span
                            className="text-[#5C6574]"
                        >
                            <h4>
                                Saturday
                            </h4>
                            <h4>
                                8:00 am - 9:00 pm
                            </h4>
                        </span>
                        <span
                            className="text-[#5C6574]"
                        >
                            <h4>
                                Sunday
                            </h4>
                            <h4>
                                CLOSED
                            </h4>
                            </span>
                        </div>
                    </div>
                </div>
                
                {/* Right Div */}
                <div
                className="flex space-x-20 mt-16 ml-20  "
                >
                    {/* links */}
                    <div>
                        <ul
                        className="flex flex-col space-y-4 "
                        >
                            <li
                            className="font-semibold text-xs "
                            >NAVIGATION</li>
                            <li
                            className="text-[#5C6574]"
                            >Menu</li>
                            <li
                            className="text-[#5C6574]"
                            >About Us</li>
                            <li
                            className="text-[#5C6574]"
                            >Contact Us</li>
                            <li
                            className="text-[#5C6574]"
                            >Main Dishes</li>
                        </ul>
                    </div>
                    {/* more links */}
                    <div>
                        <ul
                            className="flex flex-col space-y-4 "
                        > <li
                            className="font-semibold text-xs "
                        >DISHES</li>
                            <li
                                className="text-[#5C6574]"
                            >Fish & Viggies</li>
                            <li
                                className="text-[#5C6574]"
                            >Tufo Chili</li>
                            <li
                                className="text-[#5C6574]"
                            >Egg & Cocumber</li>
                            <li
                                className="text-[#5C6574]"
                            >Lumpia w/Suace</li>
                        </ul>
                    </div>
                    {/* social media */}
                    <div>
                        <ul
                            className="flex flex-col space-y-4 "
                        >
                            <li
                                className="font-semibold text-xs "
                            >
                                FOLLOW US
                                <span
                                className="flex space-x-8 mt-4 text-3xl  "
                                >
                                    <FaFacebook />
                                    <FaInstagram />
                                    <FaTwitter />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <hr
                className="mt-12 mb-12 ml-40 mr-40  "
            />

            <div
                className="ml-40 mr-32 mb-32 flex justify-between "
            >
                {/* Div for copywrite */}
                
                <span
                className="text-[#5C6574]"
                >
                    {/* copywrite sign */}
                    © 2022 Restaurants. All Rights Reserved. Designed by <span
                    className="font-semibold"
                    >Isaac</span>
                </span>

                <span
                className="text-[#5C6574]"
                >
                    <ul
                    className="flex space-x-8 "
                    >
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                </span>
            </div>


        </footer>
    )
}
