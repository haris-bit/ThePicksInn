import React from 'react'
import Footer  from './components/Footer'
import Navbar from './components/Navbar'
// import facebook, instagram and twitter icons from react icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from 'next/image'
// import yellow color star icon from react icons
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  return (
      <div
          className='
            flex flex-col
      '
      >
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
                      Find Best & Delicious <br /> Cuisine
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
                            px-4 py-2 bg-[#11111F] text-white rounded-md
                            mt-4
                            '
                      >
                          Menu 
                      </button>
                      <button className='
                            px-4 py-2 bg-[#AAAAAA] text-white rounded-md
                            mt-4 ml-4
                            '
                      >
                          Book a Table
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
                      src='/home.png'
                      width={1400}
                      height={1400}
                        alt='home'
                  />
                  
              </div>
          </section>

          {/* Section 2 */}
          <section
              className='flex flex-col ml-40 justify-center items-center mr-16 h-full mt-40 mb-40 '
          >
              <h1
                  className='text-5xl font-semibold mb-8 text-[#101A24]'
              >Our Special Dishes</h1>

              <p
              className='text-[#5C6574] w-[40%] mb-8 text-center '
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam natus blanditiis pariatur vitae dolorum repellat.</p>
              {/* Div for Grid */}
              <div
              className='grid grid-cols-3 gap-x-40 gap-y-4'
              >
                  <Image
                      src='/card2.png'
                      width={250}
                      height={250}
                      alt='card1'
                    />
                  <Image
                      src='/card2.png'
                      width={250}
                      height={250}
                      alt='card1'
                    />
                  <Image
                      src='/card2.png'
                      width={250}
                      height={250}
                      alt='card1'
                    />
                  <Image
                      src='/card2.png'
                      width={250}
                      height={250}
                      alt='card1'
                    />
                  <Image
                      src='/card2.png'
                      width={250}
                      height={250}
                      alt='card1'
                    />
                  <Image
                      src='/card2.png'
                      width={250}
                      height={250}
                      alt='card1'
                    />
              </div>
          </section>

          <section
          className='w-full h-[440px] bg-[#11111F] flex flex-col justify-center items-center'
          >
              <h1
              className='text-5xl font-semibold mb-8 text-white'
              >
                  Reservations
              </h1>
              <p
              className='w-[50%] mb-8 text-center text-white'
              >
                  Call us at <span className='underline' >(702)-331-5565</span> or book a table through Open Table reservations:
              </p>

              <div
              className='flex justify-center items-center space-x-1'
              >
                  <select name="people" id="people"
                      className='px-8 py-4 rounded-md'
                  >
                  <option value="1">1 People</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
              </select>

              {/* select for date */}
                  <input type="date" name="date" id="date"
                      className='px-8 py-4 rounded-md'
                  />

              {/* For Time */}
                  <select name="time" id="time"
                  className='px-8 py-4 rounded-md'
                  >
                  <option value="">Select a time</option>
                  <option value="7:00am">7:00 am</option>
                  <option value="8:00am">8:00 am</option>
                  <option value="9:00am">9:00 am</option>
                  <option value="10:00am">10:00 am</option>
                  <option value="11:00am">11:00 am</option>
                  <option value="12:00pm">12:00 pm</option>
                  <option value="1:00pm">1:00 pm</option>
                  <option value="2:00pm">2:00 pm</option>
                  <option value="3:00pm">3:00 pm</option>
                  <option value="4:00pm">4:00 pm</option>
                  <option value="5:00pm">5:00 pm</option>
                  <option value="6:00pm">6:00 pm</option>
                  <option value="7:00pm">7:00 pm</option>
                  <option value="8:00pm">8:00 pm</option>
                  <option value="9:00pm">9:00 pm</option>
                  <option value="10:00pm">10:00 pm</option>
              </select>

              <button
                      className='bg-[#AAAAAA] px-8 py-4 rounded-md'
              >
                    Book a Table
                  </button>
              </div>

              
                  
          </section>

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

export default Home