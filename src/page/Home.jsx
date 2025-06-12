import React from "react";
import Navbar from "../components/navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Projects from "../components/Projects";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ReactGA from "react-ga4";
import { reviewer } from "../utils/projectsData";
import Particle from "../components/Particle";
function Home() {
  const particles = Array.from({ length: 15 });
  const [showButton, setShowButton] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "LandingPage",
    });
  }, []);

  const handleLinkedlin = () => {
    ReactGA.event({
      category: "Linkedlin ",
      action: "Linkedlin Clicked",
      label: "Linkedlin icon",
    });
  };
  const handleInstagram = () => {
    ReactGA.event({
      category: "Instagram ",
      action: "Instagram Clicked",
      label: "Instagram icon",
    });
  };
  const handleGithub = () => {
    ReactGA.event({
      category: "Github",
      action: "Github Clicked",
      label: "Github icon",
    });
  };

  const handleEmailClick = () => {
    ReactGA.event({
      category: "Email contact",
      action: "Email contact Link Clicked",
      label: "Email Clicked",
    });
  };

  const handleWaClick = () => {
    ReactGA.event({
      category: "Whatsaap contact",
      action: "Whatsaap contact Link Clicked",
      label: "Whatsaap Clicked",
    });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 100 && currentY < lastScrollY) {
        // Scroll ke bawah & naik sedikit
        setShowButton(true);
      } else {
        // Di paling atas atau scroll ke bawah
        setShowButton(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Efek klik selama 200ms
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <HomePage
          linkedlinClicked={handleLinkedlin}
          instagramClicked={handleInstagram}
          githubClicked={handleGithub}
        />
      </section>
      <main>
        <article id="about">
          <About />
        </article>
        <article id="projects">
          <Projects />
        </article>
        <article id="portfolio">
          {reviewer.map((review) => {
            if (!review.name || !review.content) {
              return null;
            }
            return (
              <Review
                key={review.id}
                name={review.name}
                position={review.position}
                content={review.content}
                image={review.image}
              />
            );
          })}
        </article>
        <article id="contact">
          <Contact emailClick={handleEmailClick} waClick={handleWaClick} />
        </article>
      </main>

      {/* circler particle */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        {particles.map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      {/* button scroll to top */}
      <div
        className={`fixed bottom-10 right-10 z-10 transition-opacity duration-300 ${
          showButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={handleClick}
          className={`bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)]
          xs:w-[50px] xs:h-[50px] xs:text-heading1
          md:w-[60px] md:h-[60px] md:text-heading1
          2xl:w-[80px] 2xl:h-[80px] 2xl:text-display3
          flex justify-center items-center rounded-full cursor-pointer
          transition-transform duration-200
          ${isClicked ? "scale-90" : "scale-100"}`}
        >
          <i class="bi bi-arrow-bar-up"></i>
        </button>
      </div>
      <footer>
        <Footer
          linkedlinClicked={handleLinkedlin}
          instagramClicked={handleInstagram}
          githubClicked={handleGithub}
        />
      </footer>
    </>
  );
}

export default Home;
