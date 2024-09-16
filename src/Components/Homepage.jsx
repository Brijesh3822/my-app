import React from "react";
import Header from "./Header";

import SilderImage from "./SilderImage";

function Homepage() {
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-center px-80 py-28 ">
        <div>
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/about.jpg.webp" />
        </div>
        <div className="w-1/3 px-10 py-16 ">
          <p className="text-4xl   leading-normal">
            Luxury & Comfort Our services and wonders of Prague
          </p>
          <p className=" leading-loose mt-4 text-gray100">
            The concept and service of the best luxury hotels in Asturias in our
            sophisticated Urban Double and Unique Junior Suite rooms, with the
            possibility of enjoying a furnished terrace in our Double Urban Loft
            and Unique Junior Loft Suite.
          </p>
          <button className="border border-pink100 w-44 h-12 text-pink100 mt-6 transition-all duration-700 hover:text-white hover:bg-pink100">
            Learn More
          </button>
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/about-right.jpg.webp" />
        </div>
      </div>

      <SilderImage />
      <div className="flex flex-col items-center justify-center  mt-20 gap-10">
        <div className="flex  flex-col">
          <p className="  text-4xl ">
            Surrounded by galleries, boutiques, restaurants and
          </p>
          <p className="  text-4xl ">
            cafés, our Hotel is a hub of energy and style.
          </p>
        </div>
        <div>
          <p>Find a Room For You</p>
        </div>
        <div className="flex flex-row justify-center  ">
          <div>
            <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/project-img.jpg" />
          </div>
          <div className="bg-black text-white flex flex-col content-center  justify-center w-1/4 p-14  gap-5  ">
            {/* <div className=""> */}
            <p className="text-4xl hover:text-pink100 transition-all duration-700 ">
              Take advantage of our seasonal specials.
            </p>
            <p>
              The concept and service of the best luxury hotels in Asturias in
              our sophisticated Urban Double and Unique Junior Suite rooms, with
              the possibility of enjoying a furnished terrace in our Double
              Urban Loft and Unique Junior Loft Suite.
            </p>
            <button className="border border-pink100 w-44 h-12 text-pink100 mt-6 transition-all duration-700 hover:text-white hover:bg-pink100">
              View Project
            </button>
            {/* </div> */}
          </div>
        </div>

        <div>
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/video-bg.jpg.webp" />
        </div>

        <div className="grid justify-center mt-10 ">
          <div className="grid justify-center my-10">
            <p className="text-5xl">We Offer to Our Guest</p>
          </div>
          <div className="flex flex-row justify-center gap-10">
            <div className="offerImage1 w-10/12  h-80">rywseruy</div>
            <div className="offerImage2 w-1/3"></div>
            <div className="offerImage3 w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
