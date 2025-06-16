import React from "react";
import Home from "./page/Home";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = React.useRef(null);
  //Google analytik integration
  ReactGA.initialize(import.meta.env.VITE_APP_GA_ID);
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    // Inisialisasi Lenis
    const lenis = new Lenis({
      lerp: 0.1, // 0 to 1 => semakin kecil, semakin lambat & smooth
      mode: "smooth", // "scroll" atau "smooth" hanya untuk desktop
    });

    lenisRef.current = lenis;

    // Loop animasi menggunakan requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sinkronisasi dengan GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform", // Karena Lenis menggunakan transform
    });

    // Update GSAP ketika Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.defaults({
      scroller: document.body,
    });
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return <Home />;
}

export default App;
