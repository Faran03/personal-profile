import Link from "next/link";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="fixed mt-7 ml-[1.1vw] w-[64px] h-[440px] border-2 border-white bg-[#1A1E23] px-3 py-2 rounded-[40px] flex flex-col gap-6 items-center">
      <Link href={"#home"}>
        <Image src={"/home.svg"} alt="home icon" width={40} height={40} />
      </Link>
      <Link href={"#aboutme"}>
        <Image
          src={"/about-me.svg"}
          alt="aboutme icon"
          width={40}
          height={40}
        />
      </Link>
      <Link href={"#skills"}>
        <Image src={"/skills.svg"} alt="skills icon" width={40} height={40} />
      </Link>
      <Link href={"#portfolio"}>
        <div className="w-[40px] h-[40px] bg-white grid place-items-center rounded-full">
          <Image
            src={"/portfolio.svg"}
            alt="portfolio icon"
            width={30}
            height={30}
          />
        </div>
      </Link>
      <Link href={"#experience"}>
        <Image
          src={"/experience.svg"}
          alt="experience icon"
          width={40}
          height={40}
        />
      </Link>
      <Link href={"#testimoni"}>
        <Image
          src={"/testimoni.svg"}
          alt="testimoni icon"
          width={40}
          height={40}
        />
      </Link>
      <Link href={"#contact"}>
        <Image src={"/contact.svg"} alt="contact icon" width={40} height={40} />
      </Link>
    </div>
  );
}
