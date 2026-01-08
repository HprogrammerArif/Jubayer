"use client"

import { useState } from "react"
import image1 from "../../image/1.png"
import image2 from "../../image/2.png"
import image3 from "../../image/3.png"
import image4 from "../../image/Screenshot_2 1.png"
import image5 from "../../image/Didiflow cover 1.png"

export default function ProjectCardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use. My strength lies in combining creative and technical skills to build intuitive interfaces.",
      image: image4,
      images: image1,
      number: "1",
    },
    {
      id: 2,
      title: "Interaction Design",
      description:
        "Create designs that are not only visually appealing but also easy to use. My strength lies in combining cr",
      image: image5,
      images: image2,
      number: "2",
    },
    {
      id: 3,
      title: "Interaction Design",
      description: "Create designs that are not only visually appealing but also easy to use.",
      image: image4,
      images: image3,
      number: "3",
    },
  ]

  // Get the 3 visible cards (current + next 2)
  const getVisibleCards = () => {
    return [
      projects[currentIndex],
      projects[(currentIndex + 1) % projects.length],
      projects[(currentIndex + 2) % projects.length],
    ]
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const visibleCards = getVisibleCards()

  const widthClasses = ["w-3/8", "w-2/6", "w-2/8"]

  return (
    <div className="w-full py-12">
      <div className="flex items-center justify-center gap-6 mx-auto">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="flex-shrink-0 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-white text-xl"
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="flex gap-6 overflow-hidden">
          {visibleCards.map((card, index) => (
            <div
              key={`${card.id}-${currentIndex}`}
              className={`${widthClasses[index]} transition-all duration-700 ease-out`}
              style={{
                transform: isAnimating ? "translateX(0)" : "translateX(0)",
                opacity: 1,
              }}
            >
              <div className="group relative bg-[#17223AED] rounded-2xl overflow-hidden h-full min-h-96 hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-full px-5 pt-5 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-end">
                  <img src={card.images || "/placeholder.svg"} className="h-40 drop-shadow-2xl" alt="" />
                </div>
                <div className="absolute top-8 right-8 text-8xl md:text-9xl font-bold text-slate-700 opacity-10 pointer-events-none">
                  {card.number}
                </div>

                <div className="p-6 md:p-8 pt-16">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-4">{card.title}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-slate-400 text-[18px] md:text-base leading-relaxed line-clamp-3 pr-4">
                      {card.description}
                    </p>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors whitespace-nowrap">
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
          className="flex-shrink-0 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-white text-xl"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  )
}
