import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function SilderImage() {
  const [current, setCurrent] = useState({ startPoint: 0, endPoint: 3 });

  const SildeImages = [
    {
      url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel1.jpg",
      name: " Couple Room",
      detalis: "2 Adult 1 Childern",
      price: "$500",
    },
    {
      url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel2.jpg",
      name: " Luxurious Room",
      detalis: "2 Adult 1 Childern",
      price: "$500",
    },
    {
      url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel3.jpg",
      name: "Luxurious Room",
      detalis: "2 Adult 1 Childern",
      price: "$500",
    },
    {
      url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel8.jpg.webp",
      name: " Family Room",
      detalis: "2 Adult 1 Childern",
      price: "$500",
    },
    //   {
    //     url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel1.jpg",
    //     name: "",
    //   },

    // {
    //   url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel2.jpg",
    //   name: " Luxurious Room",
    //   detalis: "2 Adult 1 Childern",
    //   price: "$500",
    // },
    // {
    //   url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel3.jpg",
    //   name: "Luxurious Room",
    //   detalis: "2 Adult 1 Childern",
    //   price: "$500",
    // },
    // {
    //   url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel2.jpg",
    //   name: " Family Room",
    //   detalis: "2 Adult 1 Childern",
    //   price: "$500",
    // },
  ];
const [array, setArray] = useState([
  SildeImages[0],
  SildeImages[1],
  SildeImages[2],
]);
let sildeImagesDisplay = [];

function handelleft() {
  setCurrent({
    startPoint:
      current.startPoint === 0 ? SildeImages.length : current.startPoint - 1,
    endPoint:
      current.endPoint === 0 ? SildeImages.length : current.endPoint - 1,
  });

  returnFilterSlider();
}

function returnFilterSlider() {
  if (current.startPoint < current.endPoint) {
    const data = SildeImages.slice(current.startPoint, current.endPoint);
    sildeImagesDisplay = [...data];
  } else {
    const first = SildeImages.slice(current.startPoint);
    const second = SildeImages.slice(0, current.endPoint + 1);
    sildeImagesDisplay = [...first, ...second];
  }
  setArray(sildeImagesDisplay);
}

function handelRight() {
  setCurrent({
    startPoint:
      current.startPoint === SildeImages.length ? 0 : current.startPoint + 1,
    endPoint:
      current.endPoint === SildeImages.length ? 0 : current.endPoint + 1,
  });
  returnFilterSlider();
}

  //   function handelleft() {
  //     if (current.startPoint > 0) {
  //     } else {
  //       setCurrent({
  //         startPoint: current.startPoint - 1,
  //         endPoint: current.startPoint - 1,
  //       });
  //     }
  //     console.log(current.startPoint);

  //     console.log(current.endPoint);
  //   }

  // function handelleft() {
  //   if (current.startPoint > 0) {
  //     setCurrent({
  //       startPoint: current.startPoint - 1,
  //       endPoint: current.endPoint - 1,
  //     });
  //   } else {
  //     setCurrent({
  //       startPoint: (current.startPoint = 1),
  //       endPoint: (current.endPoint = 4),
  //     });
  //     // Reset to the last set of images when the beginning is reached
  //     //   setCurrent({
  //     //     startPoint: SildeImages.length - 3, // Move to the last 3 images
  //     //     endPoint: SildeImages.length - 1,
  //     //   });
  //   }

  //   console.log(current.startPoint);
  //   console.log(current.endPoint);
  // }

  // function handelRight() {
  //   if (current.endPoint !== SildeImages.length) {
  //     setCurrent({
  //       startPoint: current.startPoint + 1,
  //       endPoint: current.endPoint + 1,
  //     });
  //   } else if (current.endPoint==SildeImages.length){
  //     setCurrent({
  //       startPoint: (SildeImages.length=0),
  //       endPoint: (SildeImages.length=3),
  //     });
  //   }
  //   console.log(current.startPoint);

  //   console.log(current.endPoint);
  //   // else {
  //   //   setCurrent({
  //   //     // startPoint: (current.startPoint = 0),
  //   //     // endPoint: (current.endPoint = 3),
  //   //     startPoint: 0,
  //   //     endPoint: 3,
  //   //   });
  //   // }
  // }
  return (
    <div className="slide-container">
      {/* <Fade>
            {SildeImages.map((image, index) => (
            <div
                key={index}
                className="flex flex-row justify-center items-center h-96"
            >
                <img
                src={image.url}
                alt={image.name}
                className="object-cover h-full w-full"
                />
            </div>
            ))}
        </Fade> */}
      <div className="xl:p-16 md:p-2 sm:p-4 xsm:p-4 xxsm:p-0 bg-gray200">
        <div className="flex xl:flex-row md:flex-row sm:flex-row xsm:flex-row xxsm:flex-col justify-between   xl:px-40 md:px-10 sm:px-10 xsm:px-10 xxsm:p-2 xl:gap-0 md:gap-0 sm:gap-0 xsm:gap-0 xxsm:gap-5">
          <div className="w-80">
            <p className="text-5xl">Our Rooms</p>
            <p className="mt-5 text-gray100">
              The concept and service of the best luxury hotels in Asturias in
              our sophisticated.
            </p>
          </div>
          <div className="flex flex-row  gap-5">
            <button
              onClick={handelleft}
              className="border border-gray100 w-16 h-12 text-3xl rounded-full flex justify-center items-center hover:border-black "
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handelRight}
              className="border border-gray100 w-16 h-12 text-3xl rounded-full flex justify-center items-center hover:border-black "
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="mt-14 flex xl:flex-row md:flex-row sm:flex-col xsm:flex-col xxsm:flex-col xl:p-0 md:p-0 sm:p-0 xsm:p-0 xxsm:p-2 justify-center gap-10 ">
          {array.map((data) => {
            return (
              <div className="relative">
                <div>
                  <img className=" md:h-80" src={data.url} />
                </div>

                <div className=" text-white bg-linear-gradient(to bottom, rgba(41,38,33,0) 0%, #292621 100%)">
                  <div className="absolute bottom-0  xl:p-8 md:p-2 sm:p-2 xsm:p-2 xxsm:p-2 text-white ">
                    <p className="text-4xl">{data.name}</p>
                    <p className="mt-2">{data.detalis}</p>
                    <div className=" flex flex-row items-center mt-2 gap-4">
                      <p>Started from </p>
                      <p className="text-2xl">{data.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SilderImage;
// import React, { useState } from "react";
// import "react-slideshow-image/dist/styles.css";

// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";


// function SilderImage() {
//   const [current, setCurrent] = useState({ startPoint: 0, endPoint: 3 });

//   const SildeImages = [
//     {
//       url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel1.jpg",
//       name: " 1",
//       detalis: "2 Adult 1 Childern",
//       price: "$500",
//     },
//     {
//       url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel2.jpg",
//       name: "2",
//       detalis: "2 Adult 1 Childern",
//       price: "$500",
//     },
//     {
//       url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel3.jpg",
//       name: "3",
//       detalis: "2 Adult 1 Childern",
//       price: "$500",
//     },
//     {
//       url: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel2.jpg",
//       name: "4",
//       detalis: "2 Adult 1 Childern",
//       price: "$500",
//     },
//   ];

//   const [array, setArray] = useState([SildeImages[0], SildeImages[1], SildeImages[2]]);


//   let sildeImagesDisplay = [];

//   function handelleft() {
//       setCurrent({
//         startPoint: current.startPoint === 0 ?  SildeImages.length : current.startPoint - 1,
//         endPoint: current.endPoint === 0 ?  SildeImages.length : current.endPoint - 1
//       })
      
//       returnFilterSlider();
//   }

//   function returnFilterSlider() {
//     if(current.startPoint < current.endPoint) {
//       const data = SildeImages.slice(current.startPoint, current.endPoint)
//       sildeImagesDisplay= [...data];
//     }  else {
//       const first = SildeImages.slice(current.startPoint)
//       const second = SildeImages.slice(0, current.endPoint + 1)
//       sildeImagesDisplay = [...first, ...second];
//     }
//     setArray(sildeImagesDisplay)
//   }

//   function handelRight() {
//     setCurrent({
//       startPoint: current.startPoint === SildeImages.length ?  0 : current.startPoint + 1,
//       endPoint: current.endPoint === SildeImages.length ?  0 : current.endPoint + 1
//     })
//     returnFilterSlider();
//   }
//   return (
//     <div className="slide-container">
//       {/* <Fade>
//             {SildeImages.map((image, index) => (
//             <div
//                 key={index}
//                 className="flex flex-row justify-center items-center h-96"
//             >
//                 <img
//                 src={image.url}
//                 alt={image.name}
//                 className="object-cover h-full w-full"
//                 />
//             </div>
//             ))}
//         </Fade> */}
//       <div className="p-16 bg-gray200">
//         <div className="flex flex-row justify-between px-40">
//           <div className="w-80">
//             <p className="text-5xl">Our Rooms</p>
//             <p className="mt-5 text-gray100">
//               The concept and service of the best luxury hotels in Asturias in
//               our sophisticated.
//             </p>
//           </div>
//           <div className="flex flex-row gap-5">
//             <button
//               onClick={handelleft}
//               className="border border-gray100 w-16 h-12 text-3xl rounded-full flex justify-center items-center hover:border-black "
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={handelRight}
//               className="border border-gray100 w-16 h-12 text-3xl rounded-full flex justify-center items-center hover:border-black "
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         <div className="mt-14 flex flex-row gap-10">
//           {array.map(
//             (data) => {
//               return (
//                 <div className="relative">
//                   <div>
//                     <img src={data.url} />
//                   </div>

//                   <div className=" text-white bg-linear-gradient(to bottom, rgba(41,38,33,0) 0%, #292621 100%)">
//                     <div className="absolute bottom-0  p-8 text-white ">
//                       <p className="text-4xl">{data.name}</p>
//                       <p className="mt-2">{data.detalis}</p>
//                       <div className=" flex flex-row items-center mt-2 gap-4">
//                         <p>Started from </p>
//                         <p className="text-2xl">{data.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             }
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SilderImage;
