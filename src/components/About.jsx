import { useEffect, useState } from "react";
import html from "../assets/img/html.webp";
import css from "../assets/img/CSS.webp";
import js from "../assets/img/js.webp";
import php from "../assets/img/php.webp";
import react from "../assets/img/React.webp";
import laravel from "../assets/img/laravel.webp";
export default function About() {
  // const who = (
  //   <p className="about-article">
  //     <span className="hello">Hello, I'm Arif Triana</span>, the top software
  //     engineering graduate from high school. I am an active member of several
  //     organizations and have completed an internship at DKIS (Agency of
  //     Communication, Informatics, and Statistics), where I gained valuable
  //     insights into technology. I specialize in full-stack development with a
  //     focus on both frontend and backend website development. I am committed to
  //     continuous learning and innovation in this field.{" "}
  //     <Link to="/show-about" className="show">
  //       .....Read More
  //     </Link>
  //   </p>
  // );
  const who = (
    <p className="about-article">
      Hello, I'm Arif Triana, a Full Stack Web Developer with one year
      experience in website development. I have expertise in both frontend and
      backend, with a focus on creating intuitive interfaces and efficient,
      integrated backend systems. I am motivated by the challenge of creating
      impactful, functional and easy-to-use digital solutions. My career goal is
      to continue developing my technical skills and contribute to a team that
      values collaboration, innovation, and continuous development.
    </p>
  );

  // const what = (
  //   <p className="about-article">
  //     I am an end-to-end website development. My responsibilities include
  //     website planning, design and development, both front-end (user interface)
  //     and back-end (logic and database). I work closely with clients to realize
  //     their vision, ensuring that the site is fit for purpose, performs
  //     optimally, and is secure. My goal is to deliver responsive and optimized
  //     web solutions to my clients.
  //   </p>
  // );

  const what = (
    <p className="about-article">
      As a Full Stack Web Developer, I develop websites end-to-end from
      interface design to backend system integration. My responsibilities
      include creating intuitive UIs as well as stable, secure and structured
      backends. I usually use React and Material UI to build responsive
      interfaces, and Laravel and MySQL/PostgreSQL to handle application logic
      and data management. In certain projects such as landing pages or company
      profiles, I also use WordPress as a faster and more efficient solution,
      depending on the complexity and ultimate goal of the project. <br />
      My main focus is on creating lightweight, easy-to-use, and publish-ready web
      solutions. I love helping businesses and individuals build their digital
      identity through websites that are professional, functional, and ready to
      grow in the future.
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
    <div className="flex flex-col justify-center items-center">
      <h3 className="xs:text-display4 md:text-display3 2xl:text-display1 font-bold">
        About Me
      </h3>

      <div className="text-center flex flex-col gap-[25px] py-[60px]">
        <div className="flex flex-col gap-[10px]">
          <ul className="flex gap-[60px] justify-center">
            <li>
              <button
                className="about-list xs:text-heading2 md:text-heading1 2xl:text-display3 font-bold cursor-pointer"
                id="btn-who"
                onClick={introduceHandle}
              >
                Who i am
              </button>
            </li>
            <li>
              <button
                className=" about-list xs:text-heading2 md:text-heading1 2xl:text-display3 font-bold cursor-pointer"
                id="btn-what"
                onClick={myWorkHandle}
              >
                What i do
              </button>
            </li>
          </ul>
          <hr className="xs:border-[2px] 2xl:border-[4px] border-[#212121] rounded-[5px] shadow-[-4px_-4px_10px_rgba(0,0,0,0.66)] mt-0" />
        </div>
        <div className="xs:text-heading4 md:text-heading2 2xl:text-heading1 xs:text-justify md:text-center">
          {isParagraf}
        </div>
      </div>

      <div className="2xl:py-[40px] flex flex-col gap-[40px]">
        <ul className="flex flex-wrap items-center gap-x-[20px] gap-y-[30px] flex-row justify-center">
          <li className="xs:w-[100px] sm:w-[140px] md:w-[160px]">
            <img
              src={html}
              alt="logo html"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Html</p> */}
          </li>
          <li className="xs:w-[100px] sm:w-[140px] md:w-[160px]">
            <img
              src={css}
              alt="logo css"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Css</p> */}
          </li>
          <li className="xs:w-[100px] sm:w-[140px] md:w-[160px]">
            <img
              src={js}
              alt="logo javascript"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">Javascript</p> */}
          </li>
          <li className="xs:w-[100px] sm:w-[140px] md:w-[160px]">
            <img
              src={php}
              alt="logo php"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">PHP</p> */}
          </li>
          <li className="xs:w-[100px] sm:w-[140px] md:w-[160px]">
            <img
              src={react}
              alt="logo reactjs"
              className="logo-img w-full object-contain aspect-16/6"
              loading="lezy"
            />
            {/* <p className="text-heading1">React js</p> */}
          </li>
          <li className="xs:w-[100px] sm:w-[140px] md:w-[160px]">
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
