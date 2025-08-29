// import React, { useEffect, useState } from "react";
// import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
// import { FaMoon } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroHeight = window.innerHeight;
//       const triggerPoint = heroHeight * 0.8;

//       if (window.scrollY >= triggerPoint) {
//         setShowNavbar(true);
//       } else {
//         setShowNavbar(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle Dark Mode
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav
//       className={`flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 w-11/12 h-20 z-50 
//       bg-black/10 dark:bg-gray-900 text-black dark:text-white px-6 py-4 mt-3
//       transition-all duration-700 rounded-4xl shadow-lg
//       ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
//     >
//       {/* Left - Logo */}
//       <a className="text-2xl ml-5 font-PatrickHand"
//         href="/"
//       >Ayush</a>

//       {/* Right - Icons + Button */}
//       <div className="flex items-center space-x-6">
//         {/* Social Links */}
//         <LuLinkedin
//           className="cursor-pointer hover:text-gray-600 hover:scale-125 transition-transform text-2xl"
//           onClick={() => window.open("https://www.linkedin.com/in/ayush-mandawgade-67a359329/", "_blank")}
//         />
//         <LuGithub
//           className="cursor-pointer hover:text-gray-600 hover:scale-125 transition-transform text-2xl"
//           onClick={() => window.open("https://github.com/AyushM198", "_blank")}
//         />
//         <LuMail
//           className="cursor-pointer hover:text-gray-600 hover:scale-125 transition-transform text-2xl"
//           onClick={() => (window.location.href = "mailto:ayushmandawgade123@gmail.com")}
//         />

//         {/* Button - Redirect to Contact Page */}
//         <button
//           onClick={() => navigate("")}
//           className="bg-white dark:bg-gray-700 dark:text-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
//         >
//           Get in Touch
//         </button>

//         {/* Dark Mode Toggle */}
//         <FaMoon
//           className="cursor-pointer hover:text-gray-400 transition"
//           onClick={() => setDarkMode(!darkMode)}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { LuLinkedin, LuGithub, LuMail } from "react-icons/lu";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const triggerPoint = heroHeight * 0.8;
      setShowNavbar(window.scrollY >= triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav
      className={`flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 w-11/12 h-20 z-50 
      bg-black/10 dark:bg-gray-900 text-black dark:text-white px-6 py-4 mt-3
      transition-all duration-700 rounded-4xl shadow-lg
      ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      {/* Left - Logo */}
      <a className="text-2xl ml-5 font-PatrickHand" href="/">
        Ayush
      </a>

      {/* Right - Desktop Icons */}
      <div className="hidden md:flex items-center space-x-6">
        <LuLinkedin
          className="cursor-pointer hover:text-gray-600 hover:scale-125 transition-transform text-2xl"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ayush-mandawgade-67a359329/",
              "_blank"
            )
          }
        />
        <LuGithub
          className="cursor-pointer hover:text-gray-600 hover:scale-125 transition-transform text-2xl"
          onClick={() => window.open("https://github.com/AyushM198", "_blank")}
        />
        <LuMail
          className="cursor-pointer hover:text-gray-600 hover:scale-125 transition-transform text-2xl"
          onClick={() =>
            (window.location.href = "mailto:ayushmandawgade123@gmail.com")
          }
        />
        <button
          onClick={() => navigate("")}
          className="bg-white dark:bg-gray-700 dark:text-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          Get in Touch
        </button>
        <FaMoon
          className="cursor-pointer hover:text-gray-400 transition text-2xl"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* Mobile / Tablet Hamburger */}
      <div className="md:hidden flex items-center">
        <FaMoon
          className="cursor-pointer hover:text-gray-400 transition text-2xl mr-4"
          onClick={() => setDarkMode(!darkMode)}
        />
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-11/12 bg-black/80 dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center space-y-4 md:hidden z-50 text-gray-200">
          <LuLinkedin
            className="cursor-pointer hover:text-gray-400 text-2xl"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ayush-mandawgade-67a359329/",
                "_blank"
              )
            }
          />
          <LuGithub
            className="cursor-pointer hover:text-gray-400 text-2xl"
            onClick={() => window.open("https://github.com/AyushM198", "_blank")}
          />
          <LuMail
            className="cursor-pointer hover:text-gray-400 text-2xl"
            onClick={() =>
              (window.location.href = "mailto:ayushmandawgade123@gmail.com")
            }
          />
          <button
            onClick={() => navigate("")}
            className="bg-white dark:bg-gray-700 dark:text-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
