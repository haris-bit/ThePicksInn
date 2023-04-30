import React from 'react'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

const About = () => {
  return (
      <div>
          <Navbar />
          {/* Section 1 */}
          <section
              className='flex ml-40 justify-between mr-16  '
          >
              <div
                  className='flex  flex-col h-screen '
              >
                  <h1
                      className='
                        text-5xl font-semibold mt-12 mb-4 text-[##11111F]
                      '
                  >
                      About Us
                  </h1>
                  <p
                      className='mt-4 mb-4 text-[#5C6574] w-[50%] '
                  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci molestiae, officia optio debitis laudantium quis deleniti quia culpa laboriosam itaque fugiat, necessitatibus in odio aliquid, ad exercitationem quam. Eligendi.
                  </p>

                  <span
                      className='mt-12 flex'
                  >
                      <button
                          className='
                            px-16 py-4 bg-[#11111F] text-white rounded-md
                            mt-4 
                            rounded-tl-xl rounded-tr-xl
                            '
                      >
                          Let&apos;s Eat
                      </button>

                  </span>

                  <span
                      className='flex mt-12'
                  >
                      {/* social icons */}
                      <FaFacebookF className='text-[#11111F] mt-4 mr-4 w-6 h-6 ' />
                      <FaInstagram className='text-[#11111F] mt-4 mr-4 w-6 h-6' />
                      <FaTwitter className='text-[#11111F] mt-4 mr-4 w-6 h-6' />

                  </span>
              </div>
              <div>
                  <Image

                      //   src is the home.png in the public folder
                      src='/about.png'
                      width={2000}
                      height={400}
                      alt='home'
                    //   add shadow to the image
                        
                  />
                  <Image
                      src='/Vector2.png'
                      width={300}
                      height={300}
                      alt='vector'
                      className='
                        relative bottom-[620px] left-[420px]
                        opacity-20
                        z-0
                        
                        '
                  />

                  <Image
                      src='/Vector3.png'
                      width={300}
                      height={300}
                      alt='vector'
                      className='
                        relative bottom-[820px] right-[20px]
                        opacity-20
                        // set z-index to negative to make it behind the image
                        z-[-1]
                        '
                  />

                  <Image
                      src='/Vector.png'
                      width={300}
                      height={300}
                      alt='vector'
                      className='
                        relative bottom-[620px] left-[450px]
                        opacity-20
                        z-[-1]
                        '
                  />

              </div>
          </section>

            {/* Section 2 */}
          <section
            className='flex flex-col h-screen items-center mt-12 mb-12'
          >
              <h1
              className='text-5xl font-semibold mt-12 mb-4 text-center text-[##11111F]'
              >
                  We Provide Best Taste and Service <br />
                  at your Doorstep
                  
              </h1>
              <p
                  className='mt-4 mb-4 text-[#5C6574] w-[50%] text-center text-2xl '
              >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ab labore sed non quo. Non fuga pariatur cum facere aut cupiditate nostrum, provident temporibus quasi! Aspernatur repellat facere magni labore?
              </p>
              <Image
                  src='/Vector2.png'
                  width={300}
                  height={300}
                  alt='vector'
                  className='
                        relative bottom-[420px] right-[620px]
                        opacity-10
                        z-0
                        
                        '
              />

          </section>

            {/* Section 3 */}
          <section
            className='flex gap-12 h-screen'
          >
              <div
              className='ml-40'
              >
                  <Image 
                      src='/about1.png'
                      width={1000}
                      height={1000}
                      alt='about1'
                      className='z-0 '
                  />
                  <Image
                      src='/Vector.png'
                      width={500}
                      height={500}
                      alt='vector'
                      className='-z-0
                      relative bottom-[620px] -left-96
                      opacity-10
                      '
                    />
                  <Image
                      src='/Vector2.png'
                      width={300}
                      height={300}
                      alt='vector'
                      className='
                        relative bottom-[620px] left-[220px]
                        opacity-20
                        z-[-1]
                        '
                    />
              </div>
              <div
              className='flex flex-col justify-center ml-8 '
              >
                  <h1
                  className='text-5xl font-semibold mt-12 mb-4 text-[##11111F]'
                  >
                      We are more than <br />
                      <span
                          className='text-[#ffc31f]  mr-2 '
                      >
                          
                      multiple
                      </span>
                      service
                  </h1>
                  <p
                  className='mt-4 mb-4 text-[#5C6574] w-[50%] text-md '
                  >
                      This is the type of restaurent which typically serve food and drink, in addition to light refreshments such as snacks. This is the type of restaurent which typically serve food and drink, in addition to light refreshments such as snacks.
                  </p>

                  <div
                  className='grid grid-cols-2 gap-4 mt-4 '
                  >
                      <span
                      className='flex gap-2 space-x-2 '
                      >
                          <Image 
                              src='/image 15.png'
                              width={20}
                              height={20}
                              alt='image15'
                          />
                          <p
                              className='text-[#11111F]'
                          >
                              Online Order
                            </p>
                      </span>
                      <span
                      className='flex gap-2 space-x-2 '
                      >
                          <Image 
                              src='/image 17.png'
                              width={20}
                              height={20}
                              alt='image15'
                          />
                          <p
                              className='text-[#11111F]'
                          >
                              24/7 Service
                            </p>
                      </span>
                      <span
                      className='flex gap-2 space-x-2 '
                      >
                          <Image 
                              src='/image 18.png'
                              width={20}
                              height={20}
                              alt='image15'
                          />
                          <p
                              className='text-[#11111F]'
                          >
                              Pre-Reservation
                            </p>
                      </span>
                      <span
                      className='flex gap-2 space-x-2 '
                      >
                          <Image 
                              src='/image 19.png'
                              width={20}
                              height={20}
                              alt='image15'
                          />
                          <p
                              className='text-[#11111F]'
                          >
                              Organized Ambience
                            </p>
                      </span>
                      <span
                      className='flex gap-2 space-x-2 '
                      >
                          <Image 
                              src='/image 20.png'
                              width={20}
                              height={20}
                              alt='image15'
                          />
                          <p
                              className='text-[#11111F]'
                          >
                              Super Chef
                            </p>
                      </span>
                      <span
                      className='flex gap-2 space-x-2 '
                      >
                          <Image 
                              src='/image 21.png'
                              width={20}
                              height={20}
                              alt='image15'
                          />
                          <p
                              className='text-[#11111F]'
                          >
                              Clean Kitchen
                            </p>
                      </span>

                  </div>
              </div>
              
          </section>

          {/* Section 4 */}
          
          <section
              className='flex flex-col justify-center items-center mt-40 mb-40'
          >
              <h1
                  className='text-5xl font-semibold mb-8 text-[#101A24]'
              >Our Customer Reviews</h1>
              <p
                  className='text-[#5C6574] w-[40%] mb-12 text-center '
              >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia consectetur, quos non exercitationem accusamus voluptatem velit
              </p>

              {/* Div for card */}
              <div
                  className='flex flex-col justify-center items-center space-x-4 shadow-xl p-8 rounded-xl
                    w-[50%] h-[350px] 
                  '
              >
                  <Image
                      src='/person-1.png'
                      width={100}
                      height={100}
                      alt='person'
                      className='rounded-full'
                  />
                  <span
                      className='flex space-x-1 mt-4 mb-2  '
                  >
                      <AiFillStar className='text-[#FFC107] w-6 h-6' />
                      <AiFillStar className='text-[#FFC107] w-6 h-6' />
                      <AiFillStar className='text-[#FFC107] w-6 h-6' />
                      <AiFillStar className='text-[#FFC107] w-6 h-6' />
                      <AiFillStar className='text-[#FFC107] w-6 h-6' />
                  </span>

                  <p
                      className='text-[#5C6574] w-[80%] mb-8 text-center '
                  >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, modi? Labore cupiditate, necessitatibus neque optio, magni iure placeat et porro possimus ad veniam ratione quo, fugiat doloremque! Minus, odit blanditiis.
                  </p>
                  <h2
                      className='text-[#101A24] font-semibold mb-2'
                  >
                      Ama Ampomah
                  </h2>
                  <p
                      className='text-[#5C6574] w-[80%] mb-8 text-center '
                  >
                      CEO & Founder Inc
                  </p>
                  
              </div>

          </section>

          <Footer />
    </div>
  )
}

export default About