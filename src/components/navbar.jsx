import Resume from "../assets/Arif triana Resume.pdf";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-center bg-primary">
      <div className="xl:max-w-[1280px] px-[25px] xl:px-0 w-full flex justify-between">
        <p className="text-display1 text-s1 font-bold">AT</p>

        {/* humburger menu */}
        {/* <button
          className="btn-nav"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="bi bi-list" />
        </button> */}

        <div
          className="offcanvas offcanvas-end min-w-[50%] flex items-center"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          {/* <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div> */}

          <div className="offcanvas-body min-w-full">
            <ul className="flex gap-[40px] justify-end text-heading1">
              <li>
                <a className="hover:text-s1" href="#contact">
                  Hire Me
                </a>
              </li>
              <li>
                <a className="hover:text-s1" href={Resume} download>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
