import React, { useEffect, useState } from "react";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
import SilderImage from "./SilderImage";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

function Homepage() {
  const reviwe = [
    {
      detalisname: "Nice Accommodation",

      detalis:
        "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch",
      name: "- Omeka Lotus",
    },
    {
      detalisname: "Nice Accommodation",
      detalis:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis esse, facere cumque molestiae dicta consequuntur.",
      name: "- Omeka Lotus",
    },
    {
      detalisname: "Nice Accommodation",
      detalis:
        "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch",
      name: "- Omeka Lotus",
    },
    {
      detalisname: "Nice Accommodation",
      detalis:
        "Lorem dolorum suscipit provident corrupti quas, deserunt architecto recusandae error odit consectetur obcaecati, debitis sint",
      name: "- Omeka Lotus",
    },
  ];
  const [current, setCurrent] = useState({ startPoint: 0, endPoint: 2 });

  function handleLeft() {
    if (current.startPoint > 0) {
      setCurrent({
        startPoint: current.startPoint - 1,
        endPoint: current.endPoint - 1,
      });
    } else {
      setCurrent({
        startPoint: (current.startPoint = 1),
        endPoint: (current.endPoint = 3),
      });
    }
  }

  function handelRight() {
    if (current.endPoint !== reviwe.length) {
      setCurrent({
        startPoint: current.startPoint + 1,
        endPoint: current.endPoint + 1,
      });
    } else if (current.endPoint == reviwe.length) {
      setCurrent({
        startPoint: (current.startPoint = 0),
        endPoint: (current.endPoint = 2),
      });
    }
  }
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex xl:flex-row  md:flex-col sm:flex-col xsm:flex-col xxsm:flex-col justify-center items-center xl:px-80 md:px-20 xxsm:px-1 py-28 ">
        <div data-aos="flip-right">
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/about.jpg.webp" />
        </div>

        <div className="xl:w-1/3 lg:w-[800px] md:w-4/5 px-10 py-16 ">
          <div data-aos="fade-right">
            <p className="text-4xl   leading-normal">
              Luxury & Comfort Our services and wonders of Prague
            </p>
          </div>
          <div data-aos="fade-right">
            <p className=" leading-loose mt-4 text-gray100">
              The concept and service of the best luxury hotels in Asturias in
              our sophisticated Urban Double and Unique Junior Suite rooms, with
              the possibility of enjoying a furnished terrace in our Double
              Urban Loft and Unique Junior Loft Suite.
            </p>
          </div>

          <button className="border border-pink100 w-44 h-12 text-pink100 mt-6 transition-all duration-700 hover:text-white hover:bg-pink100">
            Learn More
          </button>
        </div>
        <div data-aos="flip-right">
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/about-right.jpg.webp" />
        </div>
      </div>

      <SilderImage />
      <div className="flex flex-col items-center justify-center  mt-20 gap-10">
        <div className="flex  flex-col xl:p-0 md:p-0 sm:p-2 xsm:p-2 xxsm:p-6">
          <div data-aos="zoom-in">
            <p className="  xl:text-4xl md:text-2xl sm:text-2xl xsm:text-2xl xxsm:text-xl ">
              Surrounded by galleries, boutiques, restaurants and
            </p>
          </div>

          <div data-aos="zoom-in">
            <p className="  xl:text-4xl md:text-2xl sm:text-2xl  xsm:text-2xl xxsm:text-xl">
              cafés, our Hotel is a hub of energy and style.
            </p>
          </div>
        </div>
        <div>
          <p>Find a Room For You</p>
        </div>
        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xsm:flex-col xxsm:flex-col  xl:gap-0 md:gap-10 xl:p-0 md:p-20 justify-center  ">
          <div data-aos="fade-right">
            <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/project-img.jpg" />
          </div>
          <div
            data-aos="fade-left"
            className="bg-black text-white flex flex-col content-center   xl:w-1/4 md:w-4/5  p-14  gap-5  "
          >
            {/* <div className=""> */}
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-4xl hover:text-pink100 transition-all duration-700 "
            >
              Take advantage of our seasonal specials.
            </p>
            <p data-aos="fade-up" data-aos-duration="3000">
              The concept and service of the best luxury hotels in Asturias in
              our sophisticated Urban Double and Unique Junior Suite rooms, with
              the possibility of enjoying a furnished terrace in our Double
              Urban Loft and Unique Junior Loft Suite.
            </p>
            <button className="border border-pink100 w-44 h-12 text-pink100 mt-6 transition-all duration-700 hover:text-white hover:bg-pink100">
              View Project
            </button>
            {/* </div>
             */}
          </div>
        </div>
        <div data-aos="zoom-out">
          <img src="https://preview.colorlib.com/theme/rolax/assets/img/gallery/video-bg.jpg.webp" />
        </div>
        <div className="grid justify-center mt-10 ">
          <div className="grid justify-center my-10">
            <p className="xl:text-5xl md:text-5xl sm:text-4xl">
              We Offer to Our Guest
            </p>
          </div>
          <div className="flex  xl:flex-row sm:flex-col md:flex-col xsm:flex-col xxsm:flex-col justify-center items-center  gap-10 mb-10 ">
            <div
              data-aos="fade-right"
              className="offerImage1 group relative flex flex-col xl:w-96 md:w-96 sm:w-96 xsm:w-96 xxsm:w-80  text-white  h-96  "
            >
              <div
                data-aos="fade-right"
                className="text-4xl pb-8 group-hover:hidden transition-all duration-400 flex flex-col justify-items-end items-center absolute bottom-[10px] left-[100px]  "
              >
                Free Drinks
              </div>
              <div className="flex flex-col absolute opacity-0 xl:w-80 md:w-80 sm:w-80 xsm:w-80 xxsm:w-64 transition-all duration-1000  group-hover:opacity-100 bottom-[10px] left-[25px] transition-all duration-400 justify-center w-64 gap-2">
                <div className="text-4xl tarnsition-all duration-300 hover:text-pink100">
                  Free Breakfast
                </div>
                <div>
                  The concept and service of the best luxury hotels in Asturias
                  in our sophisticated Urban Double and Unique Junior Suite
                  rooms, with the possibility of enjoying a furnished terrace in
                  our Double Urban Loft and Unique Junior Loft Suite.
                </div>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="offerImage2 group relative flex flex-col xl:w-96 md:w-96 sm:w-96 xsm:w-96 xxsm:w-80  text-white  h-96  "
            >
              <div
                data-aos="zoom-in"
                className="text-4xl pb-8 group-hover:hidden transition-all duration-400 flex flex-col justify-items-end items-center absolute bottom-[10px] left-[100px]  "
              >
                Free Breakfast
              </div>
              <div className="flex flex-col absolute opacity-0 xl:w-80 md:w-80 sm:w-80 xsm:w-80 xxsm:w-64 transition-all duration-1000  group-hover:opacity-100 bottom-[10px] left-[25px] transition-all duration-400 justify-center w-64 gap-2">
                <div className="text-4xl  tarnsition-all duration-300  hover:text-pink100">
                  Free Breakfast
                </div>
                <div>
                  The concept and service of the best luxury hotels in Asturias
                  in our sophisticated Urban Double and Unique Junior Suite
                  rooms, with the possibility of enjoying a furnished terrace in
                  our Double Urban Loft and Unique Junior Loft Suite.
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="offerImage3 group relative flex flex-col xl:w-96 md:w-96 sm:w-96 xsm:w-96 xxsm:w-80  text-white  h-96  "
            >
              <div
                data-aos="fade-left"
                className="text-4xl pb-8 group-hover:hidden transition-all duration-400 flex flex-col justify-items-end items-center absolute bottom-[10px] left-[100px]  "
              >
                Free Dinner
              </div>
              <div className="flex flex-col absolute opacity-0 xl:w-80 md:w-80 sm:w-80 xsm:w-80 xxsm:w-64 transition-all duration-1000 group-hover:opacity-100 bottom-[10px] left-[25px] transition-all duration-400 justify-center w-64 gap-2">
                <div
                  data-aos="fade-up"
                  className="text-4xl tarnsition-all duration-300 hover:text-pink100"
                >
                  Free Breakfast
                </div>
                <div>
                  The concept and service of the best luxury hotels in Asturias
                  in our sophisticated Urban Double and Unique Junior Suite
                  rooms, with the possibility of enjoying a furnished terrace in
                  our Double Urban Loft and Unique Junior Loft Suite.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink100 flex justify-center py-20 xl:px-60 md:px-60 sm:px-5 xsm:px-2 xxsm:px-2 gap-5">
        <div className="flex justify-center xl:p-10 md:p-0 xsm:p-0 xxsm:p-0  xl:gap-10 md:gap-10 sm:gap-10 xsm:gap-0 xxsm:gap-0">
          <div className="flex items-center ">
            <button
              onClick={handleLeft}
              className=" border border-white text-white rounded-full text-2xl p-2"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="flex xl:flex-row md:flex-row sm:flex-col xsm:flex-col xxsm:flex-col  gap-20 ">
            {reviwe.slice(current.startPoint, current.endPoint).map((data) => {
              return (
                <div className="text-white  flex flex-col gap-5">
                  <p className="text-4xl">{data.detalisname}</p>
                  <p className="text-xl">"{data.detalis}</p>
                  <span>{data.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center ">
            <button
              onClick={handelRight}
              className=" border border-white text-white rounded-full text-2xl p-2"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
