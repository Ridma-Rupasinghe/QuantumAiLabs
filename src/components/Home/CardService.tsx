import { Link } from "react-router-dom";

interface ValueCardProps {
  image: string[];
  name: string;
  title: string;
  description: string;
  link?: string;
}

export default function ValueCard({ image, name, title, description, link }: ValueCardProps) {
  return (
    <div className="3xl:w-[544px] 3xl:h-[376px] flex h-[366px] flex-col items-start justify-between gap-[20px] rounded-[32px] bg-white p-[16px]">
      <div
        className="relative !h-[264px] w-full overflow-hidden rounded-t-[18px] rounded-bl-[18px]"
        style={{
          backgroundImage: `url(${image[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 -bottom-0.5"
          width="187"
          height="74"
          viewBox="0 0 187 74"
          fill="none"
        >
          <path
            d="M187 74H0C8.83656 74 16 66.8366 16 58V32C16 23.1634 23.1634 16 32 16H171C179.837 16 187 8.83655 187 0V74Z"
            fill="white"
          />
        </svg>
        <img src={image[1]} className="w-full object-contain sm:hidden" />
        <p className="hidden">{name}</p>

        <Link to={link ?? "#"}>
          <div className="group absolute right-0 bottom-0 flex h-[48px] w-[163px] cursor-pointer items-center justify-center gap-[8px] rounded-[8px] border-1 px-[24px] py-[12px] transition duration-300 hover:bg-[#001779] hover:text-white">
            <p className="font-Jakarta text-[16px] leading-[24px] font-[700] text-nowrap text-[#252525] group-hover:text-white sm:text-[18px]">
              See More
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#1C274C] transition duration-300 group-hover:text-white"
            >
              <path
                d="M9 5L11 7.33333M9 19L15 12L13.5 10.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="3xl:h-auto flex flex-col items-start justify-between gap-[12px] sm:gap-[16px] xl:h-[60px] xl:gap-[8px]">
        <p className="font-Jakarta text-[18px] leading-[24px] font-[700] text-[#252525] sm:text-[20px]">
          {title}
        </p>
        <p className="font-Jakarta text-[14px] leading-[20px] text-[#666666] sm:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}
