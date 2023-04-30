import React from 'react'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'

const Registration = () => {
  return (
    <div>
      <Navbar />
      <section
        className='flex flex-col h-screen 
        shadow-lg rounded-3xl mx-auto ml-40 mr-40
        '
      >
        <h1
        className='text-5xl font-semibold mt-12 mb-2 ml-20'
        >
          Customer Registration
        </h1>
        <p
          className='text-2xl text-gray-400 ml-20 mt-4 '
        >
          Please Fill the Following Details to order your Favourite food
        </p>

        <form
          className='grid grid-cols-2 gap-8 mt-12 ml-20 mr-20 mb-12 '
        >
          {/* Inputs for email and for password */}
          <input type="text"
            placeholder='First Name'
            className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
          />
          <input type="text"
            placeholder='Last Name'
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
          <input type="password"
            placeholder='Password'
            className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
          />
          <input type="password"
            placeholder='Confirm Password'
            className='
            px-4 py-2 border-2 border-[#828282]
            focus:outline-none
            '
          />

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
            <a href="#" className='text-[#11111F] hover:underline'>Sign In</a>
          </span>
        </form>

          
          
          
          


      </section>
      <Footer />
    </div>
  )
}

export default Registration