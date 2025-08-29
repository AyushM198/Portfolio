// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { DockDemo } from "../components/Dock"


// const Hero = () => {
//   const textRef = useRef(null);
//   const notesRef = useRef(null);
//   const imgRef = useRef(null);

//   // Mouse move handler for parallax image
//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const moveX = ((x - centerX) / centerX) * 20;
//     const moveY = ((y - centerY) / centerY) * 20;

//     gsap.to(imgRef.current, {
//       x: moveX,
//       y: moveY,
//       scale: 1.1,
//       duration: 0.3,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(imgRef.current, {
//       x: 0,
//       y: 0,
//       scale: 1,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div id="hero"
//       className="relative lg:min-h-dvh md:h-dvh flex flex-col items-center justify-center px-10 py-30 "
//       style={{
//         backgroundImage: "url('/img/paper_bg.png')",
//         backgroundSize: "cover",
//         backgroundRepeat: "repeat",
//         fontFamily: "'Inter', sans-serif",
//       }}
//     >
//       {/* Main content */}
//       <div className="relative flex flex-col-reverse lg:h-60 lg:ml-5 lg:-mt-20 lg:flex-row lg:items-center md:flex-row items-start md:items-center justify-between w-full max-w-5xl z-10  md:-mt-20 md:ml-10 ">
//         {/* Left Section */}
//         <div ref={textRef} className="max-w-lg">
//           <p className="text-2xl text-gray-900 mb-2">Hi, I’m</p>
//           <h1
//             className="text-6xl md:text-7xl mb-4 text-black"
//             style={{ fontFamily: "'Patrick Hand', cursive" }}
//           >
//             Ayush Mandawagade
//           </h1>
//           <p className="text-2xl pb-6 pt-4">
//             Software Engineer | Web Developer
//           </p>
//           <p className="text-lg text-gray-900 leading-relaxed">
//             Transforming ideas into intuitive<br/> and enjoyable experiences.
//           </p>
//         </div>

//         {/* Right Section - Notes */}
//         <div
//           ref={notesRef}
//           className="flex flex-col items-start w-1/2 p-9 lg:mt-6 lg:pl-30 xl:pl-45 pb-15 md:pl-15 lg:mt-0 gap-4 pz-40"
//         >
//           <div className="bg-yellow-200 w-25 h-25 pb-3 pt-0 rounded-sm shadow-xl hover:rotate-3 relative z-20">
//             <div className="bg-yellow-300 w-full h-[2vh] mt-0"></div>
//             <div className="p-3 font-PatrickHand text-center">
//               Welcome visitor :)
//             </div>
//           </div>

//           <div className="md:w-50 md:h-20 lg:w-50 lg:h-50 lg:ml-25 lg:-mt-50 font-Sansation w-35 h-10 -mt-10 ml-32 md:-mt-12 md:ml-20 lg:px-5 lg:py-5 rotate-[2deg] flex items-center justify-center text-center relative z-10">
//             <img
//               src="/img/flower.png" // 🔹 your image path here
//               alt="Blue Note"
//               className="w-fit h-fit object-contain"
//             />
//           </div>

//           {/* Blue Note - Lower Z index */}
//           <div className="bg-blue-100 w-35 h-30 lg:ml-10 lg:-mt-3 font-Sansation py-1 text-xs px-2 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base lg:px-5 lg:py-4 lg:text-sm shadow rotate-[2deg] flex items-center justify-center text-center relative z-10">
//             Building interactive web apps with React + GSAP
//           </div>
//         </div>
//       </div>

//       {/* Buttons Section (instead of shelf) */}
//       <div className="w-full md:h-fit flex flex-col lg:flex-row md:flex-col gap-6 mt-12 z-10 relative items-center md:items-start">
//         {/* Buttons */}
//         <div className="flex gap-6 md:ml-50 sm:ml-0">
//           <a href='#projects'
//             className="bg-transparent border text-black font-semibold px-6 py-3 rounded-lg shadow  transition-transform hover:rotate-3">
//             View Projects →
//           </a>
//           {/* <button className="bg-transparent border text-black font-semibold px-6 py-3 rounded-lg shadow rotate-[1.5deg] transition-transform hover:scale-105">
//             Contact Me
//           </button> */}
//         </div>

//         {/* Resume Image */}
//         <div className="relative group md:translate-x-16 md:-translate-y-4 md:-mt-10">
//           <img
//             src="/img/Resumeq.png"
//             alt="Resume"
//             className="w-24 sm:w-28 md:w-32 h-auto object-contain hover:scale-105 transition cursor-pointer"
//             onClick={() => window.open("https://drive.google.com/file/d/1AbYGkp1MVUeqNh_LfH-OlAuohdSn0D_E/view?usp=drive_link", "_blank")}
//           />

//           {/* Hover Label */}
//           <div className="absolute -bottom-7 bg-black/5 left-0 w-full  rounded-4xl text-black text-xs md:text-lg text-center opacity-0 group-hover:opacity-100 transition">
//             Resume
//           </div>
//         </div>
//       </div>

