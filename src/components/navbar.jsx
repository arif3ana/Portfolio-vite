import React from "react";
export default function Navbar() {
  const [activeLink, setActiveLink] = React.useState(null);
  const menuItems = [
    { id: "contact", label: "Hire Me", href: "#contact" },
    // { id: "resume", label: "Resume", href: "/assets/Arif triana Resume.pdf", download: true },
  ];

  React.useEffect(() => {
    let time = setTimeout(() => {
      setActiveLink(null);
    }, 1000); // 2 second
    return () => clearTimeout(time);
  }, [activeLink]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-center bg-primary">
      <div className="xl:max-w-[1280px] px-[25px] py-[6px] 2xl:px-0 w-full flex justify-between">
        <p className="xs:text-display4 md:text-display3 2xl:text-display2 text-s1 font-bold cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          AT
        </p>

        <div
          className="offcanvas offcanvas-end min-w-[50%] flex items-center"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-body min-w-full">
            <ul className="flex xs:gap-[20px] 2xl:gap-[40px] justify-end xs:text-heading4 md:text-heading2 2xl:text-heading1 font-bold">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="group relative cursor-pointer"
                  onClick={() => setActiveLink(item.id)}
                >
                  <a
                    href={item.href}
                    {...(item.download ? { download: true } : {})}
                  >
                    {item.label}
                  </a>
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-[3px] rounded-2xl bg-s1
                      transition-transform duration-300 origin-left
                      ${activeLink === item.id ? "scale-x-100" : "scale-x-0"}
                      group-hover:scale-x-100
                    `}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
