import Image from "next/image";

export function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#1A1E23] w-[100%] h-screen flex flex-col justify-center items-center"
    >
      <div className="grid place-items-center">
        <div className="font-normal text-[64px]/[72px] text-[#12f7d6] border-b-2 border-[#12f7d6] pb-1">
          Contact
        </div>
        <div className="font-normal font-ibm-plex-mono text-[16px]/[20px] mt-3">
          {"I'm currently available for freelance work"}
        </div>
      </div>

      <div className="w-[407px] h-[74px] text-center font-medium text-[32px]/[42px] font-ibm-plex-mono text-[#12F7D6] border-2 border-[#12F7D6] rounded-tl-[34px] rounded-br-[34px] mt-15 p-3">
        Send Me A Message
      </div>

      <div className="w-[50vw] mt-10 flex justify-between">
        <div className="flex flex-col justify-center gap-4 w-[45%]">
          <div className="font-light text-[16px]/[18px] text-[#12F7D6]">
            Your Name*
          </div>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border-b border-white font-light text-[16px]/[18px] pb-1 pl-0.5"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 w-[45%]">
          <div className="font-light text-[16px]/[18px] text-[#12F7D6]">
            Your Email*
          </div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border-b border-white font-light text-[16px]/[18px] pb-1 pl-0.5"
          />
        </div>
      </div>

      <div className="w-[50vw] mt-10 flex justify-between">
        <div className="flex flex-col justify-center gap-4 w-[100%]">
          <div className="font-light text-[16px]/[18px] text-[#12F7D6]">
            Your Message*
          </div>
          <input
            type="text"
            placeholder="Enter Your Message"
            className="border-b border-white font-light text-[16px]/[18px] pb-1 pl-0.5"
          />
        </div>
      </div>

      <button
        type="button"
        className="w-[234px] h-[56px] bg-[#12F7D6] mt-12 rounded-[28px] flex justify-center items-center gap-4 hover:cursor-pointer"
      >
        <div className="text-[#292F36] font-normal text-[20px]/[24px]">
          Send Message
        </div>
        <Image src={"/icon-send.svg"} alt="send-icon" width={24} height={24} />
      </button>
    </div>
  );
}