//       {/* Social Icons */}
//       <div className="absolute flex gap-3 z-20 md:bottom-30 md:right- justify-center w-200">
//         {/* LinkedIn */}
//         {/* <a
//           href="https://www.linkedin.com/in/ayush-mandawgade-67a359329/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src="/img/link.png"
//             alt="LinkedIn"
//             className="w-12 h-12 md:w-20 md:h-20 cursor-pointer hover:scale-110 transition"
//           />
//         </a> */}

//         {/* Mail */}
//         {/* <a href="mailto:ayushmandawgade123@gmail.com">
//           <img
//             src="/img/mail.png"
//             alt="Email"
//             className="w-12 h-12 md:w-20 md:h-20 cursor-pointer hover:scale-110 transition"
//           />
//         </a> */}
//               <DockDemo />


//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DockDemo } from "../components/Dock";

const Hero = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
  const rightSection = document.getElementById("right-section");
  const buttonsSection = document.getElementById("buttons-section");

  if (rightSection) {
    // Animate only opacity and x, leave scale/other hover styles intact
    gsap.fromTo(
      rightSection.children,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }

if (buttonsSection) {
  // Animate the whole section as one
  gsap.fromTo(
      buttonsSection,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2,delay:1.2, ease: "power3.out" }
    );
}



    
}, []);





  // Mouse move handler for parallax image
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((x - centerX) / centerX) * 20;
    const moveY = ((y - centerY) / centerY) * 20;

    gsap.to(imgRef.current, {
      x: moveX,
      y: moveY,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      id="hero"
      className="relative lg:min-h-dvh md:h-dvh flex flex-col items-center justify-center px-10 py-30 "
      style={{
        backgroundImage: "url('/img/paper_bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Main content */}
      <div className="relative flex flex-col-reverse lg:h-60 lg:ml-5 lg:-mt-20 lg:flex-row lg:items-center md:flex-row items-start md:items-center justify-between w-full max-w-5xl z-10  md:-mt-20 md:ml-10 ">
        {/* Left Section */}
        <div ref={textRef} className="max-w-lg">
          <p className="text-2xl text-gray-900 mb-2">Hi, I’m</p>
          <h1
            className="text-6xl md:text-7xl mb-4 text-black"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            Ayush Mandawagade
          </h1>
          <p className="text-2xl pb-6 pt-4">
            Software Engineer | Web Developer
          </p>
          <p className="text-lg text-gray-900 leading-relaxed">
            Transforming ideas into intuitive<br /> and enjoyable experiences.
          </p>
        </div>

        {/* Right Section - Notes */}
        <div
          id="right-section"
          className="flex flex-col items-start w-1/2 p-9 lg:mt-6 lg:pl-30 xl:pl-45 pb-15 md:pl-15 lg:mt-0 gap-4 pz-40"
        >
          <div className="bg-yellow-200 w-25 h-25 pb-3 pt-0 rounded-sm shadow-xl hover:rotate-3 relative z-20">
            <div className="bg-yellow-300 w-full h-[2vh] mt-0"></div>
            <div className="p-3 font-PatrickHand text-center">
              Welcome visitor :)
            </div>
          </div>

          <div className="md:w-50 md:h-20 lg:w-50 lg:h-50 lg:ml-25 lg:-mt-50 font-Sansation w-35 h-10 -mt-10 ml-32 md:-mt-12 md:ml-20 lg:px-5 lg:py-5 rotate-[2deg] flex items-center justify-center text-center relative z-10">
            <img
              src="/img/flower.png"
              alt="Blue Note"
              className="w-fit h-fit object-contain"
            />
          </div>

          {/* Blue Note - Lower Z index */}
          <div className="bg-blue-100 w-35 h-30 lg:ml-10 lg:-mt-3 font-Sansation py-1 text-xs px-2 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base lg:px-5 lg:py-4 lg:text-sm shadow rotate-[2deg] flex items-center justify-center text-center relative z-10">
            Building interactive web apps with React + GSAP
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div id="buttons-section" className="w-full md:h-fit flex flex-col lg:flex-row md:flex-col gap-6 mt-18 z-10 relative items-center md:items-start">
        <div className="flex gap-6 md:ml-50 sm:ml-0">
          <a
            href="#projects"
            className="bg-transparent border text-black font-semibold px-6 py-3 rounded-lg shadow  transition-transform hover:rotate-3"
          >
            View Projects →
          </a>
        </div>

        <div className="relative group md:translate-x-16 md:-translate-y-4 md:-mt-10">
          <img
            src="/img/Resumeq.png"
            alt="Resume"
            className="w-24 sm:w-28 md:w-32 h-auto object-contain hover:scale-105 transition cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1AbYGkp1MVUeqNh_LfH-OlAuohdSn0D_E/view?usp=drive_link",
                "_blank"
              )
            }
          />
          <div className="absolute -bottom-7 bg-black/5 left-0 w-full  rounded-4xl text-black text-xs md:text-lg text-center opacity-0 group-hover:opacity-100 transition">
            Resume
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute flex gap-3 z-20 md:bottom-20 md:w-full lg:bottom-32 bottom-6 justify-center w-90">
        <DockDemo />
      </div>
    </div>
  );
};

export default Hero;
