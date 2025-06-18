import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Particle = () => {
  const particleRef = React.useRef(null);
  const { style, speed } = React.useMemo(() => {
    const size = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // 50px - 200px

    // Maks posisi top/left = 100% - maxSize (dalam px atau %, tergantung container)
    const safeArea = 100 - (size / window.innerHeight) * 100;
    const top = Math.random() * safeArea;
    const left = Math.random() * safeArea;

    // Buat speed-nya acak antara 0.3 sampai 1.2
    const speed = Math.random() * (2.3 - 0.3) + 0.3;

    return {
      style: {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
      },
      speed,
    };
  }, []);

  React.useLayoutEffect(() => {
    const el = particleRef.current;

    gsap.to(el, {
      y: () => -(window.innerHeight * speed),
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // membuat animasi sinkron dengan scroll
      },
    });

    return () => {
      ScrollTrigger.killAll(el);
    };
  }, []);

  return (
    <div
      ref={particleRef}
      className="bg-[#1A213B] rounded-full absolute"
      style={style}
    />
  );
};

export default Particle;
