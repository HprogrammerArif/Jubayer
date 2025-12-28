import TechAnimation from "./TechAnimation";
import image from "../../image/Mask group.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function banner() {
  const [websiteCount, setWebsiteCount] = useState(0);
  const [mobileCount, setMobileCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const duration = 2000; 
    const steps = 60;

    const websiteInterval = setInterval(() => {
      setWebsiteCount((prev) => {
        if (prev >= 40) {
          clearInterval(websiteInterval);
          return 40;
        }
        return prev + 1;
      });
    }, duration / steps);

    // Mobile counter (starts a bit later)
    setTimeout(() => {
      const mobileInterval = setInterval(() => {
        setMobileCount((prev) => {
          if (prev >= 30) {
            clearInterval(mobileInterval);
            return 30;
          }
          return prev + 1;
        });
      }, duration / steps);
    }, 800);

    // Projects counter (starts even later)
    setTimeout(() => {
      const projectInterval = setInterval(() => {
        setProjectCount((prev) => {
          if (prev >= 30) {
            clearInterval(projectInterval);
            return 30;
          }
          return prev + 1;
        });
      }, duration / steps);
    }, 800);

    return () => {
      clearInterval(websiteInterval);
    };
  }, []);
  return (
    <div>
      <div className="-mt-20 -ml-16 mb-20">
        <TechAnimation />
      </div>
      <div className="absolute -top-10 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <div className=" h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
          <span className=" font-bold text-white">
            <img src={image} className="w-full h-full" alt="" />
          </span>
        </div>

        <div className=" max-w-7xl w-full text-center space-y-2 -mt-10 ">
          {/* Main Heading */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-[53px] font-bold rozha">
              <span className="bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
                Design That Connects. Experiences That Matter.
              </span>{" "}
              
              {/* <span className="bg-gradient-to-r from-white to-[#0137fa] bg-clip-text text-transparent">
               
              </span>{" "} */}
            </h1>
          </div>

          {/* Description */}
          <p className="md:text-[16px] text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm Jubayer Ahmad, a UI/UX & Graphic Designer passionate about
            blending creativity with usability. I design impactful web and
            mobile experiences that help businesses grow and users enjoy every
            interaction.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 my-8">
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <BsTwitterX size={22} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaBehance size={22} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-gray-500/50 hover:border-blue-500/50 transition-all hover:scale-110"
            >
              <FaFacebookF size={22} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-2.5 bg-transparent border-2 border-blue-600 rounded-md text-blue-400 font-medium hover:bg-blue-600/10 transition-all text-lg">
              Resume
            </button>

            <button className="px-10 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md font-medium text-white hover:from-blue-700 hover:to-purple-700 transition-all text-lg shadow-lg shadow-blue-600/20">
              Hire Me →
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0137fa]">
                {websiteCount}+
              </div>
              <p className="text-gray-400 mt-3 text-lg">Website Design</p>
            </div>

            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0137fa]">
                {mobileCount}+
              </div>
              <p className="text-gray-400 mt-3 text-lg">Mobile App Design</p>
            </div>

            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#0137fa]">
                {projectCount}+
              </div>
              <p className="text-gray-400 mt-3 text-lg">Live Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
