import { NavLink } from "react-router-dom";
import image from "../../image/Frame 1000004068.png";

const Navbar = () => {
  return (
    <div className="bg-[#081228] text-white shadow-md sticky top-0 z-70">
      <div className="flex items-center justify-between container mx-auto p-3 ">
        <div>
          <img src={image} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-[16px] font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Me" },
              { path: "/service", label: "Service" },
              { path: "/prject", label: "Project" },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className="relative px-4.5 py-3 rounded-[8px] transition-all duration-300 hover:bg-gray-800 "
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 transition-all duration-300 ${
                        isActive ? "text-white font-semibold" : "text-white "
                      }`}
                    >
                      {label}
                    </span>
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gray-700 rounded-[8px]"></div>
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-[8px] bg-gradient-to-r from-blue-500 to-purple-600"
                          style={{
                            borderBottomLeftRadius: "8px",
                            borderBottomRightRadius: "8px",
                            borderTopLeftRadius: "0px",
                            borderTopRightRadius: "0px",
                          }}
                        ></div>
                      </>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button className="px-6 py-2.5 cursor-pointer   bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
