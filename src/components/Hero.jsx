import React, { useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const textRef = useRef(null);
  const notesRef = useRef(null);

  return (
    <div
      className="relative lg:min-h-dvh md:h-dvh flex flex-col items-center justify-center px-8 p-20 "
      style={{
        backgroundImage: "url('/img/paper_bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Main content */}
      <div className="relative  flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-5xl z-10 md:-mt-20 ">
        {/* Left Section */}
        <div ref={textRef} className="max-w-lg ">
          <p className="text-2xl text-gray-900 mb-2 ">Hi, I’m</p>
          <h1
            className="text-6xl md:text-7xl mb-4 text-black"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            Ayush Mandawagade
          </h1>
          <p className="text-xl text-gray-900 leading-relaxed">
            Transforming ideas into intuitive and enjoyable experiences.
          </p>
        </div>

        {/* Right Section - Notes */}
        <div
          ref={notesRef}
          className="flex flex-col items-start mt-8 md:mt-0 gap-4"
        >
          <div className="bg-yellow-300 p-3 rounded shadow rotate-[-3deg] hover:rotate-3">
            Welcome visitor :)
          </div>
          <div className="bg-blue-100 p-3 rounded shadow rotate-[2deg]">
            Building interactive web apps with React + GSAP
          </div>
        </div>
      </div>

      {/* Buttons Section (instead of shelf) */}
      <div className="w-full flex flex-col lg:flex-row md:flex-col gap-6 mt-12 z-10 relative items-center md:items-start">
  {/* Buttons */}
  <div className="flex gap-6 md:ml-50 sm:ml-0">
    <button className="bg-transparent border text-black font-semibold px-6 py-3 rounded-lg shadow rotate-[-3deg] transition-transform hover:rotate-1">
      View Projects →
    </button>
    <button className="bg-transparent border text-black font-semibold px-6 py-3 rounded-lg shadow rotate-[1.5deg] transition-transform hover:scale-105">
      Contact Me
    </button>
  </div>

  {/* Resume Image */}
  <div className="relative group md:translate-x-16 md:-translate-y-4 md:-mt-10">
  <img
    src="/img/Resumeq.png"
    alt="Resume"
    className="w-24 sm:w-28 md:w-32 h-auto object-contain hover:scale-105 transition cursor-pointer"
    onClick={() => window.open("/resume.pdf", "_blank")}
  />
  {/* Hover Label */}
  <div className="absolute -bottom-5 left-0 w-full text-black  text-xs md:text-lg text-center  opacity-0 group-hover:opacity-100 transition">
    Resume
  </div>

    {/* <div className="absolute top-5 -right-3 flex flex-col opacity-0 group-hover:opacity-100 transition duration-500">
    <span className="w-4 h-2 bg-gray-900 rounded-full "></span>
    <span className="w-2 h-2 mt-2 ml-1 bg-gray-900 rounded-full "></span>
    <span className="w-4 h-2 mt-4 ml-1 rotate-45 bg-gray-900 rounded-full "></span>
  </div> */}
  </div>
</div>

      {/* Resume Image - Full Width Overlap */}

    </div>
  );
};

export default Hero;


















// import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//     const { heroRef } = useOutletContext();
//     const [backgroundImage, setBackgroundImage] = useState("/img/light.png");

//     const isDark = backgroundImage === "/img/dark.png";

//     const toggleBackground = () => {
//         setBackgroundImage(prev =>
//             prev === "/img/dark.png" ? "/img/light.png" : "/img/dark.png"
//         );
//     };

//     return (
//         <div className={`${isDark ? "bg-black" : "bg-white"} max-h-full mt-0 transition-colors duration-500`}>
//             <section ref={heroRef} className="relative h-[100vh] w-full overflow-hidden">
//                 {/* Background Image */}
//                 <div
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-500"
//                     style={{ backgroundImage: `url('${backgroundImage}')` }}
//                 ></div>
//                 <div className={`absolute inset-0 z-10 opacity-50 `}></div>

//                 {/* Foreground Content */}
//                 <div className={`relative w-full h-screen overflow-hidden ${isDark ? "text-[#c5c4c5]" : "text-black"}`}>
//                     <div className={`absolute w-full h-[450px] ml-35 transform text-center px-4 z-10 top-1/3 `}>
//                         <div className={`absolute w-full space-y-0 left-0 `} >
//                             <h1 className={`text-4xl md:text-9xl font-extralight font-Sansation drop-shadow-lg text-left`}>
//                                 Ayush
//                             </h1>
//                             <h1 className={`text-xl md:text-8xl leading-tight text-left drop-shadow-lg font-extralight`}>
//                                 Mandawgade
//                             </h1>
//                             <p className="font-light text-left mt-2">
//                                 <span className={`text-4xl md:text-4xl font-Iceberg ${isDark ? "text-blue-300" : "text-green-800"}`}>
//                                     Software Engineer
//                                 </span>
//                             </p>
//                         </div>

//                         <div className="absolute top-9/12 space-x-9 left-1">
//                             <button className={`w-38 h-14 border px-4 py-2 rounded-full mt-2 transition duration-300
//                                 ${isDark
//                                     ? "bg-transparent border-gray-300 text-gray-100 hover:bg-[#34643b] hover:text-black"
//                                     : "bg-transparent border-gray-800 text-gray-800 hover:bg-[#2dd969] hover:text-black"}
//                                 hover:text-xl hover:scale-105 hover:border-0`}>
//                                 Resume
//                             </button>
//                             <button className={`w-38 h-14 border px-4 py-2 rounded-full mt-2 transition duration-300
//                                 ${isDark
//                                     ? "bg-transparent border-gray-300 text-gray-100 hover:bg-[#73d682] hover:text-black"
//                                     : "bg-transparent border-gray-800 text-gray-800 hover:bg-black hover:text-[#4ade80]"}
//                                 hover:text-xl hover:scale-105 `}>
//                                 Portfolio
//                             </button>
//                         </div>
//                     </div>

//                     {/* Change Background Button */}
//                     <button
//                         onClick={toggleBackground}
//                         className="fixed top-48 left-130 z-50 h-30 w-50 bg-transparent text-black px-4 py-2 rounded-lg hover:scale-105 transition"
//                     >
//                         {/* Add a visual toggle indicator if you want */}
//                     </button>

//                     {/* Social Icons */}
//                     <div className="absolute bottom-6 left-30 z-20 flex flex-row space-x-6 mb-8">
//                         <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
//                             <FaGithub className={`w-6 h-6 hover:scale-180 transition-transform duration-300 ${isDark ? "text-white hover:text-[#f6a8a8f5]" : "text-black hover:text-red-500"}`} />
//                         </a>
//                         <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
//                             <FaLinkedin className={`w-6 h-6 hover:scale-180 transition-transform duration-300 ${isDark ? "text-white hover:text-blue-300" : "text-blue-800 hover:text-blue-400"}`} />
//                         </a>
//                         <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
//                             <FaSquareXTwitter className={`w-6 h-6 hover:scale-180 transition-transform duration-300 ${isDark ? "text-white hover:text-gray-500" : "text-gray-700 hover:text-black"}`} />
//                         </a>
//                         <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
//                             <FaInstagram className={`w-6 h-6 hover:scale-180 transition-transform duration-300 ${isDark ? "text-white hover:text-pink-800" : "text-pink-700 hover:text-pink-500"}`} />
//                         </a>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Hero;





