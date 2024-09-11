"use client";

// ** import core package
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// import ui component
import { Typography } from "../ui/Typography";

// import config
import { config } from "@/config";

// import icons and logo
import {
  IcoInstagram,
  IcoLinkedin,
  IcoLogo,
  IcoTwitter,
  IcoYoutube,
} from "@/assets/svg";

const Footer = () => {
  const location = usePathname();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (section: string) => {
    // Redirect to home page with a hash anchor link
    window.location.href = `/#${section}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="py-8 sm:pt-16 lg:pt-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-center space-y-10 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="shrink-0 max-w-[300px]">
            <Link href="/" className="flex gap-2 items-center">
              <IcoLogo />
              <Typography variant="Medium_H4" className="text-white block">
                Sri Sri Radhe Siam
              </Typography>
            </Link>
            <Typography
              variant="Regular_H6"
              className={`block mt-4 text-white`}
            >
              From concept to reality, transforms dreams into achievements. Join
              our visionary community and thrive.
            </Typography>
            <div className="mt-4">
              <Typography
                variant="Regular_H6"
                className={`block text-white`}
                link={config.PHONE}
              >
                <span className="text-white">Ph. No:</span> +91 95959 95959
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`block text-white`}
                link={config.EMAIL}
              >
                <span className="text-white">Email:</span> info@ezyconsult.com
              </Typography>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between lg:justify-center gap-10 md:gap-x-[67px]">
            {/* Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-4 block text-white"
              >
                Links
              </Typography>
              <ul className="space-y-4 text-black_">
                <li>
                  <button
                    onClick={() => handleNavigation("home")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("aboutUs")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    About us
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("services")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("experts")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Experts
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("blog")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Blogs
                  </button>
                </li>
              </ul>
            </nav>

            {/* Other Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-4 block text-white"
              >
                Others
              </Typography>
              <ul className="space-y-4 text-black_">
                <li>
                  <button className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white ">
                    Contact us
                  </button>
                </li>
                <li>
                  <Link
                    href="/help-support"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Help & Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Other Links */}
            <nav>
              <Typography
                variant="Medium_H5"
                className=" mb-4 block text-white"
              >
                Others
              </Typography>
              <ul className="space-y-4 text-black_">
                <li>
                  <button className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white ">
                    Contact us
                  </button>
                </li>
                <li>
                  <Link
                    href="/help-support"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Help & Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 text-white "
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div className="shrink-0 ">
            <div className="">
              <Typography variant="Bold_H6" className="text-white block">
                Social media
              </Typography>
              <div className="flex gap-4 mt-4">
                <Link target="_blank" href={config.TWITTER_URL}>
                  <IcoTwitter />
                </Link>
                <Link target="_blank" href={config.FACEBOOK_URL}>
                  <IcoInstagram />
                </Link>
                <Link target="_blank" href={config.INSTAGRAM_URL}>
                  <IcoLinkedin />
                </Link>
                <Link target="_blank" href={config.LINKEDIN_URL}>
                  <IcoYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t  pt-8 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <Typography variant="Medium_H6" className="text-white block">
              © Copyright {currentYear}, All Rights Reserved by hungrymeh.com
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
