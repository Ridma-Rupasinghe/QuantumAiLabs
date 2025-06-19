import React from "react";

interface CardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 shadow">
      {/* Icon Container */}
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#FF810A]">
        <img src={iconSrc} alt="Icon" className="h-8 w-8 object-contain" />
      </div>

      {/* Text Content */}
      <div className="font-Jakarta flex flex-col">
        <h2 className="text-[16px] leading-[24px] font-bold text-[#252525] 2xl:text-[20px]">
          {title}
        </h2>
        <p className="mt-2 text-[14px] leading-[20px] text-[#252525] lg:leading-[24px] 2xl:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
