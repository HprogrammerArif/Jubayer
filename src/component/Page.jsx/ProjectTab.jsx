import image from "../../image/Element.png";
import image1 from "../../image/Project hero video 1.mp4";
import image2 from "../../image/Frame 1000004068.png";
import ProjectFile from "./ProjectFile";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

function ProjectTab() {
  return (
    <div className="bg-[#081228]">
      <video src={image1} autoPlay loop muted playsInline className=""></video>
      <div className="">
        <div className="absolute top-10 left-2/12">
          <img src={image} alt="" className="mx-auto h-[47vh] " />
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
                <NavLink className="cursor-pointer" to="/"> <span className="text-gray-400 text-sm font-medium">Home</span></NavLink>
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
      <ProjectFile />
      <Contact />
    </div>
  );
}

export default ProjectTab;
