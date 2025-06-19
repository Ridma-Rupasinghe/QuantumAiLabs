import arrow from "/Images/News/arrow.webp";
import lEdgeD from "/Images/News/nEdgeD.webp";
import lEdgeM from "/Images/News/nEdgeM.webp";

interface ValueCardProps {
  image: string[];
  title: string;
  description: string;
}
export default function ValueCard({ image, title, description }: ValueCardProps) {
  return (
    <div className="3xl:w-[544px] 3xl:h-[424px] flex w-full flex-col items-start justify-between rounded-[32px] bg-white p-[16px] shadow-md">
      <div className="relative w-full">
        <img src={image[0]} className="w-full rounded-[8px] object-contain" />
        <img src={lEdgeD} className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 lg:block" />
        <img src={lEdgeM} className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden" />

        <div className="absolute bottom-0 left-1/2 flex min-w-[160px] -translate-x-1/2 cursor-pointer items-center justify-center gap-[8px] rounded-[8px] border-[1px] px-[24px] py-[8px] hover:scale-95 lg:px-[24px] lg:py-[12px]">
          <p className="font-JakartaBold h-[24px] w-[84px] text-[16px] lg:h-[24px] lg:w-[94px] lg:text-[18px]">
            Read More
          </p>
          <img src={arrow} className="h-[18px] lg:h-[24px]" />
        </div>
      </div>
      <div className="mt-[20px] flex h-[120px] flex-col items-start justify-between">
        <p className="font-Jakarta text-center text-[20px] font-bold">{title}</p>
        <p className="font-Jakarta text-center text-[16px]">{description}</p>
      </div>
    </div>
  );
}
