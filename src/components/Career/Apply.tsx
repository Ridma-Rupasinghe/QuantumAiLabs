import InputField from "./InputField";
import Upload from "/Images/Career/upload.webp";

export default function Apply() {
  return (
    <div className="flex w-full flex-col">
      <div>
        <h1 className="font-Jakarta text-[16px] leading-[24px] font-bold 2xl:text-[24px] 2xl:leading-[32px]">
          Apply Now
        </h1>
      </div>
      <div className="mt-[20px] flex flex-col space-y-[16px] 2xl:space-y-[30px]">
        <InputField title="First Name" placeholder="Enter your first name" />
        <InputField title="Last Name" placeholder="Enter your last name" />
        <InputField title="Email " placeholder="Enter your last email" />
        <InputField title="Phone Number" placeholder="Enter your phone number" />
      </div>

      <div className="mt-[16px] flex flex-col">
        <div>
          <h1 className="font-Jakarta text-[14px] leading-[20px]">Upload CV/Resume*</h1>
        </div>
        <div className="mt-[16px]">
          <button className="w-[262px] rounded-[12px] bg-[#001984]">
            <div className="flex flex-row items-center justify-center space-x-[2px] py-[12px] 2xl:py-[16px]">
              <img src={Upload} alt="" className="h-[24px] w-[24px]" />
              <h1 className="font-Jakarta text-[14px] leading-[20px] font-bold text-[#FFFFFF]">
                Drop your file or upload
              </h1>
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className="mt-[16px] max-w-[773px] 2xl:mt-[20px]">
          <label className="font-Jakarta text-[14px] leading-[20px]">Cover Letter*</label>
          <textarea
            placeholder="Enter your cover letter"
            className="font-Jakarta mt-[16px] h-[118px] w-full rounded-[12px] bg-[#fff] pt-[17px] pl-[20px] text-[14px] leading-[20px] 2xl:h-[170px]"
          ></textarea>
        </div>
      </div>

      <div className="mt-[20px] 2xl:mt-[28px]">
        <label className="font-Jakarta flex flex-row items-center space-x-[20px] text-[14px] leading-[20px] 2xl:space-x-2">
          <div className="">
            <input type="checkbox" className="h-[20px] w-[20px]" />
          </div>

          <span>
            Yes, I give Quantum AI Labs permission to use my personal data for recruitment purposes
            only.
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
