import React from "react";
export default function Modal({ data, index }) {
  //membuat tag paragraf
  const paragraph = data.description.split("\n\n");
  const paragraphElements = paragraph.map((paragrap, index) => (
    <p key={index}>{paragrap}</p>
  ));
  {
    if (!data.description) {
      return (
        <div
          key={data.id - index}
          className='modal fade'
          id={`detailProject-${data.id}`}
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title ' id='exampleModalLabel'>
                  {data.title}
                </h5>
                <button
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'>
                  <i className='bi bi-x-lg'></i>
                </button>
              </div>
              <div className='modal-body'>
                <p className='modal-p'>
                  The project is still the development process
                </p>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'>
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        key={data.id}
        className='modal fade'
        id={`detailProject-${data.id}`}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-4' id='exampleModalLabel'>
                {data.title}
              </h1>
              <button
                type='button'
                className='close'
                data-bs-dismiss='modal'
                aria-label='Close'>
                <i className='bi bi-x-lg'></i>
              </button>
            </div>
            <div className='modal-body'>
              <img
                src={data.image}
                className='card-img-top img-box'
                alt={`© ${new Date().getFullYear()} created by Arif Triana`}
                loading='lazy'
              />
              <div className='modal-article'>{paragraphElements}</div>
            </div>
            <div className='modal-footer-a'>
              <a
                href={data.url}
                type='button'
                className='btn-show'
                target='_blank'>
                Let's View project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
