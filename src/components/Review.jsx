export default function PAgeReview({ ...props }) {
  return (
    <div className="flex flex-col items-center mt-[250px] xs:gap-[40px] 2xl:gap-[80px]">
      <h3 className="text-display1">"</h3>
      <div className="flex items-center xs:gap-[24px] 2xl:gap-[40px] xs:flex-col lg:flex-row">
        <div className="xs:w-full xl:w-[40%] xl:min-h-[419px] overflow-hidden shadow-[-15px_-15px_50px_rgba(0,0,0,0.66)]">
          <img
            src={!props.image ? dumy : props.image}
            alt={`${props.name} | ${props.position}`}
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="xs:w-full xl:w-[60%] flex flex-col gap-[20px]">
          <div>
            <p className="xs:text-heading4 md:text-heading3 2xl:text-heading2 font-regular">
              TESTIMONIAL
            </p>
            <h3 className="xs:text-display4 md:text-display3 2xl:text-display2">
              Client Review
            </h3>
          </div>
          <p className="xs:text-heading4 md:text-heading2 2xl:text-heading1 font-regular">
            {props.content}
          </p>

          <hr className="xs:border-[2px] 2xl:border-[4px] border-[#212121] rounded-[5px] shadow-[-4px_-4px_10px_rgba(0,0,0,0.66)] mt-[20px]" />
          

          <div>
            <h4 className="xs:text-heading1 md:text-display4 2xl:text-display3">
              {props.name}
            </h4>
            <p className="xs:text-heading4 md:text-heading2 2xl:text-heading1 font-regular">
              {props.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
