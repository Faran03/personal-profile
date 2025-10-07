export default function Testimoni() {
  return (
    <div
      id="testimoni"
      className="w-[100%] h-screen bg-[#1A1E23] bg-[url(/contour-line.png)] flex flex-col justify-center items-center gap-14"
    >
      <div className="grid place-items-center">
        <div className="font-normal text-[64px]/[72px] text-[#12f7d6] border-b-2 border-[#12f7d6] pb-1">
          Testimoni
        </div>
        <div className="font-normal font-ibm-plex-mono text-[16px]/[20px] mt-3">
          {"I had the pleasure of working with these awesome project"}
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-2 place-items-center gap-y-7">
        <div className="w-[35vw] h-[15vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-3">
          <div className="text-[#12F7D6] font-normal text-[32px]/[36px]">
            Smart Task Management App
          </div>
          <div className="font-light text-[16px]/[18px]">
            Next.JS, React, Tailwind CSS, Firebase, GitHub, Vercel, Figma
          </div>
        </div>
        <div className="w-[35vw] h-[15vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-3">
          <div className="text-[#12F7D6] font-normal text-[32px]/[36px]">
            Modern E-Commerce Web App
          </div>
          <div className="font-light text-[16px]/[18px]">
            React, Tailwind CSS, Node.js, Express, MongoDB, Stripe API, Vercel
          </div>
        </div>
        <div className="w-[35vw] h-[15vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-3">
          <div className="text-[#12F7D6] font-normal text-[32px]/[36px]">
            Real-Time Weather Dashboard
          </div>
          <div className="font-light text-[16px]/[18px]">
            Next.js, Tailwind CSS, Framer Motion, OpenWeatherMap API, Vercel
          </div>
        </div>
        <div className="w-[35vw] h-[15vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-3">
          <div className="text-[#12F7D6] font-normal text-[32px]/[36px]">
            Personal Portfolio Website
          </div>
          <div className="font-light text-[16px]/[18px]">
            Next.JS, React, Tailwind CSS, Figma
          </div>
        </div>
      </div>
    </div>
  );
}
