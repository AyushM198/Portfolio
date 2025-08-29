// import React, { useRef } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './components/Navbar';

// const Layout = () => {
//     const heroRef = useRef(null);

//     return (
//         <>
//             <main className="">
//                 <Outlet context={{ heroRef }} />
//                 <Navbar heroRef={heroRef} />
//             </main>
//         </>
//     );
// };

// export default Layout;

import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Layout = () => {
  const heroRef = useRef(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="w-full">
        <Hero />
      </section>

      {/* Navbar (will appear after 80% of Hero) */}
      <Navbar heroRef={heroRef} />

      {/* Other Pages */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
