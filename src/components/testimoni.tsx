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
          {"I had the pleasure of working with these awesome people"}
        </div>
      </div>

      <div className="w-[90%] flex flex-wrap justify-center gap-10">
        <div className="w-[38vw] h-[16vh] border-2 rounded-tl-[8vh] rounded-br-[8vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-2 p-2.5">
          <div className="text-[#12F7D6] font-normal text-[22px]/[26px]">
            Sarah Lim, Founder of EcoMart
          </div>
          <div className="font-light text-[16px]/[18px]">
            “Working with Faran was a game changer for our business. Our website
            went from slow and outdated to fast, modern, and incredibly
            user-friendly. We saw a 50% increase in online engagement within the
            first month.”
          </div>
        </div>
        <div className="w-[38vw] h-[16vh] border-2 rounded-tl-[8vh] rounded-br-[8vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-2 p-2.5">
          <div className="text-[#12F7D6] font-normal text-[22px]/[26px] text-center">
            Jonathan Lee, Project Manager at TechNova Solutions
          </div>
          <div className="font-light text-[16px]/[18px]">
            “Reliable, professional, and detail-oriented. Faran not only
            delivered on time but also suggested improvements that made the
            final product even better than we envisioned.”
          </div>
        </div>
        <div className="w-[38vw] h-[16vh] border-2 rounded-tl-[8vh] rounded-br-[8vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-2 p-2.5">
          <div className="text-[#12F7D6] font-normal text-[22px]/[26px] text-center">
            Michael Tan, Senior Developer at BrightCode Digital
          </div>
          <div className="font-light text-[16px]/[18px]">
            “What impressed me most was {"Faran's"} ability to translate complex
            technical concepts into simple, actionable solutions. Their frontend
            and backend skills are equally strong, which made collaboration
            seamless.”
          </div>
        </div>
        <div className="w-[38vw] h-[16vh] border-2 rounded-tl-[8vh] rounded-br-[8vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-2 p-2.5">
          <div className="text-[#12F7D6] font-normal text-[22px]/[26px] text-center">
            Nadia Putri, Operations Lead at TaskFlow Co.
          </div>
          <div className="font-light text-[16px]/[18px]">
            “Our {"team's"} productivity skyrocketed after Faran implemented the
            new task management system. Their problem-solving skills and
            technical expertise are top-tier.”
          </div>
        </div>
        <div className="w-[38vw] h-[16vh] border-2 rounded-tl-[8vh] rounded-br-[8vh] bg-[#292F36] border-white flex flex-col justify-center items-center gap-2 p-2.5">
          <div className="text-[#12F7D6] font-normal text-[22px]/[26px] text-center">
            Daniel Wong, CEO of ShopEase
          </div>
          <div className="font-light text-[16px]/[18px]">
            “This was one of the smoothest development experiences {"I've"} ever
            had. Faran was communicative, fast, and built exactly what we
            needed. {"We'll"} definitely work together again.”
          </div>
        </div>
      </div>
    </div>
  );
}
