export function Experience() {
  return (
    <div
      id="experience"
      className="w-[100%] h-screen flex flex-col justify-center items-center gap-14"
    >
      <div className="grid place-items-center">
        <div className="font-normal text-[64px]/[72px] text-[#12f7d6] border-b-2 border-[#12f7d6] pb-1">
          Experience
        </div>
        <div className="font-normal font-ibm-plex-mono text-[16px]/[20px] mt-3">
          {"I had the pleasure of working with these awesome project"}
        </div>
      </div>

      <div className="w-[90%] flex flex-wrap gap-8 justify-center">
        <div className="w-[40vw] h-[33vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#1A1E23] border-white flex flex-col justify-center items-center gap-3 p-2">
          <div className="text-[#12F7D6] font-normal text-[26px]/[30px]">
            Full-Stack Developer - TechNova Solutions
          </div>

          <div className="font-light text-[16px]/[18px]">
            Jakarta, Indonesia | Jan 2022 - Present
          </div>
          <div className="w-[95%] border-b border-white"></div>
          <div className="font-light text-[16px]/[18px] text-center">
            Developed and maintained full-stack web applications using Next.js,
            Node.js, and MongoDB, supporting over 10,000 monthly users.
          </div>
          <div className="font-light text-[16px]/[18px] text-center">
            Led migration from traditional REST APIs to GraphQL, improving
            data-fetch efficiency by 35%.
          </div>
          <div className="font-light text-[16px]/[18px] text-center">
            Collaborated with UI/UX teams to implement responsive interfaces
            using Tailwind CSS and TypeScript.
          </div>
        </div>

        <div className="w-[40vw] h-[33vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#1A1E23] border-white flex flex-col justify-center items-center gap-3 p-2">
          <div className="text-[#12F7D6] font-normal text-[26px]/[30px]">
            Freelance Web Developer - Self-Employed
          </div>

          <div className="font-light text-[16px]/[18px]">
            Remote | Jul 2020 - Dec 2021
          </div>
          <div className="w-[95%] border-b border-white"></div>
          <div className="font-light text-[16px]/[18px] text-center">
            Designed and developed custom web solutions for small businesses and
            startups across industries like education, e-commerce, and health
            tech.
          </div>
          <div className="font-light text-[16px]/[18px] text-center">
            Built and deployed 10+ client websites using React, Next.js, and
            Firebase, integrating user authentication and analytics tracking.
          </div>
          <div className="font-light text-[16px]/[18px] text-center">
            Collaborated with clients to translate business goals into technical
            requirements and user-friendly web experiences.
          </div>
        </div>

        <div className="w-[40vw] h-[33vh] border-2 rounded-tl-[7.5vh] rounded-br-[7.5vh] bg-[#1A1E23] border-white flex flex-col justify-center items-center gap-3 p-2">
          <div className="text-[#12F7D6] font-normal text-[26px]/[30px]">
            Front-End Developer - BrightCode Digital Agency
          </div>

          <div className="font-light text-[16px]/[18px]">
            Bandung, Indonesia | Mar 2018 - Jun 2020
          </div>
          <div className="w-[95%] border-b border-white"></div>
          <div className="font-light text-[16px]/[18px] text-center">
            Created modern, responsive UIs for marketing websites and client
            dashboards using Vue.js and SCSS.
          </div>
          <div className="font-light text-[16px]/[18px] text-center">
            Worked closely with backend engineers to integrate RESTful APIs and
            dynamic content rendering.
          </div>
          <div className="font-light text-[16px]/[18px] text-center">
            Improved SEO and accessibility scores across client projects.
          </div>
        </div>
      </div>
    </div>
  );
}
