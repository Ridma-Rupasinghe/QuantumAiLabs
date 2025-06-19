export default function Hero() {
  return (
    <div className="relative h-auto w-full">
      <div className="hlg:flex hidden w-full flex-col items-start justify-between px-[16px] py-[26px] lg:px-[2%]">
        <div className="relative w-[65%]">
          <p className="font-Jakarta text-left text-[46px] font-bold text-[#252525] xl:text-[57px] 2xl:text-[68px] 2xl:leading-[72px]">
            Innovating for <br />
            Tomorrow’s Solutions
          </p>

          <p className="font-Jakarta text-left text-[14px] text-[#252525] xl:text-[16px] 2xl:mt-[20px] 2xl:text-[18px]">
            Transforming data into actionable insights through advanced machine learning algorithms
            and AI-driven solutions.
          </p>
        </div>
      </div>

      <div className="hlg:hidden flex w-full flex-col items-start justify-between px-[3.72%] py-[16px]">
        <div className="flex w-full items-center justify-start">
          <p className="font-Jakarta text-left text-[32px] leading-[40px] font-bold">
            Innovating for <br />
            Tomorrow’s Solutions
          </p>
        </div>

        <div className="mt-[10px] flex w-full items-center justify-start text-[#252525]">
          <p className="font-Jakarta text-left text-[14px] leading-[20px]">
            Transforming data into actionable insights through advanced machine learning algorithms
            and AI-driven solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
