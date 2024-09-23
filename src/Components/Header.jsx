import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function hadelOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <div>
      <div>
        <div className=" h-14 border-2 border-white bg-red500 flex  flex-row  justify-around items-center text-white ">
          <div>
            <p>Call Us:+10(89)675 5456 </p>
          </div>
          <div>
            <p> info@rolax.com</p>
          </div>
          <div className="xl:flex md:flex sm:hidden xsm:hidden xxsm:hidden flex-row gap-5">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="backgroundImage h-screen ">
          <div className="xl:h-24 xl:py-4 lg:py-4 md:py-4 lg:h-24 md:h-24 xl:grid lg:grid md:flex sm:flex xsm:flex xxsm:flex xl:grid-cols-2  lg:grid-cols-2  md:flex-row sm:flex-col xsm:flex-col xxsm:flex-col    items-center justify-evenly px-10 border border-white  bg-orange100">
            <div className=" flex flex-row justify-around gap-20 ">
              <div>
                <p className=" xl:text-4xl md:text-2xl sm:text-4xl xsm:text-3xl xxsl:text-2xl  xl:mt-0 lg:mt-0 md:mt-0 sm:mt-2 xsm:mt-2 xxsm:-2 xsm:text-2xl xxsm:text-2xl text-white">
                  Rolax Resort
                </p>
              </div>
              <div>
                <div className="xl:hidden lg:hidden  md:hidden sm:flex text-2xl xl:mt-0 lg:mt-0 md:mt-0 sm:mt-4 xsm:mt-4 xxsm:-4 ">
                  <button onClick={hadelOpen}>
                    <IoMenu />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-white xl:flex md:flex   lg:flex sm:hidden xsm:hidden xxsm:hidden  justify-around  xl:flex-row md:flex-row lg:flex-row sm:flex-col xsm:flex-col xxsm:flex-col gap-10 ">
              <button>Home</button>
              <button>Rooms</button>
              <button>About</button>
              <button>Blog</button>
              <button>Contact Us</button>
            </div>

            <div
            // className=" xl:flex md:flex xl:flex-row md:flex-row"
            // className={`xl:flex md:flex xl:flex-row md:flex-row  xsm:hidden xxsm:hidden flex-row gap-10 ${
            //   isOpen ? "isOpen" : " sm:flex sm:flex-col "
            // }`}
            >
              {isOpen ? (
                <div className="text-white xl:hidden lg:hidden md:hidden sm:flex xsm:flex xxsm:flex    xl:flex-row md:flex-row lg:flex-row sm:flex-col xsm:flex-col xxsm:flex-col  justify-end sm:gap-5 xsm:gap-2 xsm:gap-0  my-2">
                  <button>Home</button>
                  <button>Rooms</button>
                  <button>About</button>
                  <button>Blog</button>
                  <button>Contact Us</button>
                </div>
              ) : (
                <></>
              )}
              {/* <div className="text-white flex xl:flex-row md:flex-row lg:flex-row sm:flex-col  gap-10 ">
                <button>Home</button>
                <button>Rooms</button>
                <button>About</button>
                <button>Blog</button>
                <button>Contact Us</button>
              </div> */}
              {/* <div className="text-white">Book Now</div> */}
            </div>
          </div>
          <div className="xl:text-5xl md:text-5xl sm:text-2xl flex flex-col justify-center items-center  text-white gap-5 xl:h-4/5 md:h-3/5 sm:h-1/5 xsm:h-1/4 xxsm:h-1/4 font-bold">
            <div data-aos="fade-right">Rest Journey in Single step, </div>
            <div data-aos="fade-left">in the breathtaking</div>
          </div>
          <div className="grid xl:grid-cols-5 md:grid-cols-2 gap-8 justify-center xl:px-40 md:px-10 sm:px-10">
            <div className="flex flex-col w-64 text-white">
              <span className="text-white">Check In Date*</span>
              <input
                type="date"
                className="bg-transparent border-b-2 border-White text-white  "
              />
            </div>

            <div className="flex flex-col w-64 text-white">
              <span className="text-white">Check Out Date*</span>
              <input
                type="date"
                className="bg-transparent border-b-2 border-White "
              />
            </div>

            <div className=" flex flex-row items-center gap-2 text-xl text-white border-b-2 border-White  w-36 ">
              <input type="checkbox" />
              <p>Adilt</p>
            </div>

            <div className=" flex flex-row items-center gap-2 text-xl text-white border-b-2 border-White  w-36 ">
              <input type="checkbox" />
              <p>Children</p>
            </div>
            <div>
              <button className="bg-white w-56 h-14 text-xl ">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
