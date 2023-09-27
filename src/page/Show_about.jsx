import React, { useEffect } from "react";
import web from "../assets/img/web.webp";
import SosialIcons from "../components/SosialIcons";
import BottonBack from "../components/BottonBack";
import ReactGA from "react-ga4";
function Show_about() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "About Page",
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

  return (
    <>
      <header>
        <BottonBack />
      </header>
      <main className='show-about'>
        <img
          src={web}
          alt='photo arif triana web developer'
          className='img-top-main'
          loading='lezy'
        />
        <section className='show-about-article container'>
          <article className='side-content'>
            <div className='hero'>
              <p className='about-introduce'>
                <span className='hi-about'>Hi there👋</span>
                <span className='intro-about'>
                  I'm <strong className='name-about'>Arif triana</strong>
                </span>
                <span className='tag-about'>Web Developer</span>
              </p>
            </div>
            <SosialIcons
              className={"show-about"}
              instagramClicked={handleInstagram}
              linkedlinClicked={handleLinkedlin}
              githubClicked={handleGithub}
            />
          </article>
          <article className='main-content'>
            <p>
              I'm a web developer based in Indonesia. My journey into the world
              of web development started when I was in vocational high school.
              There, I, Arif Triana, focused my attention and hard work on the
              software engineering program. I felt incredibly grateful when I
              graduated with the highest honors in the field.
            </p>
            <p>
              However, my journey has been more than just learning the technical
              aspects. I am actively involved in several school organizations
              that help me develop my social and leadership skills. Through
              these experiences, I began to see that the world of web
              development was an exciting stage full of potential.
            </p>
            <p>
              While still in vocational school, I was given the opportunity by
              the school to intern at DKIS (Communication, Informatics and
              Statistics Office). This experience truly opened my eyes to the
              dynamic and opportunity-rich world of information technology. It
              was here that my primary interest in becoming a web developer
              began to take shape.
            </p>
            <p>
              After graduating from high school, I decided to take it a step
              further by attending bootcamps and obtaining certificates to
              enrich my knowledge. Currently, I have specialized as a full-stack
              developer with skills in both front-end and back-end website
              development.
            </p>
            <p>
              I diligently practice and engage in various projects, one of which
              is the "wearhouse-web" inventory website project. This project,
              which uses ReactJS for the frontend and Laravel for the backend,
              is one of my personal projects dedicated to honing my skills. I
              meticulously designed everything from the user interface to the
              database schema to match the features I wanted to build. You can
              find this project in my GitHub repository at{" "}
              <a
                href='https://github.com/arif3ana/wearhouse-web'
                target='_blank'>
                wearhouse-web
              </a>
            </p>
            <p>
              Every step of this journey has been fueled by my enthusiasm to
              continue learning and growing in this ever-changing field. I
              sincerely hope to make a positive contribution by creating
              innovative and useful web solutions for everyone.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Show_about;
