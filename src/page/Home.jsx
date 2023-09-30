import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Service from "../components/Service";
import Projects from "../components/Projects";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ReactGA from "react-ga4";
import { reviewer } from "../utils/projectsData";
function Home() {
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
        <article id='about'>
          <About />
        </article>
        <article id='projects'>
          <Projects />
        </article>
        <article id='service'>
          <Service />
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
        <article id='contact'>
          <Contact emailClick={handleEmailClick} waClick={handleWaClick} />
        </article>
      </main>
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
