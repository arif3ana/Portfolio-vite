import React from "react";

function Card({
  classContainer,
  image,
  classImage,
  title,
  content,
  classBotton,
  id,
}) {
  return (
    <div className={`card-${classContainer}`}>
      <div className='card-image' data-aos='zoom-in-up'>
        <img
          src={image}
          className={`card-img ${classImage}`}
          alt={`© ${new Date().getFullYear()} created by Arif Triana`}
          loading='lezy'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-hero' data-aos='fade-up' data-aos-duration='500'>PROJECT {id + 1}</h5>
        <h5 className='card-title' data-aos='fade-up' data-aos-duration='1000'>{title}</h5>
        <p className='card-text' data-aos='fade-up' data-aos-duration='1500'>{content}</p>
        <button
          data-aos='zoom-in-up'
          className={classBotton}
          data-bs-toggle='modal'
          data-bs-target={`#detailProject-${id}`}>
          <strong>
            <i className='bi bi-arrow-right' /> Read More
          </strong>
        </button>
      </div>
    </div>
  );
}

export default Card;
