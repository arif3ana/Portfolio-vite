import React, { useEffect, useState } from "react";

function SosialIcons({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
  className,
  active = true,
}) {
  const [isYes, setYes] = useState(true);
  useEffect(() => {
    if (window.location.pathname === "/show-about") {
      setYes(false);
    }
    if (window.location.pathname === "/") {
      setYes(true);
    }
  }, []);

  return (
    <div className={`icons-${className}`}>
      {isYes && active ? (
        <>
          <a
            onClick={instagramClicked}
            href='https://www.instagram.com/arif.3ana/'
            data-aos='fade-left'
            data-aos-duration='1000'
            target='_blank'>
            <i className='bi bi-instagram' />
          </a>
          <a
            onClick={linkedlinClicked}
            href='https://linkedin.com/in/arif-triana-48bb74254'
            data-aos='fade-left'
            data-aos-duration='2000'
            target='_blank'>
            <i className='bi bi-linkedin' />
          </a>
          <a
            onClick={githubClicked}
            href='https://github.com/arif3ana'
            data-aos='fade-left'
            data-aos-duration='3000'
            target='_blank'>
            <i className='bi bi-github' />
          </a>
        </>
      ) : (
        <>
          <a
            onClick={instagramClicked}
            href='https://www.instagram.com/arif.3ana/'
            target='_blank'>
            <i className='bi bi-instagram' />
          </a>
          <a
            onClick={linkedlinClicked}
            href='https://linkedin.com/in/arif-triana-48bb74254'
            target='_blank'>
            <i className='bi bi-linkedin' />
          </a>
          <a
            onClick={githubClicked}
            href='https://github.com/arif3ana'
            target='_blank'>
            <i className='bi bi-github' />
          </a>
        </>
      )}
    </div>
  );
}

export default SosialIcons;
