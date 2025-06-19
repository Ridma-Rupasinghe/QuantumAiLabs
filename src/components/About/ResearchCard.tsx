interface ResearchCardProps {
  image: string;
  title: string;
  description: string;
}
export default function ResearchCard({ image, title, description }: ResearchCardProps) {
  return (
    <div className="rounded-[16px] bg-[#fff] shadow-xl">
      <div className="flex flex-col items-center justify-between">
        <div className="my-[16px] flex items-center justify-center 2xl:mt-[16px] 2xl:mb-[20px]">
          <img src={image} className="h-[49px] w-[49px] object-contain 2xl:h-[64px] 2xl:w-[64px]" />
        </div>
        <div className="mb-[10px] flex w-full items-center justify-center">
          <p className="font-Jakarta text-center text-[16px] leading-[24px] font-bold 2xl:text-[20px]">
            {title}
          </p>
        </div>
        <div className="3xl:w-[481px] mx-[16px] mb-[14px] flex w-[332px] md:w-auto">
          <p className="font-Jakarta text-center text-[14px] leading-[20px] 2xl:text-[16px] 2xl:leading-[24px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
