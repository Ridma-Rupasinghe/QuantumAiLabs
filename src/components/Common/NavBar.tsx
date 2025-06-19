import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logoIcon from "/Images/Home/newLogo.webp";
import vector from "/Images/Home/navbarButton.png";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const navItems = [
    { href: "/", alt: "Home" },
    { href: "/aboutus", alt: "About Us" },
    { href: "/services", alt: "Services" },
    { href: "/researches", alt: "Researches" },
    { href: "/news", alt: "News" },
    { href: "/team", alt: "Team" },
    { href: "/careers", alt: "Careers" },
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 z-30 w-full max-w-[1920px] transition-all duration-300 ${
          isScrolled ? "bg-[#000E49]/95 shadow-lg backdrop-blur-sm" : "bg-[#000E49]"
        }`}
      >
        <div className="relative w-full">
          <div className="3xl:px-[120px] flex w-full items-center justify-between px-[16px] py-[8px] md:py-0 lg:px-[2%]">
            {/* Logo */}
            <div className="flex items-center md:h-[82px]">
              <a href="/">
                <img src={logoIcon} alt="Left Icon" className="h-[50px] w-[138px] cursor-pointer" />
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="3xl:w-33/100 hidden w-50/100 items-end justify-end gap-[24px] pr-2 lg:flex">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <a
                    href={item.href}
                    className={`font-Jakarta text-nowrap transition-all duration-300 md:text-[10px] lg:text-[14px] 2xl:text-[16px] ${
                      location.pathname === item.href
                        ? "text-[#FF810A] underline underline-offset-3"
                        : "text-white hover:text-[#FF810A]"
                    }`}
                  >
                    {item.alt}
                  </a>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer items-center justify-center hover:scale-90 lg:hidden"
            >
              <img src={vector} alt="Menu" className="object-contain" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay and Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm" />

          {/* Menu Panel */}
          <div
            ref={menuRef}
            className="fixed top-[64px] z-30 w-full bg-white/95 shadow-lg backdrop-blur-md transition-all duration-300 lg:hidden"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-Jakarta block w-full px-4 py-3 text-center text-[16px] text-black transition-colors hover:bg-gray-100 ${
                  location.pathname === item.href ? "underline underline-offset-3" : ""
                }`}
              >
                {item.alt}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
