import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const lockTopRef = useRef(0); // absolute Y position where locking starts
  const startYRef = useRef(0);  // touchstart Y

  // Helper: compute absolute top of footer in document
  const updateLockTop = () => {
    const el = footerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    lockTopRef.current = Math.round(window.scrollY + rect.top);
  };

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    // Animate footer as it enters
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

    // Allow ScrollTrigger to re-calc on refresh
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
    if (unlocked) return; // no lock once unlocked

    const stopAtFooter = () => {
      // If scrolled past footer top, snap back to exactly footer top
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
      // deltaY > 0 => attempting to scroll down
      if (window.scrollY >= lockTopRef.current && e.deltaY > 0) {
        e.preventDefault();
        window.scrollTo(0, lockTopRef.current);
      }
    };

    const onKeyDown = (e) => {
      if (unlocked) return;
      // Keys that scroll down
      const downKeys = new Set([
        "ArrowDown",
        "PageDown",
        "End",
        "Space",
      ]);
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
      const dy = startYRef.current - currentY; // >0 => swipe up (scrolling down)
      if (window.scrollY >= lockTopRef.current && dy > 0) {
        e.preventDefault();
        window.scrollTo(0, lockTopRef.current);
      }
    };

    // Listeners (note the passive flags so we can preventDefault)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    // Initial snap if page loads already at/after footer
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
    setUnlocked(true); // remove the lock; user can scroll down to the next section
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-gray-200 py-16 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-2xl font-semibold mb-4">Footer Lock Section 🔒</h2>
      <p className="text-gray-400 mb-6 text-center">
        You can scroll up anytime. To continue downward, unlock below.
      </p>

      <button
        onClick={handleUnlock}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium"
      >
        Unlock Next Section
      </button>

      <div className="flex space-x-6 text-2xl mt-10">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
