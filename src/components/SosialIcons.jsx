import { useEffect, useState } from "react";

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
    <div className={`icons-${className} flex gap-[25px]`}>
      {isYes && active ? (
        <>
          <a
            className="bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] w-[80px] h-[80px] flex justify-center items-center rounded-full text-display3"
            onClick={instagramClicked}
            href="https://www.instagram.com/arif.3ana/"
            target="_blank"
          >
            <i className="bi bi-instagram bg-transparent" />
          </a>
          <a
            className="bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] w-[80px] h-[80px] flex justify-center items-center rounded-full text-display3"
            onClick={linkedlinClicked}
            href="https://linkedin.com/in/arif-triana-48bb74254"
            target="_blank"
          >
            <i className="bi bi-linkedin bg-transparent" />
          </a>
          <a
            className="bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] w-[80px] h-[80px] flex justify-center items-center rounded-full text-display3"
            onClick={githubClicked}
            href="https://github.com/arif3ana"
            target="_blank"
          >
            <i className="bi bi-github bg-transparent" />
          </a>
        </>
      ) : (
        <>
          <a
            onClick={instagramClicked}
            href="https://www.instagram.com/arif.3ana/"
            target="_blank"
          >
            <i className="bi bg-transparent bi-instagram" />
          </a>
          <a
            onClick={linkedlinClicked}
            href="https://linkedin.com/in/arif-triana-48bb74254"
            target="_blank"
          >
            <i className="bi bg-transparent bi-linkedin" />
          </a>
          <a
            onClick={githubClicked}
            href="https://github.com/arif3ana"
            target="_blank"
          >
            <i className="bi bg-transparent bi-github" />
          </a>
        </>
      )}
    </div>
  );
}

export default SosialIcons;
