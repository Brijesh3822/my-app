import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="bg-black px-40 py-40 flex flex-col gap-24 items-center ">
        <div className="flex xl:flex-row lg:flex-row md:flex-col xsm:flex-col xxsm:flex-col    sm:flex-col xl:gap-20 lg:gap-10 md:gap-20 sm:gap-20 xsm:gap-20  xxsm:gap-20 justify-center ">
          <div className=" text-white  xl:w-80 md:w-80 sm:w-80 xsm:w-80 xxsm:w-64 flex flex-col gap-5">
            <div>
              <img src="https://preview.colorlib.com/theme/rolax/assets/img/logo/logo2_footer.png.webp" />
            </div>

            <div>
              Leather detail contrastic colour contour stunning silhouette
              working peplum. Statement buttons patch.
            </div>
            <div className="flex flex-row gap-5 text-gray400">
              <div className="hover:text-pink100">
                <FaTwitterSquare />
              </div>
              <div className="hover:text-pink100">
                <FaFacebookSquare />
              </div>
              <div className="hover:text-pink100">
                <FaLinkedin />
              </div>
              <div className="hover:text-pink100">
                <FaPinterestSquare />
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col gap-5">
            <div className="text-2xl">Navigation</div>
            <div className="flex flex-col gap-1">
              <p className="hover:underline"> About</p>
              <p className="hover:underline">Our Rooms</p>
              <p className="hover:underline"> Book A Room</p>
              <p className="hover:underline"> Blog</p>
              <p className="hover:underline">Privacy & Policy</p>
              <p className="hover:underline">Contact</p>
            </div>
          </div>
          <div className="text-white flex flex-col gap-5">
            <div className="text-2xl">Contact</div>
            <div className="flex flex-col gap-1">
              <p className="hover:underline">
                76/A, Green Lane, Dhanmondi, NYC
              </p>
              <p className="text-pink100 hover:underline">10 (87) 738-3940</p>
              <p className="hover:underline">contact@contact.com</p>
            </div>
          </div>
          <div className="text-white flex flex-col gap-5">
            <div className="text-2xl">Newsletter</div>
            <div className="flex flex-col gap-5">
              <p>Subscribe our newsletter to get updates.</p>
              <input
                className="h-10 pl-5 bg-black border w-[300px]"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="bg-pink100 h-12">Search</button>
            </div>
          </div>
        </div>

        <div className="text-white xl:flex md:flex sm:hidden xsm:hidden xxsm:hidden ">
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </div>
      </div>
    </div>
  );
}

export default Footer;
