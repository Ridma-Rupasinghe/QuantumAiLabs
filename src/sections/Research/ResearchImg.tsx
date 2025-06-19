import ResearchMobile from "/Images/Research/imageM.webp";
import ResearchDesktop from "/Images/Research/imageD.webp";

export default function ResearchImg() {
  return (
    <div className="mx-auto flex items-center justify-center bg-[#F2F2F2] px-[40px] py-[27px] sm:px-[2%] 2xl:py-[55px]">
      <img src={ResearchMobile} alt="mobile" className="flex w-full sm:hidden" />
      <img src={ResearchDesktop} alt="desktop" className="hidden rounded-[32px] sm:flex" />
    </div>
  );
}
