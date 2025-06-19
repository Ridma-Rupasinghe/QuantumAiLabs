import Respons from "./Respons";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import "simplebar-react/dist/simplebar.min.css";
import Apply from "./Apply";

export default function ApplyForm() {
  return (
    <div className="mb-[39px] md:mb-[54px]">
      <div className="3xl:px-[120px] bg-[#F2F2F2] px-[16px] py-[12px] sm:px-[2%] lg:py-[60px]">
        <div className="flex grid-cols-2 flex-col md:grid md:gap-[70px] 2xl:gap-[134px]">
          {/*Start Description */}
          <div className="flex flex-col">
            <div className="2xl:mt-[20px]">
              <h1 className="font-Jakarta text-[18px] leading-[24px] font-bold 2xl:text-[32px] 2xl:leading-[40px]">
                Software Engineer Web
              </h1>
            </div>

            <div className="3xl:w-[774px] mt-[20px] 2xl:mt-[40px]">
              <h1 className="font-Jakarta text-[14px] leading-[20px] font-normal 2xl:text-[16px] 2xl:leading-[24px]">
                As a Software Engineer - Web, you will play a key role in designing, developing, and
                deploying cutting-edge web applications that drive business success. Working closely
                with cross-functional teams, including design, product, and backend development, you
                will craft seamless user experiences and scalable solutions. Your expertise in
                modern web technologies, frameworks, and best practices will be vital in building
                high-performance, secure, and user-friendly web solutions.
              </h1>
            </div>

            <div className="mt-[20px] 2xl:mt-[40px]">
              <button className="min-w-[218px] rounded-[12px] bg-[#001984] 2xl:w-[236px]">
                <h1 className="font-Jakarta px-[71.5px] py-[14px] text-[14px] leading-[20px] font-bold text-[#FFFFFF] 2xl:px-[70px] 2xl:py-[16px] 2xl:text-[18px] 2xl:leading-[24px]">
                  Apply Now
                </h1>
              </button>
            </div>

            <div className="mt-[20px] 2xl:mt-[52px]">
              <h1 className="font-Jakarta text-[16px] leading-[24px] font-bold 2xl:text-[24px] 2xl:leading-[32px]">
                key responsibilities
              </h1>
            </div>

            <div className="mt-[20px] flex 2xl:mt-[40px]">
              <ScrollArea.Root className="h-[300px] w-full md:h-[490px] 2xl:h-[530px]">
                <ScrollArea.Viewport className="h-full w-full">
                  <div className="w-full 2xl:w-[774px]">
                    <Respons />
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className="w-[5px]">
                  <ScrollArea.Thumb
                    className="rounded-[100px] bg-[#001984]"
                    style={{ height: "60px" }}
                  />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </div>
          </div>
          {/*End Description */}

          {/* Apply Now */}
          <div className="mt-[20px] md:mt-0">
            <Apply />
          </div>

          {/* Apply Now */}
        </div>
      </div>
    </div>
  );
}
