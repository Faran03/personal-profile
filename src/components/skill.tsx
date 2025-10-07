import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="h-screen grid place-items-center">
      <div className="w-[80vw] h-[90vh] grid grid-rows-3 place-items-center">
        <div className="grid place-items-center">
          <div className="text-[168px]/[150px] text-[#12F7D6] w-[80vw] flex flex-row-reverse pr-20">
            {"</>"}
          </div>
          <div className="font-normal text-[64px]/[72px] text-[#12f7d6] border-b-2 border-[#12f7d6] pb-1">
            Skills
          </div>
          <div className="font-normal font-ibm-plex-mono text-[16px]/[20px] mt-3">
            {"I'm striving to never stop learning and improving"}
          </div>
        </div>

        <div className="flex gap-[5vw]">
          <div className="w-[296px] h-[132px] bg-[#98FAEC] rounded-[8px] flex flex-col justify-evenly items-center">
            <Image
              src={"/icon-skill-1.svg"}
              alt="WebDev Icon"
              width={32}
              height={32}
            />
            <div className="font-normal font-ibm-plex-mono text-[24px]/[32px] text-[#292F36]">
              Web Developement
            </div>
            <div className="font-normal font-ibm-plex-mono text-[16px]/[20px] text-[#292F36]">
              HTML·CSS·JS·REACT
            </div>
          </div>

          <div className="w-[296px] h-[132px] bg-[#98FAEC] rounded-[8px] flex flex-col justify-evenly items-center">
            <Image
              src={"/icon-skill-2.svg"}
              alt="AppDev Icon"
              width={32}
              height={32}
            />
            <div className="font-normal font-ibm-plex-mono text-[24px]/[32px] text-[#292F36]">
              App Developement
            </div>
            <div className="font-normal font-ibm-plex-mono text-[16px]/[20px] text-[#292F36]">
              iOS·Android
            </div>
          </div>
        </div>

        <div className="w-[60vw] flex  justify-between">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src={"/Icon-html.svg"}
              alt="icon html"
              width={144}
              height={144}
            />
            <div className="font-medium text-[32px]/[42px] text-[#E54F26]">
              HTML
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src={"/Icon-css.svg"}
              alt="icon css"
              width={144}
              height={144}
            />
            <div className="font-medium text-[32px]/[42px] text-[#0C73B8]">
              CSS
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src={"/Icon-js.svg"}
              alt="icon js"
              width={144}
              height={144}
            />
            <div className="font-medium text-[32px]/[42px] text-[#E7A020]">
              JS
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src={"/Icon-react.svg"}
              alt="icon react"
              width={144}
              height={144}
            />
            <div className="font-medium text-[32px]/[42px] text-[#28A9E0]">
              REACT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
