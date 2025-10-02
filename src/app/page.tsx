import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="w-[100%] h-[15vh] bg-[#292f36]">
        <Navbar />
      </header>

      <div id="hero" className="w-[100%] h-[85vh]">
        <div className="mx-[5%] mt-[25px] w-auto h-[66.5vh] grid grid-cols-[320px_auto_215px] gris-rows-2 gap-y-[30px] place-items-center">
          <div className="font-normal text-[117px]/[134px] text-[#98FAEC] col-span-3 text-center h-[134px]">
            Developer
          </div>
          <div className=" border-2 w-[320px] h-[520px] rounded-tl-[160px] rounded-br-[160px] flex flex-col items-center">
            <div className="w-[96px] h-[96px] border rounded-[50%] mt-7 place-content-center">
              Picture
            </div>
            <div className="font-medium text-[32px]/[42px] font-ibm-plex-mono mt-[16px]">
              Faran
            </div>
            <div className="font-normal text-[14px]/[18px] font-ibm-plex-mono">
              Full-Stack Developer
            </div>
            <div className="mx-[3%] mt-8">
              <div className="font-normal text-[14px]/[18px] font-ibm-plex-mono mb-4 flex">
                <Image
                  src={"/icon-mail.png"}
                  alt="icon-mail"
                  width={14}
                  height={14}
                  className="mr-[16px]"
                />
                faranahmadf@gmail.com
              </div>
              <div className="font-normal text-[14px]/[18px] font-ibm-plex-mono mb-4 flex">
                <Image
                  src={"/icon-location.png"}
                  alt="icon-location"
                  width={14}
                  height={14}
                  className="mr-[16px]"
                />
                Indonesia
              </div>
              <div className="font-normal text-[14px]/[18px] font-ibm-plex-mono mb-4 flex">
                <Image
                  src={"/icon-briefcase.png"}
                  alt="icon-briefcase"
                  width={14}
                  height={14}
                  className="mr-[16px]"
                />
                Full-Time / Freelancer
              </div>
              <div className="font-normal text-[14px]/[18px] font-ibm-plex-mono mb-4 flex">
                <Image
                  src={"/icon-link.png"}
                  alt="icon-link"
                  width={14}
                  height={14}
                  className="mr-[16px]"
                />
                www.faranaja.com
              </div>
              <div className="flex gap-3 mt-3">
                <div className="w-[50px] h-[18px] font-normal text-[14px]/[18px] text-[#292F36] font-ibm-plex-mono bg-[#12F7D6] rounded-[8px] flex flex-col items-center">
                  HTML
                </div>
                <div className="w-[50px] h-[18px] font-normal text-[14px]/[18px] text-[#292F36] font-ibm-plex-mono bg-[#12F7D6] rounded-[8px] flex flex-col items-center">
                  CSS
                </div>
                <div className="w-[50px] h-[18px] font-normal text-[14px]/[18px] text-[#292F36] font-ibm-plex-mono bg-[#12F7D6] rounded-[8px] flex flex-col items-center">
                  JAVA
                </div>
                <div className="w-[50px] h-[18px] font-normal text-[14px]/[18px] text-[#292F36] font-ibm-plex-mono bg-[#12F7D6] rounded-[8px] flex flex-col items-center">
                  REACT
                </div>
              </div>
              <button className="w-[227px] h-[56px] bg-white rounded-[32px] font-normal text-[20px]/[24px] text-[#292F36] mt-5">
                DOWNLOAD CV
              </button>
            </div>
          </div>
          <div className=" w-auto mx-[50px]">
            <div className="font-normal text-[14px]/[18px] text-[#98FAEC] font-ibm-plex-mono">
              {"<h1>"}
            </div>
            <div className="font-normal text-[64px]/[72px] ml-4">Hey</div>
            <div className="font-normal text-[64px]/[72px] ml-4">
              {"I'm"} <span className="text-[#98FAEC]">Faran</span>
            </div>
            <div className="font-normal text-[64px]/[72px] ml-4">
              Full-Stack Developer
              <span className="font-normal text-[14px]/[18px] text-[#98FAEC] font-ibm-plex-mono">
                {"  </h1>"}
              </span>
            </div>

            <div className="font-normal text-[14px]/[18px] text-[#98FAEC] font-ibm-plex-mono mt-5">
              {"<p>"}
            </div>
            <div className="font-normal text-[16px]/[20px] font-ibm-plex-mono w-auto ml-4 my-5">
              {
                "I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done,"
              }
            </div>
            <div className="font-normal text-[14px]/[18px] text-[#98FAEC] font-ibm-plex-mono">
              {"</p>"}
            </div>
            <div className="font-medium text-[32px]/[42px] font-ibm-plex-mono text-[#12F7D6] mt-3 flex gap-2.5">
              {"Let's Talk"}
              <Link href={"/contact"}>
                <Image
                  src={"/btn-talk.png"}
                  alt="btn-talk"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className=" bg-[#1A1E23] rounded-[80px] w-[215px] h-[378px] flex flex-col items-center justify-center gap-10">
            <div className="w-[151px] h-[62px] flex gap-4">
              <div className="font-medium text-[32px]/[42px] font-ibm-plex-mono text-[#12F7D6]">
                4
              </div>
              <div className="font-normal text-[16px]/[20px] font-ibm-plex-mono">
                Programming Language
              </div>
            </div>
            <div className="w-[151px] h-[62px] flex gap-4">
              <div className="font-medium text-[32px]/[42px] font-ibm-plex-mono text-[#12F7D6]">
                6
              </div>
              <div className="font-normal text-[16px]/[20px] font-ibm-plex-mono">
                Development Tools
              </div>
            </div>
            <div className="w-[151px] h-[62px] flex gap-4">
              <div className="font-medium text-[32px]/[42px] font-ibm-plex-mono text-[#12F7D6]">
                0
              </div>
              <div className="font-normal text-[16px]/[20px] font-ibm-plex-mono">
                Year of Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="aboutme"
        className="w-[100%] h-screen bg-[#1A1E23] bg-[url(/contour-line.png)] grid place-items-center"
      >
        <div className="mx-[5%] w-[auto] h-[auto] flex gap-[5vw]">
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
                My name is Faran and I specialize in web development that
                utilizes <span className="text-[#98FAEC]">HTML</span>,{" "}
                <span className="text-[#98FAEC]">CSS</span>,{" "}
                <span className="text-[#98FAEC]">JS</span>, and{" "}
                <span className="text-[#98FAEC]">REACT</span> etc.
              </p>
              <p>
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving.
              </p>
              <p>
                When i&apos;m not coding, I am{" "}
                <span className="text-[#98FAEC]">writing blogs</span>, reading,
                or picking up some new hands-on art project like{" "}
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
      {/* bg-[url(https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg)] bg-[#292F36]*/}
      <div id="skill" className="w-[100%] h-screen grid place-items-center">
        <div className="font-normal text-[64px]/[72px] text-[#12f7d6] opacity-100 border-b-2 border-[#12f7d6]">
          Skills
        </div>
      </div>
    </>
  );
}
