import Card from "./Card";
import { projectData } from "../utils/projectsData";
import { Link } from "react-router-dom";
export default function Projects() {
  const limitData = projectData.slice(0, 3);
  return (
    <div className="flex flex-col justify-center items-center gap-[120px] mt-[100px]">
      <h3 className="text-display1 font-bold">Portfolio</h3>
      <div className="flex flex-col gap-[120px]">
        {limitData.reverse().map((proyek, index) => (
          <Card
            key={`${proyek.id}-${index}`}
            id={index}
            image={proyek.image}
            title={proyek.title}
            content={proyek.description.split(" ").slice(0, 38).join(" ")}
          />
        ))}
      </div>
      {/* <div className='btn-view-project' data-aos='zoom-in-up'>
        <Link to='/show-portfolio' className='btn-view'>
          View all
        </Link>
      </div> */}
    </div>
  );
}
