import ContactForm from "../components/Home/ContactForm";

export default function ContactUs() {
  return (
    <div className="mx-auto max-w-[1920px] overflow-hidden">
      <div className="flex flex-col">
        <div className="font-Jakarta 3xl:mx-[120px] mx-[16px] mt-[16px] mb-[20px] text-[14px] leading-[20px] font-normal sm:mx-[2%] xl:mt-[3vh] 2xl:mt-[37px] 2xl:mb-[30px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:font-bold">
          {" "}
          <h1>
            HOME <span className="text-[#8E8E8E]">/ CONTACT US </span>{" "}
          </h1>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
