"use client";

import { useState } from "react";
import image1 from "../../image/1.png";
import image2 from "../../image/2.png";
import image3 from "../../image/3.png";
import image4 from "../../image/Screenshot_2 1.png";
import image5 from "../../image/Didiflow cover 1.png";

import numberImg4 from "../../image/4.svg";
import numberImg5 from "../../image/5.svg";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

export default function ProjectCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use. My strength lies in combining creative and technical skills to build intuitive interfaces.",
      image: image4,
      images: image1,
      number: "1",
      tags: ["Case Study", "Mobile App", "UI/UX", "Live Project"],
    },
    {
      id: 2,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use. My strength lies in combining cr",
      image: image5,
      images: image2,
      number: "2",
      tags: ["Case Study", "Mobile App", "UI/UX"],
    },
    {
      id: 3,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use.",
      image: image4,
      images: image3,
      number: "3",
      tags: ["Case Study", "Mobile App", "UI/UX", "Live Project"],
    },
    {
      id: 4,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use.",
      image: image4,
      images: numberImg4,
      number: "4",
      tags: ["Case Study", "Mobile App", "UI/UX"],
    },
    {
      id: 5,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use.",
      image: image4,
      images: numberImg5,
      number: "5",
      tags: ["Case Study", "Mobile App", "UI/UX"],
    },
  ];

  // Get the 3 visible cards (current + next 2)
  const getVisibleCards = () => {
    return [
      projects[currentIndex],
      projects[(currentIndex + 1) % projects.length],
      projects[(currentIndex + 2) % projects.length],
    ];
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleCards = getVisibleCards();

  const widthClasses = ["w-3/8", "w-2/6", "w-2/8"];

  // Get dynamic width class based on hover state
  const getWidthClass = (index) => {
    if (hoveredIndex === null) {
      // No hover - use default sizes
      return widthClasses[index];
    }

    // When hovered - hovered card becomes largest, others get proportional sizes
    if (hoveredIndex === index) {
      return "w-3/8"; // Hovered card gets the largest size
    }

    // For non-hovered cards, assign different sizes to maintain visual variety
    // Create an array of other indices
    const otherIndices = [0, 1, 2].filter((i) => i !== hoveredIndex);
    const positionInOthers = otherIndices.indexOf(index);

    // First non-hovered card gets w-2/6, second gets w-1/4
    return positionInOthers === 0 ? "w-2/6" : "w-1/4";
  };

  return (
    <div className="w-full py-12">
      <div className="flex items-center justify-center gap-1 mx-auto">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-white text-xl"
          aria-label="Previous slide"
        >
          <GoTriangleLeft size={70} />
        </button>

        <div className="flex gap-6 overflow-visible items-center">
          {visibleCards.map((card, index) => (
            <div
              key={`${card.id}-${currentIndex}`}
              className={`${getWidthClass(
                index
              )} transition-all duration-500 ease-out`}
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredIndex === index ? 10 : 1,
                opacity: 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group relative bg-[#17223AED] rounded-2xl overflow-hidden h-full min-h-96 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-full px-5 pt-5 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex justify-end">
                  <img
                    src={card.images || "/placeholder.svg"}
                    className="h-40 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute top-8 right-8 text-8xl md:text-9xl font-bold text-slate-700 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                  {card.number}
                </div>

                <div className="p-6 md:p-8 pt-16">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {card.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="inline-block px-4 py-2 text-xs font-medium text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="flex justify-between items-end">
                    <p className="text-slate-400 text-[18px] md:text-base leading-relaxed line-clamp-3 pr-4 group-hover:text-slate-300 transition-colors duration-300">
                      {card.description}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-all duration-300 whitespace-nowrap hover:translate-x-1">
                      See more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="flex-shrink-0  rounded-lg  disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-white text-xl"
          aria-label="Next slide"
        >
          <GoTriangleRight size={70} />
        </button>
      </div>
    </div>
  );
}
