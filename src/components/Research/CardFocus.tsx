interface ValueCardProps {
  image: string;
  title: string;
  description: string;
}
export default function ValueCard({ image, title, description }: ValueCardProps) {
  return (
    <div className="w-full rounded-[16px] p-[16px] shadow-md">
      <div className="flex flex-col items-center justify-between gap-[8px]">
        <div className="flex w-[13%] items-center justify-center">
          <img src={image} className="w-full object-contain" />
        </div>
        <div className="flex w-full items-center justify-center">
          <p className="font-Jakarta text-center text-[16px] font-bold lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            {title}
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <p className="font-Jakarta text-center text-[14px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
