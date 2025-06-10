import SosialIcons from "./SosialIcons";
export default function Footer({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
}) {
  return (
    <div className="flex flex-col mt-[100px] mb-[40px]">
      <div className="flex justify-between items-end">
        <h3 className="xs:text-display4 md:text-display3 2xl:text-display2 text-s1 font-bold">
          AT
        </h3>
        <SosialIcons
          isFooter={true}
          instagramClicked={instagramClicked}
          linkedlinClicked={linkedlinClicked}
          githubClicked={githubClicked}
        />
      </div>

      <hr className="xs:border-[2px] 2xl:border-[4px] border-[#212121] rounded-[5px] shadow-[-4px_-4px_10px_rgba(0,0,0,0.66)] mt-[20px]" />

      <p className="xs:text-body2 md:text-body1 xl:text-heading4 2xl:text-heading2 font-regular text-center mt-[20px]">
        © {new Date().getFullYear()} Arif Triana. Created By Arif Triana
      </p>
      {/* All Rights Reserved. */}
    </div>
  );
}
