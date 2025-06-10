import { useEffect, useState } from "react";

function SosialIcons({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
  className,
  isFooter = false,
}) {
  return (
    <div
      className={`icons-${className} flex ${
        isFooter ? "xs:gap-[14px]" : "xs:gap-[32px]"
      } xs:justify-center md:justify-start md:gap-[25px]`}
    >
      <a
        className="bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] xs:w-[50px] xs:h-[50px] xs:text-heading1 md:w-[60px] md:h-[60px] md:text-heading1 2xl:w-[80px] 2xl:h-[80px] 2xl:text-display3 flex justify-center items-center rounded-full"
        onClick={instagramClicked}
        href="https://www.instagram.com/arif.3ana/"
        target="_blank"
      >
        <i className="bi bi-instagram bg-transparent" />
      </a>
      <a
        className="bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] xs:w-[50px] xs:h-[50px] xs:text-heading1 md:w-[60px] md:h-[60px] md:text-heading1 2xl:w-[80px] 2xl:h-[80px] 2xl:text-display3 flex justify-center items-center rounded-full"
        onClick={linkedlinClicked}
        href="https://linkedin.com/in/arif-triana-48bb74254"
        target="_blank"
      >
        <i className="bi bi-linkedin bg-transparent" />
      </a>
      <a
        className="bg-[linear-gradient(to_bottom,#4ea0d7,#472ac0)] xs:w-[50px] xs:h-[50px] xs:text-heading1 md:w-[60px] md:h-[60px] md:text-heading1 2xl:w-[80px] 2xl:h-[80px] 2xl:text-display3 flex justify-center items-center rounded-full"
        onClick={githubClicked}
        href="https://github.com/arif3ana"
        target="_blank"
      >
        <i className="bi bi-github bg-transparent" />
      </a>
    </div>
  );
}

export default SosialIcons;
