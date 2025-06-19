import { Link } from "react-router-dom";
import Arrow from "/Images/Career/Arrow.webp";
import LocationIcon from "/Images/Career/Location.webp";

interface JobCardProps {
  title: string;
  location: string;
}

export default function JobCard({ title, location }: JobCardProps) {
  const Button =
    "py-[4px] px-[8px]  bg-[#FF810A] rounded-[6px] font-Jakarta text-[14px] font-bold text-[#FFFFFF]  hover:shadow-lg duration-300 ease-in-out hover:scale-[1.02] ";
  return (
    <div className="rounded-[16px] bg-[#fff]">
      <div className="m-[16px] flex flex-col rounded-tl-[16px] rounded-tr-[16px]">
        <div className="rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] bg-[#E6E8F3] pt-[16px]">
          <div className="mb-[34px] flex h-[104px] flex-col px-[16px] md:mb-[70px] 2xl:h-[116px]">
            <h1 className="font-Jakarta w-full text-[28px] leading-[32px] font-bold text-[#252525] 2xl:text-[32px]">
              {title}
            </h1>
            <button className="mt-[16px] flex items-center space-x-[7px] hover:opacity-80">
              <img src={LocationIcon} alt="location" className="h-[16px] w-[16px]" />
              <span className="font-Arial text-[12px] leading-[20px] text-[#252525]">
                {location}
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-[#E6E8F3]">
            <div className="flex flex-row rounded-tr-[16px] bg-[#fff]">
              <Link to={"/apply"}>
                <button className="mt-[12px] mr-[12px] flex cursor-pointer items-center justify-center space-x-[8px] rounded-[8px] border border-black bg-white px-[24px] py-[12px] transition duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#FF810A] hover:shadow-lg">
                  <span className="font-Jakarta text-[18px] leading-[24px] font-bold text-[#252525]">
                    Apply
                  </span>
                  <div className="flex h-[24px] w-[24px] items-center justify-center">
                    <img src={Arrow} alt="arrow" className="h-[14px] w-[8px]" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full rounded-br-[16px] rounded-bl-[16px] bg-[#E6E8F3]">
            <div className="absolute right-0 bottom-0 mr-[12px] mb-[12px] flex flex-row space-x-[8px]">
              <button className={Button}>Full time</button>
              <button className={Button}>Hybrid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
