import React from "react";

export interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="xxsm:h-[260px] w-full rounded-xl bg-[#E6E8F3] p-[24px] md:h-[272px] 2xl:px-[24px] 2xl:py-[40px]">
      <div className="flex flex-col items-center justify-between">
        <div className="t flex w-full items-center justify-center">
          <p className="font-Jakarta text-center text-[20px] font-bold 2xl:text-[24px]">{title}</p>
        </div>
        <div className="mt-[16px] flex w-full items-center justify-center">
          <p className="font-Jakarta text-center text-[14px] leading-[20px] 2xl:text-[16px] 2xl:leading-[24px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
