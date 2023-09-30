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
          <h3 className='footer-title'>Arif</h3>
          <p className='footer-slogan'>
            I Want to Help Your Company Succeed Online and Bring Your Ideas to
            Life Digitally.
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
