import dumy from "../assets/img/dumy.webp";
export default function PAgeReview({ ...props }) {
  return (
    <div className="flex flex-col items-center mt-[250px] gap-[80px]">
      <h3 className="text-display1">"</h3>
      <div className="flex items-center gap-[60px]">
        <div className="w-[40%] min-h-[419px] overflow-hidden shadow-[-15px_-15px_50px_rgba(0,0,0,0.66)]">
          <img
            src={!props.image ? dumy : props.image}
            alt={`${props.name} | ${props.position}`}
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="w-[60%] flex flex-col gap-[20px]">
          <div>
            <p className="text-heading2 font-regular">TESTIMONIAL</p>
            <h3 className="text-display2">Client Review</h3>
          </div>
          <p className="text-heading2 font-regular">{props.content}</p>

          <hr className="border-[4px] border-[#212121] rounded-[5px] shadow-[-4px_-4px_10px_rgba(0,0,0,0.66)] mt-[20px]" />

          <div>
            <h4 className="text-display3">{props.name}</h4>
            <p className="text-heading2 font-regular">{props.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
