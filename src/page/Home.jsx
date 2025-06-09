import { useEffect } from "react";
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
  const particles = Array.from({ length: 12 })
  useEffect(() => {
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
      {/* <div className="w-[100px] h-[100px] bg-[#1A213B] opacity-[80%] rounded-[50%] blur-[10px] absolute top-0 left-0 right-0 bottom-0"></div> */}
      {particles.map((_, i) => (
        <Particle key={i} />
      ))}

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
