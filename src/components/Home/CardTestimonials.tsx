import comma from "/Images/Home/comma.png";

interface ValueCardProps {
  image: string[];
  name: string;
  title: string;
  description: string;
}
export default function ValueCard({ image, name, title, description }: ValueCardProps) {
  return (
    <div className="3xl:p-[20px] 3xl:h-[281px] 3xl:w-[544px] h-auto min-h-[238px] w-full rounded-2xl bg-[#E6E8F3] p-[16px] sm:rounded-lg lg:rounded-xl 2xl:rounded-2xl">
      <div className="flex w-full flex-col items-center justify-between gap-[1vh] 2xl:gap-[35px]">
        <div className="flex w-full items-center justify-start gap-[5%]">
          <div className="aspect-[1] h-[56px] w-[56px] rounded-full border-amber-600">
            <img
              src={image[0]}
              className="object contain h-[56px] w-[56px] rounded-full border-4 border-amber-600"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-between">
            <p className="font-Jakarta text-left text-[16px]">{name}</p>
            <p className="font-Jakartax text-left text-[14px] 2xl:leading-[20px]">{title}</p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-[1vh] 2xl:gap-[9px]">
          <div className="flex w-[10.77%] items-center justify-center self-end">
            <img src={comma} className="w-full object-contain" />
          </div>
          <div className="flex w-full items-center justify-center self-start">
            <p className="font-Jakarta text-left text-[14px] leading-[20px] font-[400] 2xl:text-[16px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
