import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { FaArrowUp , FaXTwitter} from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const lockTopRef = useRef(0);
  const startYRef = useRef(0);

  const updateLockTop = () => {
    const el = footerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    lockTopRef.current = Math.round(window.scrollY + rect.top);
  };

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top bottom" },
      }
    );

    updateLockTop();
    const onResize = () => updateLockTop();
    window.addEventListener("resize", onResize);

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      onRefresh: updateLockTop,
    });

    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
    };
  }, []);

  useEffect(() => {
    if (unlocked) return;

    const stopAtFooter = () => {
      if (window.scrollY > lockTopRef.current) {
        window.scrollTo(0, lockTopRef.current);
      }
    };

    const onScroll = () => {
      if (unlocked) return;
      stopAtFooter();
    };

    const onWheel = (e) => {
      if (unlocked) return;
      if (window.scrollY >= lockTopRef.current && e.deltaY > 0) {
        e.preventDefault();
        window.scrollTo(0, lockTopRef.current);
      }
    };

    const onKeyDown = (e) => {
      if (unlocked) return;
      const downKeys = new Set(["ArrowDown", "PageDown", "End", "Space"]);
      if (window.scrollY >= lockTopRef.current && (downKeys.has(e.key) || downKeys.has(e.code))) {
        e.preventDefault();
        window.scrollTo(0, lockTopRef.current);
      }
    };

    const onTouchStart = (e) => {
      startYRef.current = e.touches?.[0]?.clientY ?? 0;
    };

    const onTouchMove = (e) => {
      if (unlocked) return;
      const currentY = e.touches?.[0]?.clientY ?? 0;
      const dy = startYRef.current - currentY;
      if (window.scrollY >= lockTopRef.current && dy > 0) {
        e.preventDefault();
        window.scrollTo(0, lockTopRef.current);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    stopAtFooter();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [unlocked]);

  const handleUnlock = () => {
    setUnlocked(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-gray-700 bg-[#f7f6f4] text-gray-800 py-16 px-6 md:px-12 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-3">Ayush</h2>
      <p className="text-gray-500 mb-8 text-center max-w-lg">
        Crafting digital experiences that inspire and engage. Let&apos;s create something amazing together.
      </p>

      {/* Nav Links */}
      <div className="flex space-x-10 text-lg font-medium mb-8">
        <a href="#hero" className="hover:text-gray-600 hover:scale-110 transition">Home</a>
        <a href="#projects" className="hover:text-gray-600 hover:scale-110  transition">Work</a>
        <a href="#" className="hover:text-gray-600 hover:scale-110  transition">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-12">
        <a
          href="https://github.com/AyushM198"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-600 rounded-full hover:scale-125 transition"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-mandawgade-67a359329/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-600 rounded-full hover:scale-125 transition"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://x.com/Ayush_manx"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-600 rounded-full hover:scale-125 transition"
        >
          <FaXTwitter size={18} />
        </a>
      </div>

      {/* Unlock Button */}
      {/* {!unlocked && (
        <button
          onClick={handleUnlock}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium mb-10"
        >
          Unlock Next Section
        </button>
      )} */}

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="p-4 bg-gray-200 hover:scale-125 transition rounded-full mb-10"
      >
        <FaArrowUp />
      </button>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
        © 2025 Ayush. Crafted with ❤️ and lots of coffee.
      </div>
    </footer>
  );
};

export default Footer;
