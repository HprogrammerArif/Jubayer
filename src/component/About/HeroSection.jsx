import React from "react";
import image from "../../image/Group 24.png";
import image2 from "../../image/Frame 1000004068.png";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen max-w-6xl mx-auto">
      <div className="flex items-center justify-center mb-7 -mt-20">
        <img
          src={image2}
          alt="JJ Logo"
          className="h-11 md:h-16 lg:h-18 drop-shadow-2xl"
        />
      </div>
      <div className="inline-flex items-center px-4 py-2 mb-3 bg-[#334155]/80 backdrop-blur-sm rounded-md border border-gray-600/50 shadow-lg">
        <NavLink to="/">
          <span className="text-gray-400 text-sm font-medium">Home</span>
        </NavLink>

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
        <span className="text-gray-200 text-sm font-medium">About</span>
      </div>

      <img src={image} className="h-96 w-auto" alt="" />
      <h1 className="text-[70px] rozha">Hi, I'm Jubayer</h1>
      <p className="text-[18px] text-gray-300">
        I am an UI/UX Designer and I design because I love solving problems,
        questioning 'why, and making things feel right. UI/UX isn't just about
        screens, it's about people, habits, and the tiny details that make a
        product worth using. It's not just about looking good; it's about
        feeling effortless. If it makes sense without overthinking, I've done my
        job.
      </p>
    </div>
  );
}

export default HeroSection;
