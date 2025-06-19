import Close from "/Images/News/Nesws-Close.webp";
import Calender from "/Images/News/News-Calender.webp";
import Clock from "/Images/News/News-Clock.webp";
import NewsMobile from "/Images/News/News-Mobile.webp";
import NewsDesktop from "/Images/News/News-Desktop.webp";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import "simplebar-react/dist/simplebar.min.css";
import News from "../../components/News/News";

export default function NewsPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="mx-[16px] mt-[37px] mb-[10px] rounded-t-[20px] bg-[#fff] md:mx-[100px] xl:mx-[120px] 2xl:mt-[30px] 2xl:rounded-t-[30px]">
      <div className="m-[12px] flex flex-col 2xl:m-[40px]">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <h1 className="font-Jakarta hidden text-[16px] leading-[24px] font-bold xl:flex 2xl:text-[32px] 2xl:leading-[40px]">
            WordPress Full-Site Editing A Deep Dive Into The
          </h1>
          <button
            className="flex h-[25px] cursor-pointer items-center justify-end xl:h-auto xl:items-center"
            onClick={onClose}
          >
            <img src={Close} alt="" className="h-[16px] w-[16px] 2xl:h-[20px] 2xl:w-[20px]" />
          </button>
          <h1 className="font-Jakarta mt-[16px] flex text-[16px] leading-[24px] font-bold xl:hidden">
            WordPress Full-Site Editing A Deep Dive <br /> Into The
          </h1>
        </div>
        <div className="mt-[16px] flex flex-row space-x-[20px] 2xl:mt-[12px] 2xl:space-x-[34px]">
          <div className="flex flex-row items-center space-x-[5px]">
            <img src={Calender} alt="" className="h-[16px] w-[16px]" />
            <h1 className="font-Jakarta text-[14px] leading-[20px] 2xl:text-[16px] 2xl:leading-[24px]">
              27 August, 2024
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-[5px]">
            <img src={Clock} alt="" className="h-[16px] w-[16px]" />
            <h1 className="font-Jakarta text-[14px] leading-[20px] 2xl:text-[16px] 2xl:leading-[24px]">
              20 Mins
            </h1>
          </div>
        </div>
        <div className="mt-[16px] 2xl:mt-[32px]">
          <img src={NewsMobile} alt="" className="flex w-full xl:hidden" />
          <img src={NewsDesktop} alt="" className="hidden w-full xl:flex 2xl:h-[409px]" />
        </div>

        <div className="mt-[20px] flex 2xl:mt-[12px]">
          <ScrollArea.Root className="h-[300px] w-full xl:h-[150px] 2xl:h-auto">
            <ScrollArea.Viewport className="h-full w-full">
              <News />
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-[5px]"></ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </div>
    </div>
  );
}
