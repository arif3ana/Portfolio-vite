import React from "react";
import SosialIcons from "./SosialIcons";
export default function Footer({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
}) {
  return (
    <div className='content-footer container'>
      <div className='footer-main-content'>
        <div>
          <h3 className='footer-title' data-aos='zoom-in-up'
            data-aos-duration='500'>Arif</h3>
          <p className='footer-slogan' data-aos='zoom-in-up'
            data-aos-duration='700'>
          I want to help your company succeed online and bring your ideas to life digitally.
          </p>
        </div>
        <SosialIcons
          className={"footer"}
          instagramClicked={instagramClicked}
          linkedlinClicked={linkedlinClicked}
          githubClicked={githubClicked}
          active={false}
        />
      </div>
      <hr />
      <p className='text-footer'>
        © {new Date().getFullYear()} Arif Triana. Created By Arif Triana
      </p>
      {/* All Rights Reserved. */}
    </div>
  );
}
