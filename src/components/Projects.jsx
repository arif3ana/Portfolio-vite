import Card from "./Card";
import portfolio from "../data/portfolio.json";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center xs:gap-[60px] md:gap-[86px] lg:gap-[120px] mt-[200px]">
      <h3 className="xs:text-display4 md:text-display3 2xl:text-display1 font-bold">Portfolio</h3>
      <div className="flex flex-col xs:gap-[80px] md:gap-[120px]">
        {portfolio.map((proyek, index) => (
          <Card
            key={`${proyek.id}-${index}`}
            id={index}
            image={proyek.image}
            title={proyek.title}
            url={proyek.url}
            content={proyek.description}
            imagePosition={proyek.image_position}
            isImage={proyek.is_image}
          />
        ))}
      </div>
    </div>
  );
}
