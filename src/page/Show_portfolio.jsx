import React from "react";
import BottonBack from "../components/BottonBack";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { projectData } from "../utils/projectsData";
import { Fragment, useEffect } from "react";
import ReactGA from "react-ga4";
function Show_portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Portfolio Page",
    });
  }, []);
  return (
    <>
      <header>
        <BottonBack />
      </header>
      <main>
        <article className='my-portfolio container'>
          <h3 className='article-portfolio-title'>PORTFOLIO</h3>
          <p className='my-words'>
            Experience I share: A look at the best results of my recent projects
          </p>
          <div className='list-portfolio'>
            {projectData.map((proyek, index) => (
              <Fragment key={`${proyek.id}-${index}`}>
                <Card
                  id={proyek.id}
                  classContainer={"projects"}
                  image={proyek.image}
                  classImage={"img-box"}
                  classBotton={"card-btn"}
                  title={proyek.title}
                  content={proyek.description.split(" ").slice(0, 49).join(" ")}
                />
                <Modal data={proyek} index={index} />
              </Fragment>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export default Show_portfolio;
