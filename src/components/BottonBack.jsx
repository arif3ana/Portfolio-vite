import React from "react";
import { Link } from "react-router-dom";
function BottonBack() {
  return (
    <div className='btn-back-show'>
      <Link to='/' className='btn-back'>
        <i className='bi bi-arrow-left-short' />
      </Link>
    </div>
  );
}

export default BottonBack;
// Style di showAbout.css
