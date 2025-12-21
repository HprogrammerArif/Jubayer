import React from "react";
import image from "../../image/Asset.png";
import image1 from "../../image/Frame 2147227310.png";
import image2 from "../../image/Frame 1000004068.png";
import ProjectFile from "./ProjectFile";
import Contact from "./Contact";

function ProjectTab() {
  return (
    <div className="bg-[#081228]">
      <div className="">
        <div>
          <img src={image} alt="" className="mx-auto h-96 " />
          <img
            src={image1}
            alt=""
            className="mx-auto absolute top-28 left-50 h-45"
          />
          <img
            src={image1}
            alt=""
            className="mx-auto absolute bottom-[50vh] right-50 h-45"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute  top-30">
            <div className="relative text-center px-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-7">
                <img
                  src={image2}
                  alt="JJ Logo"
                  className="h-11 md:h-16 lg:h-18 drop-shadow-2xl"
                />
              </div>

              <div className="inline-flex items-center px-4 py-2 mb-3 bg-[#334155]/80 backdrop-blur-sm rounded-md border border-gray-600/50 shadow-lg">
                <span className="text-gray-400 text-sm font-medium">Home</span>
                <span className="mx-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-200 text-sm font-medium">
                  Projects
                </span>
              </div>

              {/* Main Headline - Rozha-like font (use Google Fonts or custom) */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl rozha font-bold leading-tight tracking-wide drop-shadow-2xl">
                Designs that tell. <br />
                Experiences that connect.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ProjectFile/>
      <Contact/>
    </div>
  );
}

export default ProjectTab;
