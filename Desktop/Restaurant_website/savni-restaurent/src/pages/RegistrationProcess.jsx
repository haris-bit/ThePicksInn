import React from 'react'
import SignIn from './SignIn'
import Image from 'next/image'

const RegistrationProcess = () => {
  return (
      <div
    //   make the background color of the whole page gray
        className = 'bg-gray-200'
      >
          <SignIn />
          <div
              className='w-[60%] h-[500px]  bg-white shadow-lg rounded-3xl mx-auto
                absolute top-40 left-80 z-30 justify-center items-center
              '
          >
              <h1
              className='text-4xl font-semibold mt-12 mb-12 text-center '
              >
                  Sign Up to Get Registered
              </h1>

              <p
              className='text-xl font-semibold mt-8 mb-12 text-gray-400 text-center  '
              >
                  Please Select one to Continue the Registration Process
              </p>

              <span
              className='flex space-x-12 justify-center items-center'
              >
              <Image 
                  src='/Customer.png'
                  width={200}
                  height={200}
                  className='cursor-pointer'
                alt='Customer'  
              />

              <Image 
                  src='/Rider.png'
                  width={180}
                  height={180}
                  className='cursor-pointer'
                alt='Customer'  
                  />
              </span>
              
          </div>
    </div>
  )
}

export default RegistrationProcess