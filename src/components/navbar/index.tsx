"use client";

// ** import core package
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** import third party package
import { Menu, X } from "react-feather";

// import component
import BtnPrimary from "../ui/BtnPrimary";
import { Typography } from "../ui/Typography";
import { IcoLogo } from "@/assets/svg";

const sectionIds: { [key: string]: string } = {
  home: "home",
  aboutUs: "aboutUs",
  video: "video",
  activities: "activities",
  contactUs: "contactUs",
};

const navLinks = [
  { section: "home", text: "Home" },
  { section: "aboutUs", text: "About us" },
  { section: "video", text: "Video" },
  { section: "activities", text: "ISKCON Activities" },
  { section: "contactUs", text: "Contact us" },
];

const Navbar = () => {
  const location = usePathname();

  function getInitialActiveSection() {
    return location === "/blog" ? "blog" : "home";
  }

  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialActiveSection());

  const handleScroll = () => {
    const targetHeight = window.innerHeight / 2;
    for (const [section, id] of Object.entries(sectionIds)) {
      const sectionElement = document?.getElementById(id);
      const rect = sectionElement?.getBoundingClientRect();
      if (
        rect?.top &&
        rect?.top <= targetHeight &&
        rect?.bottom &&
        rect?.bottom >= targetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveSection(location === "/blog" ? "blog" : "home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "unset";
  }, [expanded]);

  const getNavLinkClass = (sectionName: string) =>
    activeSection === sectionName ? "text-white font-semibold" : "text-white";

  return (
    <header className="py-4 bg-primary shadow-md !z-[9999] sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-20">
            <Link href="/" className="flex gap-2 items-center">
              <IcoLogo />
              <Typography variant="Medium_H4" className="text-white block">
                Sri Sri Radhe Siam
              </Typography>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              className="text-primary"
              type="button"
              onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              aria-expanded={expanded}
            >
              <span
                style={{ display: expanded ? "none" : "block" }}
                aria-hidden="true"
              >
                <Menu className="text-white" />
              </span>

              <span
                style={{ display: expanded ? "block" : "none" }}
                aria-hidden="true"
              >
                <X className="text-white" />
              </span>
            </button>
          </div>
          {/* desktop nav */}
          <div className="hidden lg:flex lg:gap-8 lg:items-center lg:justify-center">
            {navLinks.map((link) => (
              <Link
                href={
                  location === "/"
                    ? `#${sectionIds[link.section]}`
                    : `/#${sectionIds[link.section]}`
                }
                key={link.section}
              >
                <div
                  className={`${getNavLinkClass(
                    link.section
                  )} nav-links  lg:text-lg hover:opacity-90 duration-500`}
                >
                  {link.text}
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
            <BtnPrimary
              content="Get started"
              className="bg-white lg:px-[53px] text-primary"
            />
          </div>
        </div>

        {/*  Mobile nav */}
        <nav
          className={`absolute ${
            expanded ? "flex lg:hidden " : "hidden"
          }  left-0 top-[86px] w-full  max-lg:h-[calc(100dvh-50px)] !z-[9999999] !bg-background overflow-x-hidden   flex-col `}
        >
          <div className="px-5 py-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                onClick={() => setExpanded(false)}
                className="block text-[20px] font-semibold mt-4 md:mt-10"
                href={`#${sectionIds[link.section]}`}
                key={link.section}
              >
                <h1 className="text-primaryBlack">{link.text}</h1>
              </Link>
            ))}
          </div>

          <div className="shadow-t p-6">
            <BtnPrimary
              onClick={() => {
                setExpanded((prevExpanded) => !prevExpanded);
              }}
              content="Get started"
              className="w-full px-0 md:text-base"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
