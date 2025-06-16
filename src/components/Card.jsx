import React from "react";

function Card({ image, title, content, id, url, imagePosition, isImage }) {
  const [activeLink, setActiveLink] = React.useState(false);

  const handleClick = (href) => {
    setActiveLink(!activeLink);
    window.open(href, "_blank");
  };

  React.useEffect(() => {
    let time = setTimeout(() => {
      setActiveLink(false);
    }, 1000);
    return () => clearTimeout(time);
  }, [activeLink]);
  return (
    <div
      className={`flex xs:flex-col ${
        id % 2 == 0
          ? "lg:flex-row-reverse xs:gap-[20px]"
          : "lg:flex-row xs:gap-[40px]"
      } lg:gap-[40px]`}
    >
      <div className="relative xs:w-full lg:w-[45%] lg:min-h-[380px]">
        {/* Layer belakang dengan border */}
        <div
          className={`absolute ${
            id % 2 == 0
              ? "xs:top-[-5%] xs:left-[3%] md:top-[-3%] md:left-[2%] lg:top-[-4%] lg:left-[3%] 2xl:top-[-6%] 2xl:left-[4%]"
              : "xs:bottom-[-5%] xs:left-[-3%] md:bottom-[-3%] md:left-[-2%] lg:bottom-[-3%] lg:left-[-3%] 2xl:bottom-[-6%] 2xl:left-[-4%]"
          }  w-full h-full xs:border-[3px] md:border-[5px] border-cyan-400 rounded-xl z-0`}
        />

        {/* Layer depan (gambar) */}
        <div className="relative w-full h-full bg-gray-300 rounded-xl overflow-hidden z-10">
          {isImage ? (
            <img
              src={image}
              alt={`© ${new Date().getFullYear()} created by Arif Triana`}
              loading="lazy"
              className={`object-cover w-full h-full ${imagePosition}`}
            />
          ) : (
            <video
              loop
              autoPlay
              muted
              playsInline
              src={image}
              title={title}
              className={`object-cover w-full h-full ${imagePosition}`}
              loading="lazy"
            />
          )}
        </div>
      </div>
      <div className="card-body flex flex-col justify-between xs:w-full lg:w-[55%] xs:gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <div>
            <h5 className="xs:text-heading2 md:text-display4 2xl:text-display3 text-s1">
              PROJECT {id + 1}
            </h5>
            <h5 className="xs:text-display4 md:text-display3 2xl:text-display2 font-bold">
              {title}
            </h5>
          </div>
          <p
            className="xs:text-heading4 md:text-heading2 2xl:text-heading1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div>
          <button
            disabled={url != null ? false : true}
            onClick={() => handleClick(url)}
            className={`group relative xs:text-heading3 md:text-heading1 2xl:text-heading1 tracking-[2px] flex justify-center items-center gap-[10px] cursor-pointer ${
              url != null ? "" : "opacity-50"
            }`}
          >
            Preview
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.95911 13.125L13.2091 1.875M13.2091 1.875H1.95911M13.2091 1.875V13.125"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              className={`${
                activeLink ? "scale-x-100" : "scale-x-0"
              } absolute bottom-0 left-0 w-full h-[3px] rounded-2xl bg-s1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
