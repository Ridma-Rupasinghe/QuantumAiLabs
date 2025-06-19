type SocialLink = {
  icon: string;
  alt: string;
};

type ProfileCardProps = {
  name: string;
  jobTitle: string;
  profileImage: string;
  socialLinks: SocialLink[];
};

export default function ProfileCard({
  name,
  jobTitle,
  profileImage,
  socialLinks,
}: ProfileCardProps) {
  const Size =
    "2xl:h-[36px] 2xl:w-[36px] cursor-pointer w-[24px] h-[24px] md:w-[30px] md:h-[30px]  duration-300 ease-in-out hover:scale-95 cursor-pointer";

  return (
    <div className="flex flex-col justify-center">
      <div>
        <img src={profileImage} alt={name} />
      </div>
      <div className="mt-[8px] 2xl:mt-[38px]">
        <h1 className="font-Jakarta text-[16px] leading-[24px] font-bold 2xl:text-[24px] 2xl:leading-[32px]">
          {name}
        </h1>
      </div>
      <div className="flex flex-col justify-between xl:flex-row">
        <div className="flex items-center">
          <h1 className="font-Jakarta text-[14px] leading-[20px] font-bold 2xl:text-[20px] 2xl:leading-[24px]">
            {jobTitle}
          </h1>
        </div>
        <div className="mt-[8px] flex flex-row items-center space-x-[6px] xl:mt-0 2xl:space-x-[8px]">
          {socialLinks.map((link, idx) => (
            <div key={idx} className={Size}>
              <img src={link.icon} alt={link.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
