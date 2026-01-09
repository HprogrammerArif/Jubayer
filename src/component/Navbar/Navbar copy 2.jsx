"use client";

import { useState, useEffect, useRef } from "react";
import image from "../../image/Ellipse 230.png";
import image1 from "../../image/Frame 1000004068.png";

function Navbar() {
  const routes = ["Home", "Project", "Services", "About Me"];
  const [rotation, setRotation] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");

  // Use refs for cursor position to avoid re-renders
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth cursor animation with requestAnimationFrame
    const animateCursor = () => {
      // Instant follow for main cursor
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 1;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 1;

      // Delayed follow for trail (creates floating effect)
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.15;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.15;

      // Update DOM directly for better performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const angleStep = 360 / routes.length;
  const handleRouteClick = (index) => {
    const targetRotation = -index * angleStep;
    setRotation(targetRotation);
  };
  return (
    <div className="flex items-center justify-center bg-[#081228] relative min-h-screen cursor-none">
      {/* Custom Cursor - Main Dot with Enhanced Gradient Glow */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      >
        {/* Outer glow rings */}
        <div
          className={`absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl transition-all duration-300 ${
            cursorVariant === "hover" ? "w-12 h-12" : "w-8 h-8"
          }`}
        />
        <div
          className={`absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-lg transition-all duration-300 ${
            cursorVariant === "hover" ? "w-8 h-8" : "w-6 h-6"
          }`}
        />
        {/* Main dot */}
        <div
          className={`relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-200 ${
            cursorVariant === "hover"
              ? "w-3 h-3 shadow-[0_0_25px_rgba(147,51,234,0.9),0_0_50px_rgba(59,130,246,0.7),0_0_75px_rgba(147,51,234,0.4)]"
              : "w-2 h-2 shadow-[0_0_15px_rgba(147,51,234,0.7),0_0_30px_rgba(59,130,246,0.5),0_0_45px_rgba(147,51,234,0.3)]"
          }`}
        />
      </div>

      {/* Custom Cursor - Trailing Circle with Glassmorphism */}
      <div
        ref={cursorTrailRef}
        className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      >
        <div
          className={`rounded-full transition-all duration-500 relative ${
            cursorVariant === "hover" ? "w-16 h-16" : "w-10 h-10"
          }`}
        >
          {/* Outermost glow layer */}
          <div
            className={`absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-2xl transition-all duration-500 ${
              cursorVariant === "hover"
                ? "scale-110 opacity-80"
                : "scale-100 opacity-50"
            }`}
          />

          {/* Mid glow layer */}
          <div
            className={`absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-xl transition-all duration-500 ${
              cursorVariant === "hover"
                ? "scale-105 opacity-70"
                : "scale-100 opacity-50"
            }`}
          />

          {/* Gradient border with glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-25 blur-sm" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-35" />

          {/* Glass inner fill with frosted effect - MORE TRANSPARENT */}
          <div
            className={`absolute inset-[2px] rounded-full bg-gradient-to-br from-[#081228]/30 via-[#081228]/40 to-[#081228]/30 backdrop-blur-md transition-all duration-500 ${
              cursorVariant === "hover"
                ? "shadow-[inset_0_0_20px_rgba(147,51,234,0.2),inset_0_0_10px_rgba(59,130,246,0.15)]"
                : "shadow-[inset_0_0_10px_rgba(147,51,234,0.1)]"
            }`}
          />

          {/* Highlight for glass effect */}
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-50" />

          {/* Inner glow */}
          <div
            className={`absolute inset-[4px] rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-md transition-all duration-500 ${
              cursorVariant === "hover" ? "opacity-80" : "opacity-40"
            }`}
          />
        </div>
      </div>

      <div className="relative w-[400px] h-[400px]">
        {/* Single Large Circular Path SVG - Always Visible */}
        <svg
          className="absolute inset-0 pointer-events-none z-20"
          width="400"
          height="400"
          viewBox="-30 -30 460 460"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "visible",
          }}
        >
          <defs>
            {/* Single circular path that all text will follow */}
            <path
              id="main-circle"
              d="M 200,85 A 115,115 0 1,1 199.99,85"
              fill="none"
            />
          </defs>

          {/* Render all navigation items on the circular path */}
          {routes.map((route, index) => {
            const angle = index * angleStep;
            const normalizedAngle = (((angle + rotation) % 360) + 360) % 360;
            const isActive = normalizedAngle < 3 || normalizedAngle > 357;

            // Calculate position offset along the circle (0-100%)
            const pathOffset = index * (100 / routes.length) + "%";

            return (
              <text
                key={route}
                className="uppercase tracking-wider transition-all duration-300"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fill: isActive ? "white" : "#9ca3af",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <textPath
                  href="#main-circle"
                  startOffset={pathOffset}
                  textAnchor="middle"
                  style={{
                    transition: "fill 0.3s ease",
                  }}
                >
                  {route}
                </textPath>
              </text>
            );
          })}
        </svg>

        {/* Interactive buttons positioned on the circle */}
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
            const radius = 115; // Match the SVG circle radius (230px diameter)
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            const normalizedAngle = (((angle + rotation) % 360) + 360) % 360;
            const isActive = normalizedAngle < 3 || normalizedAngle > 357;

            return (
              <button
                key={route}
                onClick={() => handleRouteClick(index)}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                className="absolute left-1/2 top-1/2 z-10 hover:scale-110 transition-transform duration-300 w-[200px] h-[80px] flex items-center justify-center"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  transition:
                    "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s ease",
                }}
              >
                {/* Background Image for Active State */}
                {isActive && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] -z-10"
                    style={{
                      transform: `rotate(${-rotation}deg)`,
                      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div
                      className="bg-cover bg-center shadow-lg w-[140px] h-[60px]"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                )}
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
