import { Link } from "react-router-dom";
import Logo from "/Images/Footer/Quantum-Logo.webp";
import FaceBook from "/Images/Footer/Facebook.webp";
import LinkedIn from "/Images/Footer/Linkedin.webp";
import Instagram from "/Images/Footer/Instagram.webp";
import Twitter from "/Images/Footer/Twitter.webp";

const navItems = [
  {
    href: "/",
    alt: "Home",
  },
  {
    href: "/aboutus",
    alt: "About Us",
  },
  {
    href: "/services",
    alt: "Services",
  },
  {
    href: "/researches",
    alt: "Researches",
  },
  {
    href: "/news",
    alt: "News",
  },
  {
    href: "/team",
    alt: "Team",
  },
  {
    href: "/careers",
    alt: "Careers",
  },
];

const Footer = () => {
  const Size = "h-[36px] w-[36px] cursor-pointer";
  const Line = "mt-[60px] h-[1px] w-full bg-[#C8C8C8]";
  const FooterText = "font-Jakarta text-[14px] text-[#FFFFFF] ";
  const LinkText = "font-Jakarta text-[18px] font-bold text-[#fff] ";
  const SubText =
    "font-Jakarta flex flex-col space-y-[15px] text-[14px] text-[#fff] 2xl:text-[16px] cursor-pointer ";
  const MobileText = "font-Jakarta flex flex-col space-y-[15px] text-[16px] text-[#fff] ";
  const DesktopText = "font-Jakarta text-[16px] font-bold text-[#fff] 2xl:text-[18px] ";
  const HovverEffect = "transition-all duration-300 hover:text-[#FF810A]";
  const FooterButton = "transition duration-300 hover:scale-95";

  return (
    <div className="mx-auto flex w-full max-w-[1920px] bg-[#000E49]">
      {/* Footer content */}
      <div className="m-[16px] flex w-full flex-col sm:m-[2%] xl:hidden">
        {/* Logo and Text */}
        <div className="flex flex-col">
          <div className="">
            <img src={Logo} alt="logo" className="h-auto w-[138px]" />
          </div>

          <div className="mt-[12px]">
            <h4 className="font-Jakarta text-[14px] leading-[20px] text-[#fff]">
              Empowering progress through precision engineering and bold innovation our deep
              commitment to understanding your unique challenges and delivering tailored, efficient
              solutions. At Quantum ensuring our clients receive the best outcomes, every time.
            </h4>
          </div>
        </div>

        {/* Socail Icons */}
        <div className="mt-[30px] flex flex-row space-x-[16px]">
          {[FaceBook, LinkedIn, Instagram, Twitter].map((icon, i) => (
            <div key={i} className={Size}>
              <img src={icon} alt="Social Icon" className={FooterButton} />
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex w-full flex-row justify-between">
          <div className="flex w-full flex-col lg:flex-row lg:justify-between">
            <div className="mt-[40px] flex flex-col">
              <div className="flex">
                <h1 className={LinkText}>Quick Links</h1>
              </div>
              <div className="mt-[15px] flex flex-row">
                <div className={MobileText}>
                  {navItems.slice(1, 4).map((item) => (
                    <Link key={item.href} to={item.href} className={HovverEffect}>
                      {item.alt}
                    </Link>
                  ))}
                </div>
                <div className="font-Jakarta ml-[70px] flex flex-col space-y-[15px] text-[16px] text-[#fff]">
                  {navItems.slice(4).map((item) => (
                    <Link key={item.href} to={item.href} className={HovverEffect}>
                      {item.alt}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="mt-[40px] flex flex-col space-y-[15px]">
              <h1 className={LinkText}>Legal</h1>
              <h1 className={`${MobileText} ${HovverEffect}`}>Terms of Service</h1>
              <h1 className={`${MobileText} ${HovverEffect}`}>Privacy Policy</h1>
            </div>
          </div>

          {/* Newsletter Desktop (hidden) */}
          <div className="mt-[40px] hidden w-full justify-end md:flex">
            <div className="flex w-full max-w-[400px] flex-col">
              <h1 className="font-Jakarta text-[16px] font-bold text-[#fff]">Newsletter</h1>
              <div className="mt-[16px] flex w-full text-right">
                <h1 className="font-Jakarta text-right text-[14px] text-[#fff]">
                  To stay up to date on all the latest news from us!
                </h1>
              </div>
              <div className="mt-[20px] w-full rounded-[8px] bg-[#E6E8F3]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-Jakarta w-full bg-transparent px-[16px] py-[16px] text-center text-[14px] leading-[20px] placeholder-black outline-none"
                />
              </div>
              <button className="mt-[18px] w-full rounded-[8px] bg-[#001984]">
                <h1 className="font-Jakarta py-[16px] text-center text-[16px] leading-[24px] font-bold text-[#fff]">
                  Subscribe
                </h1>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter for Mobile */}
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[40px] flex w-full flex-col items-center justify-center md:hidden">
            <h1 className="font-Jakarta text-[16px] font-bold text-[#fff]">Newsletter</h1>
            <div className="mt-[16px]">
              <h1 className="font-Jakarta text-center text-[14px] text-[#fff]">
                To stay up to date on all the latest news from us!
              </h1>
            </div>

            <div className="mt-[20px] flex h-[56px] w-full max-w-[560px] items-center justify-center rounded-[8px] bg-[#E6E8F3] sm:h-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-Jakarta bg-transparent py-[16px] text-center text-[14px] leading-[20px] placeholder-black outline-none"
              />
            </div>

            <button className="mt-[18px] flex w-full max-w-[560px] items-center justify-center rounded-[8px] bg-[#001984] hover:bg-[#001999] hover:shadow-lg">
              <h1 className="font-Jakarta py-[16px] text-[16px] leading-[24px] font-bold text-[#fff]">
                Subscribe
              </h1>
            </button>
          </div>

          <div className={Line}></div>

          <div className="mt-[20px]">
            <h1 className={FooterText}>© 2025 Quantum Labs. All rights reserved.</h1>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="3xl:mx-[120px] my-[80px] hidden w-full xl:mx-[2%] xl:flex xl:flex-col">
        <div className="flex w-full flex-row justify-between">
          {/* Logo and Text */}
          <div className="flex flex-col">
            <img src={Logo} alt="logo" className="h-auto w-[160px]" />
            <h4 className="font-Jakarta mt-[8px] text-[12px] text-[#fff] 2xl:text-[16px] 2xl:leading-[24px]">
              Empowering progress through precision engineering and <br /> bold innovation. our deep
              commitment to understanding <br /> your unique challenges and delivering tailored,
              efficient <br />
              solutions. At Quantum ensuring our clients receive the <br /> best outcomes, every
              time.
            </h4>
            <div className="mt-[30px] flex flex-row space-x-[16px]">
              {[FaceBook, LinkedIn, Instagram, Twitter].map((icon, i) => (
                <div key={i} className={Size}>
                  <img src={icon} alt="Social Icon" className={FooterButton} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h1 className={DesktopText}>Quick Links</h1>
            <div className="mt-[15px] flex flex-row">
              <div className={SubText}>
                {navItems.slice(1, 4).map((item) => (
                  <Link key={item.href} to={item.href} className={HovverEffect}>
                    {item.alt}
                  </Link>
                ))}
              </div>
              <div className="font-Jakarta ml-[70px] flex cursor-pointer flex-col space-y-[15px] text-[14px] text-[#fff] 2xl:text-[16px]">
                {navItems.slice(4).map((item) => (
                  <Link key={item.href} to={item.href} className={HovverEffect}>
                    {item.alt}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-[15px]">
            <h1 className={DesktopText}>Legal</h1>
            <h1 className={`${SubText} ${HovverEffect}`}>Terms of Service</h1>
            <h1 className={`${SubText} ${HovverEffect}`}>Privacy Policy</h1>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h1 className="font-Jakarta text-[14px] font-bold text-[#fff] 2xl:text-[16px]">
              Newsletter
            </h1>
            <h1 className="font-Jakarta mt-[16px] text-[14px] text-[#fff] 2xl:text-[16px]">
              To stay up to date on all the latest news from us!
            </h1>
            <div className="flex flex-row space-x-[18px] xl:flex-col 2xl:flex-row">
              <div className="mt-[20px] flex w-full max-w-[319px] rounded-[8px] bg-[#E6E8F3]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-Jakarta ml-[20px] bg-transparent py-[18px] text-start text-[12px] leading-[20px] placeholder-black outline-none 2xl:mr-[194px] 2xl:text-[14px]"
                />
              </div>
              <button className="3xl:w-[153px] mt-[18px] flex cursor-pointer items-center justify-center rounded-[12px] bg-[#001984] hover:bg-[#001999] hover:shadow-lg">
                <h1 className="font-Jakarta px-[32px] py-[16px] text-[16px] leading-[24px] font-bold text-[#fff] 2xl:text-[18px]">
                  Subscribe
                </h1>
              </button>
            </div>
          </div>
        </div>

        <div className={Line}></div>
        <div className="mt-[40px]">
          <h1 className={FooterText}>© 2025 Quantum Labs. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
