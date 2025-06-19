import React from "react";

interface InputFieldProps {
  title: string;
  placeholder?: string;
  description?: string;
}

const InputField: React.FC<InputFieldProps> = ({ title, placeholder = "" }) => {
  return (
    <div className="flex w-full flex-col">
      <label className="font-Jakarta text-[14px] leading-[20px]">
        {title}
        <span className="">*</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="font-Jakarta 3sxl:w-[560px] mt-[16px] max-h-[50px] max-w-[540px] rounded-[12px] bg-[#FFFFFF] py-[15px] pl-[20px] text-[14px] leading-[20px] font-normal"
      />
    </div>
  );
};

export default InputField;
