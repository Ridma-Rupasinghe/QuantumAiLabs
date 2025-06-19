import arrow from "/Images/News/arrow.webp";
import lEdgeD from "/Images/News/lEdgeD.webp";
import lEdgeM from "/Images/News/lEdgeM.webp";

interface ValueCardProps {
  image: string;
  title: string;
  description: string;
}
export default function ValueCard({ image, title, description }: ValueCardProps) {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-[20px] rounded-lg bg-white">
      <div className="relative w-full">
        <img
          src={image}
          className="3xl:w-[512px] 3xl:h-[264px] w-full rounded-[8px] object-contain"
        />
        <img src={lEdgeD} className="absolute right-0 bottom-0 hidden lg:block" />
        <img src={lEdgeM} className="absolute right-0 bottom-0 lg:hidden" />

        <div className="3xl:right-5 3xl:px-[14px] absolute right-0 bottom-0 flex cursor-pointer items-center justify-center gap-[8px] rounded-[8px] border-[1px] px-[18px] py-[8px] hover:scale-95 lg:px-[24px] lg:py-[12px]">
          <p className="font-JakartaBold h-[20px] w-[73px] text-[14px] text-[#252525] lg:h-[24px] lg:w-[94px] lg:text-[18px]">
            Read More
          </p>
          <img src={arrow} className="h-[12px] lg:h-[24px]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-[12px]">
        <p className="font-Jakarta hlg:text-[15px] text-[20px] font-bold lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
          {title}
        </p>
        <p className="font-Jakarta hlg:text-[13px] text-[16px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}
