import { useEffect, useState } from "react";
import html from "../assets/img/html.webp";
import css from "../assets/img/CSS.webp";
import js from "../assets/img/js.webp";
import php from "../assets/img/php.webp";
import react from "../assets/img/React.webp";
import laravel from "../assets/img/laravel.webp";
import Resume from "../assets/Arif triana Resume.pdf";
import { Link } from "react-router-dom";
export default function About() {
  const who = (
    <p className="about-article">
      <span className="hello">Hello, I'm Arif Triana</span>, the top software
      engineering graduate from high school. I am an active member of several
      organizations and have completed an internship at DKIS (Agency of
      Communication, Informatics, and Statistics), where I gained valuable
      insights into technology. I specialize in full-stack development with a
      focus on both frontend and backend website development. I am committed to
      continuous learning and innovation in this field.{" "}
      <Link to="/show-about" className="show">
        .....Read More
      </Link>
    </p>
  );

  const what = (
    <p className="about-article">
      I am an end-to-end website development. My responsibilities include
      website planning, design and development, both front-end (user interface)
      and back-end (logic and database). I work closely with clients to realize
      their vision, ensuring that the site is fit for purpose, performs
      optimally, and is secure. My goal is to deliver responsive and optimized
      web solutions to my clients.
    </p>
  );

  const [isParagraf, setParagraf] = useState(who);

  useEffect(() => {
    document.querySelector("#btn-who").classList.add("text-s1");
  }, []);

  const introduceHandle = () => {
    setParagraf(who);
    document.querySelector("#btn-what").classList.remove("text-s1");
    document.querySelector("#btn-who").classList.add("text-s1");
  };

  const myWorkHandle = () => {
    setParagraf(what);
    document.querySelector("#btn-what").classList.add("text-s1");
    document.querySelector("#btn-who").classList.remove("text-s1");
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh]">
      <h3 className="text-display1 font-bold">About Me</h3>

      <div className="about-content text-center flex flex-col gap-[25px] py-[60px]">
        <div className="flex flex-col gap-[10px]">
          <ul className="nav nav-about flex gap-[60px] justify-center">
            <li className="nav-item">
              <button
                className=" about-list text-display3 font-bold cursor-pointer"
                id="btn-who"
                onClick={introduceHandle}
              >
                Who i am
              </button>
            </li>
            <li
              className="nav-item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <button
                className=" about-list text-display3 font-bold cursor-pointer"
                id="btn-what"
                onClick={myWorkHandle}
              >
                What i do
              </button>
            </li>
          </ul>
          <hr className="border-[4px] border-[#212121] rounded-[5px] shadow-[-4px_-4px_10px_rgba(0,0,0,0.66)] mt-0" />
        </div>
        <div className="nav-content text-heading1">{isParagraf}</div>
      </div>

      {/* <div className='section-button'>
        <a className='btn-hire' href='#contact' data-aos='fade-up'
            data-aos-duration='500'>
          HIRE ME
        </a>
        <a href={Resume} download className='btn-resume' data-aos='fade-up' data-aos-duration='1000'>
          RESUME
        </a>
      </div> */}

      {/* <p className='title-skill' data-aos='fade-up' data-aos-duration='500'>
        My Skills
      </p> */}

      <div className="py-[60px] flex flex-col gap-[40px]">
        <ul className="flex items-center gap-[60px] flex-row">
          <li>
            <img
              src={html}
              alt="logo html"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Html</p> */}
          </li>
          <li>
            <img
              src={css}
              alt="logo css"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Css</p> */}
          </li>
          <li>
            <img
              src={js}
              alt="logo javascript"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Javascript</p> */}
          </li>
          <li>
            <img
              src={php}
              alt="logo php"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">PHP</p> */}
          </li>
          <li>
            <img
              src={react}
              alt="logo reactjs"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">React js</p> */}
          </li>
          <li>
            <img
              src={laravel}
              alt="logo laravel"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Laravel</p> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
