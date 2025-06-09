import SosialIcons from "./SosialIcons";
export default function FirstPage({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
}) {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center">
      <div className="flex flex-col gap-[46px]">
        <div>
          <p className="text-display3 bg-transparent text-[#888a97]">Hallo I'm</p>
          <h1 className="text-[98px]/[87px] font-secondary font-bold">
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
