import React from "react";
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-transparant '>
      <div className='container-fluid'>
        <span className='nav-brand h1'>Arif</span>
        <button
          className='btn-nav'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasRight'
          aria-controls='offcanvasRight'>
          <i className='bi bi-list' />
        </button>

        <div
          className='offcanvas offcanvas-end'
          tabIndex='-1'
          id='offcanvasRight'
          aria-labelledby='offcanvasRightLabel'>
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasRightLabel'>
              Arif Triana
            </h5>
            <button
              type='button'
              className='btn-close btn-close-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            />
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li className='nav-item'>
                <a className='nav-link navigate' href='#'>
                  HOME
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link navigate' href='#about'>
                  ABOUT ME
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link navigate' href='#projects'>
                  PORTFOLIO
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link navigate' href='#service'>
                  SERVICES
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link navigate' href='#contact'>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
