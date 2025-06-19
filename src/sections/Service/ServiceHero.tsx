import TextBadge from "../../components/About/TextBadge";
import ServiceHeroBg from "/Images/Service/Service-Head.webp";

export default function ServiceHero() {
  return (
    <div className="mx-auto mt-[16px] max-w-[1920px] overflow-hidden xl:mt-0">
      <div className="mx-[16px] mb-5 flex flex-col items-center sm:mx-[2%] xl:mt-[3vh] 2xl:mx-[120px]">
        <div className="flex w-full flex-col items-center justify-between p-[20px] xl:flex-row xl:px-[88px] xl:py-[43px]">
          {/* Left Text Content */}
          <div className="flex max-w-[828px] flex-col">
            <div className="w-[103px]">
              <TextBadge text="SERVICES" />
            </div>
            <div className="mt-[12px] max-w-[600px]">
              <h1 className="font-Jakarta text-[32px] leading-[40px] font-bold xl:text-[40px] 2xl:text-[52px] 2xl:leading-[60px]">
                Exploring the Next Frontier in Tech
              </h1>
            </div>
            <div className="font-Jakarta mt-[16px] text-[14px] leading-[20px] text-[#252525] 2xl:text-[18px] 2xl:leading-[24px]">
              <h1>
                At Quantum Labs, we provide comprehensive software solutions across the entire
                product lifecycle. From MVP development to long-term support and maintenance, we
                specialize in delivering high-quality solutions that meet the unique needs of your
                business.
              </h1>
            </div>
          </div>

          {/* Right Image */}
          <div className="mx-[20px] mt-[78px] flex items-center justify-center sm:mx-0 xl:mt-0">
            <img src={ServiceHeroBg} alt="Service Hero" className="w-[398px] xl:w-[510px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
