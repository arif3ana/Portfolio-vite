import React from "react";
import Modal from "./Modal";
import Card from "./Card";
import { projectData } from "../utils/projectsData";
import { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
  const limitData = projectData.slice(0, 3);
  return (
    <div className='projects container'>
      <h3 className='article-project-title' data-aos='fade-up' data-aos-duration='500'>PORTFOLIO</h3>
      <div className='list-project'>
        {limitData.reverse().map((proyek, index) => (
          <Fragment key={`${proyek.id}-${index}`}>
            <Card
              id={index}
              classContainer={"projects"}
              image={proyek.image}
              classImage={"img-box"}
              classBotton={"card-btn"}
              title={proyek.title}
              content={proyek.description.split(" ").slice(0, 38).join(" ")}
            />
            <Modal data={proyek} index={index} />
          </Fragment>
        ))}
      </div>
      <div className='btn-view-project' data-aos='zoom-in-up'>
        <Link to='/show-portfolio' className='btn-view'>
          View all
        </Link>
      </div>
    </div>
  );
}
