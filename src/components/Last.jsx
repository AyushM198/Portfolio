import React, { useState, useEffect, useRef } from 'react';

// Icon component remains the same
const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

// Reusable Section Component with updated styling for the new effect
// const AnimatedSection = ({ children, bgColor, firstSection = false, isLast = false }) => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // The Intersection Observer logic for content animation remains the same.
//     // It works well with this new layout too.
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         // A slightly higher threshold can feel better with sticky positioning
//         threshold: 0.5, 
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // KEY CHANGE: We use `sticky` and `top-0` to make each section stick to the top as we scroll.
//   // The previous section will appear to slide up and away.
//   // We add a negative margin to the last element to prevent extra space at the bottom.
//   return (
//     <section
//       ref={sectionRef}
//       className={`h-screen w-full flex flex-col items-center justify-center p-8 text-center text-white sticky top-0 ${isLast ? '-mb-[100vh]' : ''} ${bgColor}`}
//     >
//       <div
//         className={`transform transition-all duration-1000 ease-in-out ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//       >
//         {children}
//       </div>
//       {firstSection && (
//          <div className="absolute bottom-10">
//             <ChevronDownIcon className="w-8 h-8 animate-bounce" />
//          </div>
//       )}
//     </section>
//   );
// };

const AnimatedSection = ({ children, bgColor, firstSection = false, isLast = false }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // trigger earlier for smoother slide
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`h-screen w-full flex flex-col items-center justify-center p-8 text-center text-white sticky top-0 ${isLast ? '-mb-[100vh]' : ''} ${bgColor}`}
    >
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {children}
      </div>

      {firstSection && (
        <div className="absolute bottom-10">
          <ChevronDownIcon className="w-8 h-8 animate-bounce" />
        </div>
      )}
    </section>
  );
};

// Main App Component
export default function App() {
  // KEY CHANGE: The main container no longer needs scroll-snap properties.
  // Instead, we give it a height that is a multiple of the number of sections
  // to create the necessary scroll space for the sticky effect to work.
  // 4 sections = 400vh.
  return (
    <main className="h-[400vh] relative">
      
      {/* Section 1: Hero */}
      <AnimatedSection bgColor="bg-zinc-900" firstSection={true}>
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter">
          Cypher
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-zinc-300">
          Unlocking the Future, One Line of Code at a Time.
        </p>
      </AnimatedSection>

      {/* Section 2: Services */}
      <AnimatedSection bgColor="bg-black">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-zinc-400">
              Crafting beautiful, responsive, and high-performance websites.
            </p>
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <h3 className="text-2xl font-semibold mb-2">Mobile Apps</h3>
            <p className="text-zinc-400">
              Building intuitive and engaging mobile experiences for iOS and
              Android.
            </p>
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
            <h3 className="text-2xl font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-zinc-400">
              Scalable and secure cloud infrastructure to power your applications.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 3: About Us */}
      <AnimatedSection bgColor="bg-zinc-900 "
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-8">About Us</h2>
        <p className="max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
          We are a passionate team of developers, designers, and strategists
          dedicated to pushing the boundaries of technology. Our mission is to
          transform innovative ideas into reality, creating digital products that
          are not only functional but also delightful to use.
        </p>
      </AnimatedSection>

      {/* Section 4: Contact */}
      <AnimatedSection bgColor="bg-black" isLast={true}>
        <h2 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg md:text-xl text-zinc-300 mb-8">
          Have a project in mind? We'd love to hear from you.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-500 transition-colors duration-300">
          Contact Us
        </button>
      </AnimatedSection>
    <section className="relative h-screen bg-zinc-900 flex items-center justify-center">
  <h1 className="text-white text-5xl">Curved Section</h1>

  {/* SVG Curve */}
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-32"
      preserveAspectRatio="none"
    >
      <path
        fill="#000000" // 👈 next section background color
        d="M0,224L48,192C96,160,192,96,288,74.7C384,53,480,75,576,117.3C672,160,768,224,864,224C960,224,1056,160,1152,122.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
      />
    </svg>
  </div>
</section>

    </main>
  );
}
