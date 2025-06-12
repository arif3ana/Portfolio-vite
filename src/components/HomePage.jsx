import SosialIcons from "./SosialIcons";
export default function FirstPage({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
}) {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center">
      <div className="flex flex-col xs:gap-[32px] md:gap-[46px]">
        <div>
          <p className="xs:text-heading2 xs:text-center md:text-heading1 md:text-left 2xl:text-display3 bg-transparent text-[#888a97] font-bold">Hello I'm</p>
          <h1 className="xs:text-[38px]/[38px] xs:text-center md:text-[72px]/[70px] 2xl:text-[98px]/[87px] md:text-left font-secondary font-bold">
            FULL STACK <br /> WEB DEVELOPER
          </h1>
        </div>
        <SosialIcons
          className={"hero"}
          githubClicked={githubClicked}
          linkedlinClicked={linkedlinClicked}
          instagramClicked={instagramClicked}
        />
      </div>
    </div>
  );
}
