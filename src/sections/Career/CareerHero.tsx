import CareerMobile from "/Images/Career/CareerMobile.webp";
import CareerDesktop from "/Images/Career/CareerDesktop.webp";

export default function CareerHero() {
  return (
    <div className="mx-auto mt-[16px] max-w-[1920px] overflow-hidden xl:mt-0">
      <div className="3xl:mx-[120px] mx-[16px] mb-5 flex flex-col items-center sm:mx-[2%] xl:mt-[3vh]">
        <div className="relative w-full">
          {/* Images */}
          <img src={CareerMobile} alt="mobile" className="w-full sm:hidden" />
          <img src={CareerDesktop} alt="desktop" className="hidden w-full sm:block" />

          {/* Text Section */}
          <div className="mt-[20px] flex flex-col items-center justify-center text-center 2xl:mt-[32px]">
            <h1 className="font-Jakarta text-[32px] leading-[40px] font-bold text-[#252525] xl:text-[40px] 2xl:text-[68px] 2xl:leading-[72px]">
              Join Our Team
            </h1>
            <p className="font-Jakarta mt-[20px] max-w-[1394px] text-[14px] leading-[20px] font-bold text-[#252525] md:font-normal 2xl:text-[18px] 2xl:leading-[24px]">
              At Quantum Labs, we believe that our people are the key to our success. We are always
              looking for passionate, talented, and driven individuals who share our commitment to
              innovation, collaboration, and excellence. If you're excited about solving complex
              challenges, working with cutting-edge technologies, and making an impact, we want you
              on our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
