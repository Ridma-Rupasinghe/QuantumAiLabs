import { useEffect, useState } from "react";
import imageD from "/Images/News/imageD.webp";
import imageM from "/Images/News/imageM.webp";
import icon from "/Images/News/Icon.webp";
import arrow from "/Images/News/arrow.webp";
import arrowEmail from "/Images/News/arrowEmail.webp";
import NewsPopup from "./NewsPopup";

export default function Image() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  return (
    <div className="relative h-auto w-full">
      <div className="3xl:gap-[143px] hlg:flex hidden gap-[8.51%] bg-[#F2F2F2] px-[16px] py-[5vh] lg:px-[2%]">
        <img src={imageD} alt="" className="w-45/100 object-contain 2xl:w-64/100" />

        <div className="flex flex-col items-center justify-between gap-[2vh] 2xl:w-276/1000 2xl:gap-[56px]">
          <div className="flex w-full flex-col items-start justify-between gap-[1.5vh] 2xl:gap-[15px]">
            <div className="flex gap-[8px]">
              <img src={icon} alt="" />
              <p className="font-Jakarta text-[14px] text-[#001C20]">27 August, 2024</p>
            </div>

            <p className="font-Jakarta text-[24px] font-bold">
              How To Build An Innovative Software,Cost-Effective Solutions.
            </p>

            <p className="font-Jakarta text-[14px] text-[#001C20]">
              We are excited to announce that discussions are underway for a groundbreaking.
              discussions are proud.
            </p>

            <div
              onClick={handlePopupOpen}
              className="flex cursor-pointer items-center justify-center gap-[8px] rounded-[8px] border-[1px] px-[24px] py-[12px] hover:scale-95"
            >
              <p className="font-JakartaBold text-[14px] lg:text-[18px]">Read More</p>
              <img src={arrow} className="lg:h-[24px]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-[1.5vh] rounded-[16px] bg-[#E6E8F3] p-[16px]">
            <div className="flex flex-col items-center justify-center gap-[2vh]">
              <p className="font-Jakarta text-center text-[20px] font-bold">Daily Newsletter</p>
              <p className="font-Jakarta mt-[20px] text-center text-[14px] text-[#001C20]">
                Get all the top stories from Blogs to keep track.
              </p>
            </div>

            <div className="mt-[50px] flex h-[50px] w-[331px] items-center justify-between gap-[10px] rounded-[5px] bg-white px-[17px] py-[16px]">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="font-Jakarta placeholder:font-Jakarta w-full text-[14px] placeholder:text-[14px] placeholder:font-bold placeholder:text-[#000000]"
              />
              <img src={arrowEmail} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="hlg:hidden flex flex-col px-[3.72%] py-[4vh]">
        <img src={imageM} alt="" className="w-full rounded-[15px] object-contain sm:w-6/10" />

        <div className="hmd:gap-[10px] flex w-full flex-col items-center justify-between gap-[2vh] sm:flex-row">
          <div className="flex w-full flex-col items-start justify-between gap-[1.5vh] sm:w-40/100">
            <div className="mt-[20px] flex gap-[8px]">
              <img src={icon} alt="" />
              <p className="font-Jakarta text-[14px] text-[#001C20]">27 August, 2024</p>
            </div>

            <p className="font-Jakarta text-[20px] leading-[24px] font-bold">
              How To Build A Innovative <br /> Software,Cost-Effective Solutions.
            </p>

            <p className="font-Jakarta text-[14px] text-[#001C20]">
              We are excited to announce that discussions are underway for a groundbreaking.
              discussions are proud.
            </p>

            <div
              onClick={handlePopupOpen}
              className="flex cursor-pointer items-center justify-center gap-[8px] rounded-[8px] border-[1px] px-[14px] py-[8px] hover:scale-95 lg:px-[18px] lg:py-[12px]"
            >
              <p className="font-JakartaBold h-[20px] w-[73px] text-[14px] lg:h-[24px] lg:w-[94px] lg:text-[18px]">
                Read More
              </p>
              <img src={arrow} className="h-[12px] lg:h-[24px]" />
            </div>
          </div>

          <div className="mt-[10px] flex w-full flex-col items-center justify-between rounded-[16px] bg-[#E6E8F3] p-[16px] sm:w-60/100 2xl:gap-[25px]">
            <div className="flex flex-col items-center justify-center gap-[2vh]">
              <p className="font-Jakarta text-center text-[24px] font-bold">Daily Newsletter</p>
              <p className="font-Jakarta mt-[20px] text-center text-[14px]">
                Get all the top stories from Blogs to keep track.
              </p>
            </div>

            <div className="mt-[50px] flex h-[50px] w-[331px] items-center justify-between gap-[10px] rounded-[5px] bg-white px-[17px] py-[16px]">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="font-Jakarta placeholder:font-Jakarta w-full text-[14px] placeholder:text-[14px] placeholder:font-bold placeholder:text-[#000000]"
              />
              <img src={arrowEmail} alt="" />
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <NewsPopup onClose={handlePopupClose} />
        </div>
      )}
    </div>
  );
}
