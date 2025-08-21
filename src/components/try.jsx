import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TreasureMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Start fully rolled up vertically
    gsap.set(mapRef.current, {
      scaleY: 0,
      transformOrigin: "center top",
      filter: "blur(8px)"
    });

    // Animate unroll
    gsap.to(mapRef.current, {
      scaleY: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "elastic.out(1, 0.4)"
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#f4e6c1]">
      <img
        ref={mapRef}
        src="/img/Treasure_map.png"
        alt="Treasure Map"
        className="max-w-3xl"
      />
    </div>
  );
}
