
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Card component
const Card = ({ image, title, price, description, tags, link, codeLink }) => {
  const isComingSoon = !link || link.toLowerCase() === "coming soon";

  return (
    <div className="relative rounded-[30px] w-80 h-90 overflow-hidden shadow-lg backdrop-blur-md bg-white/10 border border-white/20 text-white transition-transform hover:scale-115 hover:z-30">
      
      {/* Background Image with Bottom Fade */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-80 object-cover z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col justify-end h-full p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm font-medium">${price}</span>
        </div>

        <p className="text-sm mb-3 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        {isComingSoon ? (
          <button
            disabled
            className="w-full bg-white/30 text-white py-2 rounded-full font-medium cursor-not-allowed"
          >
            Coming Soon
          </button>
        ) : (
          <div className="flex gap-2">
            {/* Visit Project */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center hover:scale-105 bg-white/30 text-black py-2 rounded-full font-medium transition-all"
            >
              Visit Project →
            </a>

            {/* GitHub Code */}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-center w-[20%] hover:scale-105 bg-white/30 text-black py-2 rounded-full font-medium transition-all"
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Door = () => {
  const sectionRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        delay: 2.5,
        end: "+=200%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(".door-overlay", {
      scale: 1.5,
      opacity: 0.8,
      ease: "none",
      duration: 0.5,
    })
      .to(".door-overlay", {
        scale: 2.0,
        opacity: 0,
        ease: "none",
        duration: 1.2,
      })
      .to(
        "#web-blur",
        {
          filter: "blur(0px)",
          ease: "power1.out",
        },
        "<"
      )
      .to(
        "#web-blur-layer",
        {
          filter: "blur(0px)",
          ease: "power1.out",
          scale: 1.15,
          duration: 0.5,
          delay: 1.5
        },
        "<"
      )
      .to(
        "#masked-content",
        {
          opacity: 1,
          y: -20,
          ease: "power2.out",
        },
        ">"
      )
      .to(
        "#cards-section",
        {
          opacity: 1,
          y: -30,
          duration: 0.2,
          ease: "power2.in",
          stagger: 0.1,
        },
        ">"
      );
  }, { scope: sectionRef });

  return (
    <div
      id="art"
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#2fb5dd] text-white"
    >
      {/* Background Web Image with Blur */}
      <img
        id="web-blur"
        src="/img/IslandBg.png"
        alt="Web Background"
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-0"
        style={{
          filter: "blur(8px)",
          transition: "filter 0.5s",
        }}

      />

      {/* Centered PNG Layers */}
      <div className="fixed top-3/4
      left-1/2 z-[2] h-220 w-200 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        <img
          id="web-blur-layer"
          src="/img/overlay.png"
          alt="Overlay Layer"
          className="w-full h-full object-contain"
          style={{
            filter: "blur(8px)",
            transition: "filter 0.5s",
          }}
        />
        <img
          src="/img/another-layer.png"
          alt="Another Layer"
          className="w-48 h-auto object-contain"
          style={{
            filter: "blur(8px)",
            transition: "filter 0.5s",
          }}
        />
      </div>


      {/* Door Overlay */}
      <img
        src="/img/new1.png"
        alt="Door Cover"
        className="door-overlay absolute inset-0 w-full h-full object-cover z-20 opacity-100"
        style={{ transformOrigin: "50% 90%" }}
      />

      {/* Text Content */}
      <div className="relative z-30 w-full h-screen text-center">
        {/* Heading Text */}
        <div id="masked-content" className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0">
          <h1 className="text-5xl md:text-8xl font-bold mb-2 text-white font-Sansation">
            Projects
          </h1>
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Made with Craft, Poured with Passion
          </h3>
          <p className="max-w-xl mx-auto text-white">
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>

        {/* Cards Positioned Absolutely */}
        <div id="cards-section" className="absolute inset-0 opacity-0 pointer-events-auto">
          {/* Top Left */}
          <div className="absolute top-[14%] left-[4%] h-[300px] w-[280px]">
            <Card
              image="/img/Zen_ss.png"
              title="Swiss Alps Retreat"
              price="710"
              description="Escape to a cozy alpine retreat with breathtaking views."
              tags={["Luxury Stay", "2 Day stay"]}
              link="https://zentry-web-five.vercel.app/"
              codeLink="https://github.com/your-username/zentry-web"
            />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[9%] left-[6%] h-[300px] w-[280px]">
            <Card
              image="/img/moji_ss.png"
              title="Iceland Cabin"
              price="680"
              description="Cozy cabin nestled in Iceland’s breathtaking landscape."
              tags={["Top Rated", "5 Day stay"]}
              link="https://mojito-gsap-jl4b-ayushmandawgade123-gmailcoms-projects.vercel.app/"
              codeLink="https://github.com/your-username/zentry-web"
            />
          </div>

          {/* Top Right */}
          <div className="absolute top-[14%] right-[12%] h-[300px] w-[280px]">
            <Card
              image="/img/Ai_ss.png"
              title="Tokyo Penthouse"
              price="950"
              description="A sleek penthouse in the heart of Tokyo."
              tags={["Cityscape View", "Weekend Stay"]}
              link="Coming Soon"
              codeLink="https://github.com/your-username/zentry-web"
            />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[9%] right-[14%] h-[300px] w-[280px]">
            <Card
              image="/img/cour_ss.png"
              title="Maldives Escape"
              price="1200"
              description="Overwater villa with private pool and sunset views."
              tags={["Romantic", "Beachfront"]}
              link="Coming Soon"
              codeLink="https://github.com/your-username/zentry-web"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Door;
