"use client";

import { useState } from "react";
import image from "../../image/Ellipse 230.png";
import image1 from "../../image/Frame 1000004068.png";

function Navbar() {
  const routes = ["Home", "Project", "Services", "About Me"];
  const [rotation, setRotation] = useState(0);

  const angleStep = 360 / routes.length;
  const handleRouteClick = (index) => {
    const targetRotation = -index * angleStep;
    setRotation(targetRotation);
  };
  return (
    <div className=" flex items-center justify-center bg-[#081228]  ">
      <div className="relative w-[400px] h-[400px]">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {routes.map((route, index) => {
            const angle = index * angleStep;
            const radian = (angle - 90) * (Math.PI / 180);
            const radius = 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            const normalizedAngle = (((angle + rotation) % 360) + 360) % 360;
            const isActive = normalizedAngle < 3 || normalizedAngle > 357;

            return (
              <button
                key={route}
                onClick={() => handleRouteClick(index)}
                className="absolute left-1/2 top-1/2 cursor-pointer z-10 transition-all duration-300 hover:scale-105"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {isActive && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 px-25 py-10"
                    style={{
                      transform: `rotate(${-rotation}deg)`,
                      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center shadow-lg  w-full h-full"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    />
                  </div>
                )}
                <span
                  className={`text-xl font-semibold px-8 py-3 block whitespace-nowrap will-change-transform ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                  style={{
                    transform: `rotate(${-rotation}deg)`,
                    transition:
                      "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease",
                  }}
                >
                  {route}
                </span>
              </button>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center pointer-events-none z-20">
          <div className="w-full h-full rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            <img src={image1} className="w-20 h-24" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
