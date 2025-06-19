import React from "react";

interface TextBadgeProps {
  text: string;
}

const TextBadge: React.FC<TextBadgeProps> = ({ text }) => {
  return (
    <div className="font-Arial flex items-center justify-center rounded bg-[#FFF2E7] px-[8px] py-[4px] text-[14px] leading-[20px] tracking-widest text-[#666666]">
      {text}
    </div>
  );
};

export default TextBadge;
