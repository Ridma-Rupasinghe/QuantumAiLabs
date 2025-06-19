import homeD from "/Images/Home/homeD.webp";
import homeM from "/Images/Home/homeM.webp";
import { Link } from "react-router-dom";

import Marquee from "../../components/Home/MarqueeComp";

export default function Hero() {
  return (
    <div className="relative h-auto w-full">
      <div className="3xl:px-[120px] mt-[32px] hidden w-full flex-col items-center justify-between px-[2%] pb-[3vh] sm:gap-[2vh] md:gap-[3vh] lg:gap-[4vh] xl:flex xl:gap-0">
        <div className="relative w-full overflow-hidden">
          <img src={homeD} alt="homeD" className="w-full object-contain" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 -bottom-0.5"
            width="564"
            height="92"
            viewBox="0 0 564 92"
            fill="none"
          >
            <path
              d="M564 92H0C8.83656 92 16 84.8366 16 76V44C16 28.536 28.536 16 44 16H548C556.837 16 564 8.83656 564 0V92Z"
              fill="white"
            />
          </svg>

          <div className="absolute bottom-0 left-0 flex w-63/100 flex-col items-start justify-between gap-[1vh] p-5">
            <div className="max-w-[775px]">
              <p className="font-Jakarta text-left font-[700] text-white sm:text-[26px] md:text-[35px] md:leading-[40px] lg:text-[46px] lg:leading-[50px] xl:text-[68px] xl:leading-[72px] 2xl:text-[68px] 2xl:leading-[72px]">
                Engineering the Future of Technology.
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta text-left leading-[24px] font-[700] text-white sm:text-[9px] md:text-[11px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
                We craft intelligent software solutions that solve real-world challenges and
                accelerate digital transformation.
              </p>
            </div>
          </div>

          <div className="3xl:gap-5 absolute right-0 bottom-0 flex gap-4">
            <Link to={"/services"}>
              <div className="flex h-[56px] max-h-[56px] w-[246px] max-w-[246px] cursor-pointer items-center justify-center gap-[10px] border-[1px] border-[#252525] px-3 py-1.5 transition duration-300 hover:border-[#8f94a6] hover:bg-[#001779] hover:text-white sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl xl:px-4 xl:py-3 2xl:rounded-[12px] 2xl:px-[32px] 2xl:py-[16px]">
                <p className="font-Jakarta 3xl:text-[18px] leading-[24px] font-[700] text-nowrap sm:text-[7px] md:text-[9px] lg:text-[12px] xl:text-[15px]">
                  Explore Our Services
                </p>
              </div>
            </Link>

            <Link to={"/contact"}>
              <div className="flex h-[56px] w-[262px] max-w-[262px] cursor-pointer items-center justify-center gap-[10px] border-[1px] border-[#252525] bg-[#001779] px-3 py-1.5 transition-all duration-300 hover:bg-[#001999] hover:shadow-lg sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl xl:px-4 xl:py-3 2xl:rounded-[12px] 2xl:px-[32px] 2xl:py-[16px]">
                <p className="font-Jakarta 3xl:text-[18px] leading-[24px] font-[700] text-nowrap text-[#fff] sm:text-[7px] md:text-[9px] lg:text-[12px] xl:text-[15px]">
                  Start Your Project Now
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[1.5vh] lg:gap-[2vh] xl:mt-[88px] 2xl:gap-[3vh]">
          <div className="flex w-4/10 items-center justify-center">
            <p className="font-Jakarta text-center leading-[32px] font-[700] text-nowrap sm:text-[11px] md:text-[13px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px]">
              Trusted by the World's Best Enterprises
            </p>
          </div>

          <div className="w-full xl:mt-[30px]">
            <Marquee />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between px-[16px] pt-[16px] pb-[4vh] xl:hidden">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <img src={homeM} alt="homeM" className="w-full object-contain sm:hidden" />
          <img src={homeD} alt="homeD" className="hidden w-full object-contain sm:block" />

          <div className="flex w-90/100 items-center justify-center">
            <p className="font-Jakarta text-center text-[32px] leading-[40px] font-[700]">
              Engineering the Future of Technology.
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <p className="font-Jakarta text-center text-[14px] leading-[20px] font-[700]">
              We craft intelligent software solutions that solve real world challenges and
              accelerate digital transformation.
            </p>
          </div>
        </div>

        <div className="mt-[30px] flex w-full flex-col items-center justify-between gap-[6vh]">
          <div className="flex w-full items-center justify-center gap-5">
            <div className="flex aspect-[3.635] h-full w-[47.49%] max-w-[189px] cursor-pointer items-center justify-center rounded-[12px] border-2 border-[#252525] py-2 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-[#001779] hover:shadow-lg">
              <Link to={"/services"}>
                <p className="font-Jakarta text-[14px] leading-[20px] font-[700] text-nowrap text-[#252525]">
                  Explore Our Services
                </p>
              </Link>
            </div>

            <div className="flex aspect-[3.635] h-full w-[47.49%] max-w-[189px] cursor-pointer items-center justify-center rounded-[12px] bg-[#001779] py-2 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#001999] hover:shadow-lg">
              <Link to={"/contact"}>
                <p className="font-Jakarta text-[14px] leading-[20px] font-[700] text-nowrap text-white">
                  Start Your Project Now
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-4/10 items-center justify-center md:mt-[40px] md:flex lg:hidden">
          <p className="font-Jakarta text-center text-[24px] leading-[32px] font-bold text-nowrap">
            Trusted by the World's Best Enterprises
          </p>
        </div>
        <div className="mt-[60px] flex h-[86px] w-full items-center justify-center py-[24px] md:mt-[20px]">
          <Marquee />
        </div>
      </div>
    </div>
  );
}
