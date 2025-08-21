// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// const logos = [
//   { src: "/img/react.png", alt: "React" },
//   { src: "/img/java.png", alt: "Java" },
//   { src: "/img/javascript.png", alt: "JavaScript" },
//   { src: "/img/mongodb.png", alt: "MongoDB" },
//   { src: "/img/express.png", alt: "ExpressJS" },
//   { src: "/img/tailwind.png", alt: "TailwindCSS" },
//   { src: "/img/node.png", alt: "NodeJS" },
//   { src: "/img/figma.png", alt: "Figma" },
// ];

// const CircleCarousel = () => {
//   const containerRef = useRef(null);
//   const requestRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const cards = container.querySelectorAll(".carousel-card");
//     const totalCards = cards.length;

//     let xOffset = 0;
//     const speed = 1.5;

//     const animate = () => {
//       xOffset -= speed;
//       cards.forEach((card, index) => {
//         const cardWidth = 100;
//         const x = ((index * cardWidth + xOffset) % (totalCards * cardWidth));

//         const screenCenter = window.innerWidth / 2;
//         const cardCenter = x + cardWidth / 2;
//         const distanceFromCenter = Math.abs(cardCenter - screenCenter);
//         const scale = Math.max(0.4, 1 - distanceFromCenter / screenCenter);

//         gsap.set(card, {
//           x,
//           scale,
//           zIndex: Math.floor(scale * 100),
//         });
//       });

//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   return (
    // <div className="relative overflow-hidden w-full h-full backdrop-blur-md bg-white/90   rounded-xl shadow-lg flex items-center justify-center">
    //   <div
    //     ref={containerRef}
    //     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4"
    //   >
    //     {logos.concat(logos).map((logo, index) => (
    //       <div
    //         key={index}
    //         className="carousel-card w-[300px] h-[300px] rounded-full bg-white shadow-2xl flex items-center justify-center transition-all duration-300"
    //       >
    //         <img
    //           src={logo.src}
    //           alt={logo.alt}
    //           className="w-10 h-10 object-contain pointer-events-none"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
//   );
// };

// const GridLayout = () => {
//   return (
//     <div className="relative w-screen h-screen bg-[#050301] ">

//       <div className="absolute w-screen h-[650px] bottom-0 grid grid-cols-8 grid-rows-5 gap-2 bg-[#6e635ae5] p-2  ">
//         {/* Place the CircleCarousel in col-span-4, row-span-3 */}
//         <div className="col-span-4 row-span-1 bg-transparent relative rounded-xl overflow-hidden">
//           <CircleCarousel />
//         </div>

//         {/* Other grid cells (if you want to fill remaining space, optional) */}
//         <div className="clip-custom-top  row-start-1 col-start-6 row-end-4 col-end-9 backdrop-blur-md bg-white/90 border  border-white/20 rounded-xl shadow-lg ">
//          <h2 className="text-white text-xl font-semibold mb-2">Glassmorphism Card</h2>
//   <p className="text-white/80 text-sm">
//     This card has a frosted glass effect using Tailwind's `backdrop-blur` and semi-transparent background.
//   </p>
//         </div>
//         <div className="col-span-1 row-span-1 aspect-square w-30 ml-7  bg-green-100 rounded-full"></div>

//         <div className="div6  bg-gray-300 rounded-xl"></div>
//         <div className="clip-custom-right row-start-3 col-start-6  col-end-9 rounded-xl  row-end-6 bg-orange-200 "></div>
// <div className="col-span-2 row-span-4 col-start-4 row-start-2 bg-fuchsia-200 rounded-xl"></div>

//       </div>

//     </div>
//   );
// };

// export default GridLayout;


import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const logos = [
  { src: "/img/react.png", alt: "React" },
  { src: "/img/java.png", alt: "Java" },
  { src: "/img/javascript.png", alt: "JavaScript" },
  { src: "/img/mongodb.png", alt: "MongoDB" },
  { src: "/img/express.png", alt: "ExpressJS" },
  { src: "/img/tailwind.png", alt: "TailwindCSS" },
  { src: "/img/node.png", alt: "NodeJS" },
  { src: "/img/figma.png", alt: "Figma" },
];

const CircleCarousel = () => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".carousel-card");
    const totalCards = cards.length;

    let xOffset = 0;
    const speed = 1.5;

    const animate = () => {
      xOffset -= speed;
      cards.forEach((card, index) => {
        const cardWidth = 100;
        const x = ((index * cardWidth + xOffset) % (totalCards * cardWidth));

        const screenCenter = window.innerWidth / 2;
        const cardCenter = x + cardWidth / 2;
        const distanceFromCenter = Math.abs(cardCenter - screenCenter);
        const scale = Math.max(0.4, 1 - distanceFromCenter / screenCenter);

        gsap.set(card, {
          x,
          scale,
          zIndex: Math.floor(scale * 100),
        });
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full backdrop-blur-md bg-white/90   rounded-xl shadow-lg flex items-center justify-center">
      <div
        ref={containerRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4"
      >
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="carousel-card w-[300px] h-[300px] rounded-full bg-white shadow-2xl flex items-center justify-center transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-10 h-10 object-contain pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const GridLayout = () => {
  return (
    <div className="relative w-screen h-screen bg-[#050301]">
      {/* Background base container */}
      <div className="absolute w-screen h-[650px] bottom-0 bg-[#6e635ae5] p-2 rounded-xl">
        <div className="relative w-full h-full">
          {/* CircleCarousel - mimicking grid col-span-4, row-span-1 */}
          <div
            className="absolute"
            style={{
              left: "0%",
              bottom: "300px", // Adjust based on row height
              width: "50%", // col-span-4 of 8
              height: "300px",
            }}
          >
            <CircleCarousel />
          </div>

          {/* Glassmorphism Card - grid col-start-6 row-start-1 row-end-4 col-end-9 */}
          {/* Glassmorphism card with clip-custom-top */}
<div
  className="clip-custom-top absolute backdrop-blur-md bg-white/90 border border-white/20 shadow-lg p-4"
  style={{
    left: "75%",
    top: "20px",
    width: "23%",
    height: "320px",
  }}
>
  <h2 className="text-white text-xl font-semibold mb-2">
    Glassmorphism Card
  </h2>
  <p className="text-white/80 text-sm">
    This card has a frosted glass effect using Tailwind's
    <code>backdrop-blur</code> and semi-transparent background.
  </p>
</div>

{/* Green circle - no clip path needed */}
<div
  className="absolute bg-green-100 rounded-full"
  style={{
    left: "65%",
    bottom: "300px",
    width: "80px",
    height: "80px",
  }}
></div>

{/* Gray box with .div6 clip-path */}
<div
  className="div6 absolute bg-gray-300"
  style={{
    left: "10%",
    bottom: "80px",
    width: "160px",
    height: "120px",
  }}
></div>

{/* Orange box with clip-custom-right */}
<div
  className="clip-custom-right absolute bg-orange-200"
  style={{
    left: "75%",
    bottom: "20px",
    width: "23%",
    height: "300px",
  }}
></div>

{/* Purple box - no clip path needed */}
<div
  className="absolute bg-fuchsia-200 rounded-xl"
  style={{
    left: "40%",
    bottom: "20px",
    width: "20%",
    height: "500px",
  }}
></div>

        </div>
      </div>
    </div>
  );
};

export default GridLayout;
