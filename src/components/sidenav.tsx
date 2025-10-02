import Link from "next/link";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="fixed mt-7 ml-4 w-[64px] h-[440px] border-2 border-white bg-[#1A1E23] px-3 py-2 rounded-[40px] flex flex-col gap-6">
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
    </div>
  );
}
