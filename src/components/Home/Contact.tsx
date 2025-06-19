import InputField from "../Career/InputField";

export default function Contact() {
  return (
    <div className="mt-[20px] flex w-full flex-col 2xl:mt-0">
      <div className="flex flex-col">
        <h1 className="font-Jakarta text-[32px] leading-[40px] font-bold">Contact Us</h1>
        <h1 className="font-Jakarta mt-[10px] text-[14px] leading-[20px]">
          Please fill out the form, and we will get in touch shortly.
        </h1>
      </div>
      <div className="mt-[20px] flex w-full max-w-[1110px] flex-col space-y-[22px] md:space-y-0">
        <div className="flex w-full flex-col space-y-[22px] space-x-[30px] md:flex-row">
          <InputField title="Name" placeholder="Enter your  name" />
          <InputField title="Email" placeholder="Enter your email" />
        </div>

        <div className="flex w-full flex-col space-y-[22px] space-x-[30px] md:flex-row">
          <InputField title="Phone Number" placeholder="Enter your phone number" />
          <InputField title="Company" placeholder="Enter your company" />
        </div>

        <div className="flex w-full flex-col space-y-[22px] space-x-[30px] md:flex-row">
          <InputField title="Country " placeholder="country" />
          <InputField title="Solution Interest " placeholder="Select a solution" />
        </div>
      </div>

      <div className="w-[540px] max-w-[1110px] md:w-auto">
        <div className="mt-[16px] 2xl:mt-[20px]">
          <label className="font-Jakarta text-[14px] leading-[20px]">How Can We Help You?*</label>
          <textarea
            placeholder="Please Provide a description of your requirement"
            className="font-Jakarta mt-[16px] h-[118px] w-full rounded-[12px] bg-[#fff] pt-[17px] pl-[20px] text-[14px] leading-[20px] 2xl:h-[170px]"
          ></textarea>
        </div>
      </div>

      <div className="mt-[20px] 2xl:mt-[28px]">
        <label className="font-Jakarta flex flex-row space-x-[10px] text-[14px] leading-[20px] 2xl:space-x-2">
          <div className="">
            <input type="checkbox" className="h-[20px] w-[20px]" />
          </div>

          <span>
            Yes, I would like to receive emails from Quantum AI Labs to learn about new releases,
            security announcements, and other updates.
          </span>
        </label>
      </div>

      <div className="mt-[20px] 2xl:mt-[28px]">
        <button className="min-w-[192px] rounded-[12px] bg-[#001984] 2xl:w-[303px]">
          <h1 className="font-Jakarta px-[71.5px] py-[14px] text-[14px] leading-[20px] font-bold text-[#FFFFFF] 2xl:px-[70px] 2xl:py-[16px] 2xl:text-[18px] 2xl:leading-[24px]">
            Submit
          </h1>
        </button>
      </div>
    </div>
  );
}
