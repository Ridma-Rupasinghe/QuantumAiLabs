import TextBadge from "../../components/About/TextBadge";
import JobCard from "../../components/Career/JobCard";

export default function CareerService() {
  const softwareEngineerJobs = [
    { title: "Senior Software Engineer (MERN Stack)", location: "Sri Lanka" },
    { title: "Senior Software Engineer ", location: "Sri Lanka" },
    { title: "Senior Software Engineer", location: "Sri Lanka" },
    { title: "Senior Software Engineer", location: "Sri Lanka" },
    { title: "Senior Software Engineer", location: "Sri Lanka" },
  ];

  const marketingJobs = [
    { title: "Marketing Specialist", location: "Sri Lanka" },
    { title: "Digital Marketing Analyst", location: "Sri Lanka" },
    { title: "Sales Executive", location: "Sri Lanka" },
  ];

  return (
    <div className="mt-0 mb-[37px] bg-[#F2F2F2] xl:mt-[60px] xl:mb-[54px]">
      <div className="3xl:mx-[120px] mx-[16px] sm:mx-[2%]">
        <div className="flex flex-col py-[20px] xl:py-[96px]">
          <div className="w-[188px]">
            <TextBadge text="CURRENT CAREERS" />
          </div>

          <div className="mt-[12px]">
            <h1 className="font-Jakarta text-[32px] leading-[40px] font-bold text-[#252525] xl:text-[40px] xl:leading-[60px] 2xl:text-[52px]">
              Explore Opportunities at Quantum Labs
            </h1>
          </div>

          <div className="font-Jakarta mt-[16px] max-w-[998px] text-[18px] leading-[24px] text-[#252525]">
            <h1>
              We are growing and always looking for talented individuals to join our team. Explore
              our current openings and apply to become part of our innovative and dynamic team.
            </h1>
          </div>

          {/* Software Engineer Section */}
          <div className="mt-[30px] lg:mt-[40px]">
            <h1 className="font-Jakarta text-[24px] leading-[32px] font-bold text-[#252525]">
              Software Engineer - Web
            </h1>
          </div>
          <div className="xmd:grid-cols-2 mt-[20px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[24px] lg:mt-[40px] xl:grid-cols-3">
            {softwareEngineerJobs.map((job, index) => (
              <JobCard key={index} title={job.title} location={job.location} />
            ))}
          </div>

          {/* Marketing Section */}
          <div className="mt-[60px] lg:mt-[40px]">
            <h1 className="font-Jakarta text-[24px] leading-[32px] font-bold text-[#252525]">
              Sales Marketing
            </h1>
          </div>
          <div className="xmd:grid-cols-2 mt-[20px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[24px] lg:mt-[40px] xl:grid-cols-3">
            {marketingJobs.map((job, index) => (
              <JobCard key={index} title={job.title} location={job.location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
