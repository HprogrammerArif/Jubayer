"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FristImage1 from "../../image/Figma-Dark logo.png";
import FristImage2 from "../../image/logos_adobe-after-effects.png";
import FristImage3 from "../../image/logos_adobe-indesign (1).png";
import FristImage4 from "../../image/logos_adobe-xd.png";
import FristImage5 from "../../image/photoshop-original logo.png";
import SecondImage1 from "../../image/Group 1321318986.png";
import SecondImage2 from "../../image/Group 1321318969.png";
import SecondImage3 from "../../image/Group 1686551952.png";
import SecondImage4 from "../../image/Group 1321318973.png";
import SecondImage5 from "../../image/Group 1321318985.png";
import ThirdImage1 from "../../image/Frame 1411067637.png";
import ThirdImage2 from "../../image/Frame 1411067636.png";
import ThirdImage3 from "../../image/Frame 1411067633.png";
import ThirdImage4 from "../../image/Frame 1411067634.png";
import ThirdImage5 from "../../image/Frame 1411067635.png";
import ThirdImage6 from "../../image/Group 1321318965.png";


const techIcons1 = [
  { img: FristImage1, width: 90, height: 90, angle: -0 },
  { img: FristImage2, width: 90, height: 90, angle: -30 },
  { img: FristImage3, width: 90, height: 90, angle: -80 },
  { img: FristImage4, width: 70, height: 70, angle: -150 },
  { img: FristImage5, width: 90, height: 90, angle: -190 },
];

const techIcons2 = [
  { img: SecondImage1, width: 190, height: 140, angle: -0 },
  { img: SecondImage2, width: 180, height: 130, angle: -30 },
  { img: SecondImage3, width: 210, height: 160, angle: -80 },
  { img: SecondImage4, width: 160, height: 190, angle: -150},
  { img: SecondImage5, width: 90, height: 90, angle: -210 },
];

const techIcons3 = [
  { img: ThirdImage1, width: 110, height: 110, angle: -0 },
  { img: ThirdImage2, width: 120, height: 120, angle: -30 },
  { img: ThirdImage3, width: 190, height: 130, angle: -75 },
  { img: ThirdImage4, width: 200, height: 130, angle: -130 },
  { img: ThirdImage5, width: 100, height: 100, angle: -180 },
  { img: ThirdImage6, width: 115, height: 115, angle: -220 },
];

const getPositionFromAngle = (angle) => {
  const radius = 400;
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
};

export default function TechAnimation() {
  const [scene, setScene] = useState(1);
  const [animationState, setAnimationState] = useState("expand");
  useEffect(() => {
    let timer;

    if (animationState === "expand") {
      timer = setTimeout(() => setAnimationState("hold"), 1500);
    } else if (animationState === "hold") {
      timer = setTimeout(() => setAnimationState("collapse"), 2000);
    } else if (animationState === "collapse") {
      timer = setTimeout(() => {
        setScene((prev) => (prev === 3 ? 1 : prev + 1));
        setAnimationState("expand");
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [animationState, scene]);
  const getCurrentIcons = () => {
    switch (scene) {
      case 1:
        return techIcons1;
      case 2:
        return techIcons2;
      case 3:
        return techIcons3;
      default:
        return techIcons1;
    }
  };
  const currentIcons = getCurrentIcons();
  const renderScene = () => {
    return currentIcons.map((item, index) => {
      const { x, y } = getPositionFromAngle(item.angle);

      return (
        <motion.div
          key={`${scene}-${index}`}
          className="absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={
            animationState === "expand" || animationState === "hold"
              ? { x, y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0 }
          }
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className=" rounded-2xl bg-card shadow-lg flex items-center justify-center">
            <img
              src={item.img}
              alt=""
              className="object-contain max-w-full max-h-full"
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            />
          </div>
        </motion.div>
      );
    });
  };
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <AnimatePresence mode="wait">{renderScene()}</AnimatePresence>
      {/* Scene indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 w-2 rounded-full transition-colors ${
              s === scene ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
