import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="w-[100%] h-screen bg-[#1A1E23] bg-[url(/contour-line.png)] grid place-items-center"
    >
      <div className="mx-[6.5%] w-[auto] h-[auto] flex gap-[5vw]">
        <div>
          <div className="w-[367px] h-[104px] bg-[#292F36] border-4 border-[#12F7D6] rounded-tl-[40px] rounded-br-[40px] grid place-items-center text-normal text-[64px]/[72px]">
            About Me
          </div>
          <div className="font-normal text-[16px]/[20px] font-ibm-plex-mono mt-[50px] bg-[#292F36] rounded-[40px] w-[880px] h-[360px] px-[40px] py-[24px] flex flex-col gap-3">
            <div className="font-normal text-[16px]/[20px] text-[#98FAEC] font-ibm-plex-mono">
              {"<p>"}
            </div>
            <p className="text-[#98FAEC] text-3xl">Hello!</p>
            <p>
              My name is Faran and I specialize in web development that utilizes{" "}
              <span className="text-[#98FAEC]">HTML</span>,{" "}
              <span className="text-[#98FAEC]">CSS</span>,{" "}
              <span className="text-[#98FAEC]">JS</span>, and{" "}
              <span className="text-[#98FAEC]">REACT</span> etc.
            </p>
            <p>
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving.
            </p>
            <p>
              When i&apos;m not coding, I am{" "}
              <span className="text-[#98FAEC]">writing blogs</span>, reading, or
              picking up some new hands-on art project like{" "}
              <span className="text-[#98FAEC]">photography</span>
            </p>
            <p>
              I like to have my perspective and belief systems challenged so
              that I see the world through new eyes.
            </p>
            <div className="font-normal text-[14px]/[18px] text-[#98FAEC] font-ibm-plex-mono">
              {"</p>"}
            </div>
          </div>
        </div>
        <Image src={"/image-1.png"} alt="img-1" width={462} height={556} />
      </div>
    </div>
  );
}
