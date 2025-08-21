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
        <section className="relative bg-[#EDEDED] py-20 px-4 md:px-10 lg:px-20 font-sans">
            {/* Heading */}
            <div className="text-center mb-20">
                <p className="text-xl uppercase tracking-wider mb-4 font-medium">Innovative</p>
                <h2 className="text-3xl md:text-5xl font-extralight font-stretch-105% mt-2">Expertise That Transforms</h2>
                <p className="text-gray-700 mt-4 max-w-xl mx-auto">
                    Crafting digital experiences that engage and inspire.
                </p>
            </div>

            {/* Floating PNG animation */}
            <div className="absolute top-0 left-0 z-50 pointer-events-none">
                <img
                    ref={flyingImgRef}
                    src="/img/react.png" // Replace with your PNG path
                    alt="Floating Icon"
                    className="w-20 h-20"
                />
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-4 grid-rows-3 gap-6">
                {/* 1 - Web Development */}
                <div className="bg-white h-[750px] rounded-lg flex justify-between col-start-1 col-end-3 row-start-1 row-end-3">
                    <div className="relative w-full">
                        <div className="p-6 h-1/2">
                            <p className="text-lg font-medium text-gray-600 mb-2 ">Expertise</p>
                            <h3 className="text-5xl  font-semibold mb-10">Web Development & Design</h3>
                            <p className="text-2xl text-gray-600 mb-4">
                                Building responsive websites that elevate your brand’s online presence and user engagement.
                            </p>
                            <a href="#" className="text-sm font-semibold text-black flex items-center gap-1">
                                Explore <span>&rarr;</span>
                            </a>
                        </div>
                        <div className="absolute bottom-0  w-full">
                            <video
                                className="rounded-b-lg h-[400px] w-full object-cover"
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
                <div className="flex flex-col col-start-3 col-end-5 row-start-1 row-end-2">
                    <div className="bg-white  rounded-lg flex  justify-between min-h-[145px] h-[350px]">

                        <div className="w-1/2 h-full flex">
                            <img
                                src="/img/ai2.jpeg"
                                alt="AI People"
                                className="rounded-l-lg object-cover h-full w-full max-w-[350px]"
                            />
                        </div>

                        <div className="w-1/2 p-6 flex flex-col ">
                            <p className="text-lg font-medium text-gray-600 mb-2">AI</p>
                            <h3 className="text-4xl font-semibold mb-8">Learning AI Technologies</h3>
                            <p className="text-xl text-gray-600 mb-4">Harnessing the power of AI to drive innovation and efficiency.</p>
                            <a href="#" className="text-sm font-semibold text-black flex items-center gap-1">
                                Join <span>&rarr;</span>
                            </a>
                        </div>


                    </div>
                </div>


                {/* 3 - Explore My Services */}
                <div className="bg-white p-6 rounded-lg flex flex-col justify-between col-start-3 col-end-5 row-start-2 row-end-4 min-h-[300px]">
                    <div>
                        <p className="font-roboto text-xl font-medium text-gray-600 mb-2">Services</p>
                        <h3 className="font-poppins text-5xl font-semibold mb-10">Explore My Services</h3>
                        <p className="text-2xl text-gray-600 mb-16 font-Raleway">
                            Let’s collaborate to bring your ideas to life through technology and design.
                        </p>

                        <div className="w-full mb-8">
                            <img
                                src="/img/ice.jpeg"
                                alt="Woman Tech"
                                className="rounded-lg h-[350px] w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button className="text-sm font-semibold border px-4 py-2 rounded-md hover:bg-gray-100">
                            Contact
                        </button>
                        <a href="#" className="text-sm font-semibold flex items-center gap-1">
                            Get Started <span>&rarr;</span>
                        </a>
                    </div>
                </div>




                {/* 5 - UI/UX Design */}
                <div className="bg-white p-6 rounded-lg flex flex-col justify-between col-start-1 col-end-2 row-start-3 row-end-4 min-h-[145px]">
                    <div>
                        <p className="text-lg font-medium text-gray-600 mb-2">UI/UX Design Services</p>
                        <h3 className="text-4xl font-semibold mb-2">
                            Designing intuitive interfaces that enhance user satisfaction.
                        </h3>
                    </div>
                    <a href="#" className="text-sm font-semibold text-black flex items-center gap-1">
                        Discover <span>&rarr;</span>
                    </a>
                </div>

                {/* 6 - Software Dev Solutions */}
                <div className="bg-white p-6 rounded-lg flex flex-col justify-between col-start-2 col-end-3 row-start-3 row-end-4 min-h-[145px]">
                    <div>
                        <p className="text-lg font-medium text-gray-600 mb-2">Software Development Solutions</p>
                        <h3 className="text-4xl font-semibold mb-2">Creating robust applications tailored to your needs.</h3>
                    </div>
                    <a href="#" className="text-sm font-semibold text-black flex items-center gap-1">
                        Inquire <span>&rarr;</span>
                    </a>
                </div>

                {/* 7 - Woman Image */}

            </div>

        </section>
    );
};

export default Expertise;
