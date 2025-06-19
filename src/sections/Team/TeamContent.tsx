import ProfileCard from "../../components/Team/ProfileCard";
import LinkedIn from "/Images/Footer/Linkedin.webp";
import Instagram from "/Images/Footer/Instagram.webp";
import Twitter from "/Images/Footer/Twitter.webp";

import Jhone from "/Images/Team/Jhone.webp";
import Emily from "/Images/Team/Emlly.webp";
import Jcob from "/Images/Team/Peeter.webp";

export default function TeamContent() {
  const teamData = [
    {
      name: "Emily",
      jobTitle: "Front End Developer",
      profileImage: Emily,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
    {
      name: "Jhone",
      jobTitle: "UI Designer",
      profileImage: Jhone,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
    {
      name: "Jcob",
      jobTitle: "Marketing Manager",
      profileImage: Jcob,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
    {
      name: "Emily",
      jobTitle: "Front End Developer",
      profileImage: Emily,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
    {
      name: "Jhone",
      jobTitle: "UI Designer",
      profileImage: Jhone,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
    {
      name: "Jcob",
      jobTitle: "Marketing Manager",
      profileImage: Jcob,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
    {
      name: "Jcob",
      jobTitle: "Marketing Manager",
      profileImage: Jcob,
      socialLinks: [
        { icon: LinkedIn, alt: "LinkedIn" },
        { icon: Instagram, alt: "Instagram" },
        { icon: Twitter, alt: "Twitter" },
      ],
    },
  ];
  return (
    <div className="mx-auto max-w-[1920px] overflow-hidden">
      <div className="mx-[16px] mb-5 flex flex-col items-center sm:mx-[2%] xl:mt-[32px] 2xl:mx-[120px]">
        {/* Card section */}
        <div className="grid w-full grid-cols-2 gap-[22px] p-[22px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-[66px] lg:p-0 2xl:mt-[96px] 2xl:mb-[114px]">
          {teamData.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              jobTitle={member.jobTitle}
              profileImage={member.profileImage}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
        {/* Card section */}
      </div>
    </div>
  );
}
