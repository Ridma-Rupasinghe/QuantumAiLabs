import TextBadge from "../../components/About/TextBadge";
import ServiceFooterBg from "/Images/Service/Service-Main.webp";

export default function ServiceFooter() {
  return (
    <div className="mx-auto mt-[2vh] max-w-[1920px] overflow-hidden xl:mt-0">
      <div className="mx-[16px] mb-10 flex flex-col items-center sm:mx-[2%] xl:mt-[3vh] 2xl:mx-[120px]">
        <div className="3xl:gap-x-0 flex w-full flex-col items-center justify-between xl:flex-row xl:gap-x-[80px]">
          {/* Left Text Content */}
          <div className="flex max-w-[828px] flex-col xl:order-2">
            <div className="w-[63px]">
              <TextBadge text="EDGE" />
            </div>
            <div className="mt-[12px] max-w-[700px]">
              <h1 className="font-Jakarta text-[32px] leading-[40px] font-bold xl:text-[40px] 2xl:text-[52px] 2xl:leading-[60px]">
                Expertise and Agility to Drive Your Success
              </h1>
            </div>
            <div className="font-Jakarta mt-[16px] flex flex-col text-[14px] leading-[20px] text-[#252525] 2xl:text-[18px] 2xl:leading-[24px]">
              <h1>
                With over two decades of experience, we are experts in building and managing
                high-performing, dedicated software development teams. Operating as an extension of
                your organization, our teams ensure transparent communication, high productivity,
                and top-tier quality.
              </h1>
              <h1 className="mt-[30px]">
                Together, we bring big ideas to life with the agility to quickly adapt, innovate,
                and create value. Our strategic focus is on continuous improvement, ensuring we
                remain adaptable in an ever-evolving technological landscape.
              </h1>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-[78px] flex items-center justify-center xl:order-1 xl:mt-0">
            <img
              src={ServiceFooterBg}
              alt="Service Hero"
              className="3xl:w-[787px] w-[398px] xl:w-[510px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
