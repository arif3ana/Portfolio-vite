import React from "react";
import dumy from "../assets/img/dumy.webp";
export default function PAgeReview({ ...props }) {
  return (
    <div className='review container'>
      <h3 className='title'>"</h3>
      <div className='content'>
        <img
          src={!props.image ? dumy : props.image}
          alt={`${props.name} | ${props.position}`}
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          loading='lazy'
        />
        <div
          className='article-review'
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'>
          <p className='tag-title'>testimonial</p>
          <h3 className='title-page'>Client Review</h3>
          <p className='content-page'>{props.content}</p>
          <hr />
          <h4 className='client-name'>{props.name}</h4>
          <p className='client-position'>{props.position}</p>
        </div>
      </div>
    </div>
  );
}
