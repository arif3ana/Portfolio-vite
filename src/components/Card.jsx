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
      <div className='card-image'>
        <img
          src={image}
          className={`card-img ${classImage}`}
          alt={`© ${new Date().getFullYear()} created by Arif Triana`}
          loading='lezy'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-hero'>PROJECT {id}</h5>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{content}</p>
        <button
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
