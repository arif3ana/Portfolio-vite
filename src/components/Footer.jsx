import SosialIcons from "./SosialIcons";
export default function Footer({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
}) {
  return (
    <div className="flex flex-col gap-[20px] mt-[100px] mb-[50px]">
      <div className="flex justify-between items-center gap-[20px]">
        <h3 className="text-display1 text-s1 font-bold">AT</h3>
        <SosialIcons
          instagramClicked={instagramClicked}
          linkedlinClicked={linkedlinClicked}
          githubClicked={githubClicked}
        />
      </div>

      <hr className="border-[4px] border-[#212121] rounded-[5px] shadow-[-4px_-4px_10px_rgba(0,0,0,0.66)] mt-[20px]" />

      <p className="text-heading2 font-regular text-center">
        © {new Date().getFullYear()} Arif Triana. Created By Arif Triana
      </p>
      {/* All Rights Reserved. */}
    </div>
  );
}
