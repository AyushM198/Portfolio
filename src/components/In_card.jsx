import React, { useRef } from "react";
import gsap from "gsap";

const ParallaxHoleCard = () => {
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Movement strength (smaller = subtle, bigger = dramatic)
        const moveX = ((x - centerX) / centerX) * 20;
        const moveY = ((y - centerY) / centerY) * 20;

        gsap.to(imgRef.current, {
            x: moveX,
            y: moveY,
            scale: 1.1, // zoom for depth illusion
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-[90vw] max-w-[400px] h-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden relative"
            >
                {/* Image moves inside */}
                <img
                    ref={imgRef}
                    src="/img/web.jpeg"
                    alt="Depth Effect"
                    className="absolute w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ParallaxHoleCard;
