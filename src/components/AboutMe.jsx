// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AboutMe = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(headingRef.current, {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//         },
//       });

//       gsap.from(textRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         delay: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 85%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen flex flex-col justify-center items-center bg-[#f9f9f9] px-6"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       <h2
//         ref={headingRef}
//         className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//       >
//         About Me
//       </h2>
//       <p
//         ref={textRef}
//         className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed text-center"
//       >
//         Hi, I’m <span className="font-semibold text-gray-900">Ayush Mandawagade</span>,
//         a passionate software developer who loves creating elegant, user-focused
//         digital experiences. I specialize in building modern web applications
//         with clean code and intuitive interfaces. My goal is to merge aesthetics
//         with functionality, ensuring every project not only works flawlessly but
//         also looks beautiful.
//       </p>
//     </section>
//   );
// };

// export default AboutMe;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#fafafa] flex flex-col md:flex-row items-center justify-center px-8 md:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left Text Section */}
      <div ref={textRef} className="flex-1 max-w-xl mb-8 md:mb-0">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          I’m <span className="font-semibold">Ayush Mandawagade</span>, a{" "}
          <span className="font-bold">Full Stack Developer</span> based in
          India. I craft modern, user-centric web applications with a focus on
          clean code and delightful user experiences. Currently, I’m building
          innovative{" "}
          <span className="font-bold">AI-powered Web Experiences</span> and
          scalable SaaS products.
        </p>
      </div>

      {/* Right Image Section */}
      <div
        ref={imageRef}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src="/profile-illustration.png"
          alt="Illustration"
          className="w-64 h-64 rounded-full shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default AboutPage;
