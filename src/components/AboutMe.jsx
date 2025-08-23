import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    if (paragraphsRef.current.length > 0) {
      gsap.from(paragraphsRef.current, {
        scrollTrigger: {
          trigger: paragraphsRef.current[0],
          start: "bottom top", // triggers just as the first paragraph enters
          toggleActions: "play none none reverse",
          // markers: true, // uncomment for debugging
        },
        opacity: 1,
        y: 40,
        duration: 0.8,
        stagger: 0.6,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      className="min-h-screen bg-[#f7f6f4] flex flex-col items-center pt-32 px-6 md:px-12 text-center lg:p-35"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 font-PatrickHand">
        About Me
      </h2>

      {/* Paragraphs */}
      <div className="max-w-2xl text-base md:text-lg text-gray-700 text-center font-Sansation leading-relaxed  space-y-8">
        <p ref={(el) => (paragraphsRef.current[0] = el)}>
          I’m <span className="font-semibold">Ayush Mandawagade</span>, a{" "}
          <span className="font-bold">Full Stack Developer</span> passionate about 
            building scalable, modern, and user-centric web applications.<br/>
          My focus is on writing clean, efficient code while designing
          intuitive experiences that balance functionality with aesthetics.
        </p>

        <p ref={(el) => (paragraphsRef.current[1] = el)}>
          💡 My technical expertise spans{" "}
          <span className="font-bold">React, Node.js, Express, MongoDB</span>,
          and <span className="font-bold">GSAP</span>, which I use to craft
          responsive, interactive, and high-performance applications. I enjoy
          bridging the gap between design and engineering, making sure every
          project feels polished, engaging, and reliable.
        </p>

        <p ref={(el) => (paragraphsRef.current[2] = el)}>
          🚀 Beyond web development, I’m an active{" "}
          <span className="font-bold">AI/ML learner</span>, exploring how
          intelligent systems can enhance user experiences and power next-gen
          SaaS products. My goal is to build innovative, impactful solutions
          that not only solve real-world problems but also push me to grow as
          an engineer.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
