import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div>
        <div className=" h-14 border-2 border-white bg-red500 flex  flex-row  justify-around items-center text-white ">
          <div>
            <p>Call Us: +10 (89) 675 5456</p>
          </div>
          <div>
            <p> info@rolax.com</p>
          </div>
          <div className="flex  flex-row gap-5">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="backgroundImage h-screen ">
          <div className="h-24 flex flex-row items-center justify-between	 px-10 border border-white  ">
            <div>
              <p className=" text-4xl text-white">Rolax Resort</p>
            </div>
            <div className="flex flex-row gap-10 ">
              <div className="text-white flex gap-10 ">
                <button>Home</button>
                <button>Rooms</button>
                <button>About</button>
                <button>Blog</button>
                <button>Contact Us</button>
              </div>
              <div className="text-white">Book Now</div>
            </div>
          </div>
          <div className="text-5xl flex flex-col justify-center items-center  text-white gap-5 h-4/5 font-bold">
            <div>Rest Journey in Single step, </div>
            <div>in the breathtaking</div>
          </div>
          <div className="flex flex-row gap-10 justify-center">
            <div className="flex flex-col w-64 text-white">
              <span className="text-white">Check In Date*</span>
              <input
                type="date"
                className="bg-transparent border-b-2 border-White"
              />
            </div>

            <div className="flex flex-col w-64 text-white">
              <span className="text-white">Check Out Date*</span>
              <input
                type="date"
                className="bg-transparent border-b-2 border-White"
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
              <button className="bg-white w-56 h-14 text-xl">Search</button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Header;
