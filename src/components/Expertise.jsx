import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Expertise = () => {
    gsap.registerPlugin(MotionPathPlugin);
    const flyingImgRef = useRef();

    useEffect(() => {
        gsap.to(flyingImgRef.current, {
            duration: 6,
            repeat: -1,
            ease: "power1.inOut",
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 300, y: -150 },
                    { x: 600, y: 150 },
                    { x: 300, y: 200 },
                    { x: 0, y: 0 },
                ],
                curviness: 1.25,
                autoRotate: true,
            },
        });
    }, []);

    return (
        <section className="relative bg-[#f7f6f4] py-35 px-4 md:px-10 lg:px-20 font-sans transition-all duration-500 ease-in-out">
            {/* Heading */}
            <div className="text-center mb-12 md:mb-20">
                <p className="text-lg md:text-xl uppercase tracking-wider mb-4 font-PatrickHand">
                    Innovative
                </p>
                <h2 className="text-2xl md:text-5xl font font-stretch-105% mt-2">
                    Expertise That Transforms
                </h2>
                <p className="text-gray-700 mt-4 max-w-xl mx-auto text-sm md:text-base">
                    Crafting digital experiences that engage and inspire.
                </p>
            </div>

            {/* Floating PNG animation */}
            {/* <div className="absolute top-0 left-0 z-50 pointer-events-none">
                <img
                    ref={flyingImgRef}
                    src="/img/react.png"
                    alt="Floating Icon"
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
            </div> */}

            {/* Responsive Grid Section */}
            <div
                className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 lg:grid-rows-3 
          gap-6 
          transition-all duration-500 ease-in-out
          lg:p-12 lg:h-320 
        "
            >
                {/* 1 - Web Development */}
                <div
                    className="
            bg-white rounded-lg flex justify-between 
            h-auto lg:h-[750px] 
            col-span-1 md:col-span-2 
            lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3
            transition-all duration-500 ease-in-out
          "
                >
                    <div className="relative w-full">
                        <div className="p-6 h-1/2">
                            <p className="text-base md:text-lg font-medium text-gray-600 mb-2">
                                Expertise
                            </p>
                            <h3 className="text-3xl md:text-5xl font-semibold mb-6">
                                Web Development & Design
                            </h3>
                            <p className="text-lg md:text-2xl text-gray-600 mb-4">
                                Building responsive websites that elevate your brand’s online
                                presence and user engagement.
                            </p>
                            <a
                                href="#projects"
                                className="text-sm font-semibold text-black flex items-center gap-1"
                            >
                                Explore <span>&rarr;</span>
                            </a>
                        </div>
                        <div className="mt-4 lg:absolute lg:bottom-0 w-full">
                            <video
                                className="rounded-b-lg h-48 md:h-64 lg:h-[400px] w-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/vid/pro_vid.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* 2 - AI Image */}
                <div
                    className="
    flex flex-col md:flex-row  md:h-80 lg:h-full
    col-span-1 
    lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2
    bg-white rounded-lg
    transition-all duration-500 ease-in-out 
  "
                >
                    <div className="w-full md:w-1/2">
                        <img
                            src="/img/ai2.jpeg"
                            alt="AI People"
                            className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none object-cover h-40 md:h-full w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-2 lg:p-6 flex flex-col">
                        <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 mb-2">
                            AI
                        </p>
                        <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4 leading-snug">
                            Learning AI Technologies
                        </h3>
                        <p className="text-sm md:text-base lg:text-xl text-gray-600 leading-relaxed">
                            Harnessing the power of AI to drive innovation and efficiency.
                        </p>
                    </div>
                </div>


                {/* 3 - Explore My Services */}
                <div
                    className="
            bg-white p-6 rounded-lg flex flex-col justify-between
            col-span-1 
            lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-4
            transition-all duration-500 ease-in-out
          "
                >
                    <div>
                        <p className="text-base md:text-xl font-medium text-gray-600 mb-2">
                            Services
                        </p>
                        <h3 className="text-2xl md:text-5xl font-semibold mb-8">
                            Explore My Services
                        </h3>
                        <p className="text-base md:text-2xl text-gray-600 mb-22">
                            Let’s collaborate to bring your ideas to life through technology
                            and design.
                        </p>
                        <div className="w-full mb-2">
                            <img
                                src="/img/ice.jpeg"
                                alt="Woman Tech"
                                className="rounded-lg h-40 md:h-[250px] lg:h-[350px] w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4 mb-0">
                        <button className="text-sm font-semibold border px-4 py-2 rounded-md hover:bg-gray-100 transition">
                            Contact
                        </button>
                        <a
                            href="#"
                            className="text-sm font-semibold flex items-center gap-1"
                        >
                            Get Started <span>&rarr;</span>
                        </a>
                    </div>
                </div>

                {/* 4 - UI/UX */}
                <div
                    className="
            bg-white p-6 rounded-lg 
            col-span-1 
            lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4
            transition-all duration-500 ease-in-out
          "
                >
                    <p className="text-base md:text-lg font-medium text-gray-600 mb-12">
                        UI/UX Design Services
                    </p>
                    <h3 className="text-2xl md:text-4xl font-semibold">
                        Designing intuitive interfaces that enhance user satisfaction.
                    </h3>
                </div>

                {/* 5 - Software Dev */}
                <div
                    className="
            bg-white p-6 rounded-lg 
            col-span-1 
            lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4
            transition-all duration-500 ease-in-out
          "
                >
                    <p className="text-base md:text-lg font-medium text-gray-600 mb-8">
                        Software Development Solutions
                    </p>
                    <h3 className="text-2xl md:text-4xl font-semibold">
                        Creating robust applications tailored to your needs.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
