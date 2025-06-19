interface ValueCardProps {
  image: string;
  title: string;
  description: string;
}
export default function ValueCard({ image, title, description }: ValueCardProps) {
  return (
    <div className="w-full p-[4.5%]">
      <div className="3xl:gap-0 flex flex-col items-center justify-between gap-[1vh] sm:items-center sm:gap-[0.7vh] lg:items-start">
        <div className="flex aspect-[1] min-h-[48px] w-[14.8%] max-w-[55px] min-w-[48px] items-center justify-center rounded-full bg-[#FF810A]">
          <img src={image} className="w-[60%] max-w-[55px] object-contain" />
        </div>
        <div className="3xl:mt-[20px] flex w-full items-center justify-center sm:justify-center lg:justify-start">
          <p className="font-Jakarta text-center text-[16px] font-[700] text-[#252525] sm:text-left sm:text-[16px] md:text-[16px] lg:text-[20px]">
            {title}
          </p>
        </div>
        <div className="3xl:mt-[8px] flex w-full items-center justify-center sm:justify-center lg:justify-start">
          <p className="font-Jakarta text-center text-[14px] font-[400] text-[#252525] md:text-[14px] lg:text-left lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
