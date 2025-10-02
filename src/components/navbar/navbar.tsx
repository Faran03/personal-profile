import { NavLink } from "../navlink/navlink";

export function Navbar() {
  return (
    <div className="mx-[5%] w-auto h-[10vh] flex justify-between items-center border-b border-[#43454D]">
      <div className="flex gap-2">
        <div className="font-ibm-plex-mono font-medium text-[32px]/[42px] text-[#12F7D6]">
          {"<C/>"}
        </div>
        <div className="font-ibm-plex-mono font-medium text-[32px]/[42px]">
          Faran
        </div>
      </div>
      <nav className="flex gap-8 font-ibm-plex-mono text-[24px]/[32px] font-normal">
        <NavLink path="/" text="Home" />
        <NavLink path="/aboutme" text="About Me" />
        <NavLink path="/skills" text="Skills" />
        <NavLink path="/portfolio" text="Portfolio" />
        <NavLink path="/experience" text="Experience" />
        <NavLink path="/testimoni" text="Testimonial" />
        <NavLink path="/contact" text="Contact" />
      </nav>
    </div>
  );
}
