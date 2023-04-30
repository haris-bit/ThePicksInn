import Image from "next/image";
// import cart icon from react-icons
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
  return (
      <div className="flex w-full h-48 justify-around items-center   " >
          {/*Div for logo  */}
          <div className="ml-24" >
              <Image src="/logo.png" width={200} height={200}
              alt="logo"
              />
          </div>

          {/*Div for navbar links  */}
          <div className="" >
              <ul className="flex gap-12 font-semibold  " >
                  <li>Menu</li>
                  <li>Events</li>
                  <li>Gallery</li>
                  <li>About</li>
                    <li>Contact</li>
              </ul>
          </div>

          {/* Div for cart and for sign up button */}
          <div className="flex justify-between  items-center " >
              <FiShoppingCart className=" text-3xl mr-20 "  />
              <button
                  className="
                    bg-[#11111F] text-white
                    px-12 py-5
                    rounded-tl-xl
                    rounded-br-xl
                    font-semibold
                    text-lg
                    shadow-lg
                  "
              >Sign Up</button>
          </div>
    </div>
  )
}

export default Navbar