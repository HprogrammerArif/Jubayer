"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "Website Design",
    title: "Interaction Design",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Interaction Design",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    category: "Live Projects",
    title: "Interaction Design",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    category: "Case Study",
    title: "Interaction Design",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    category: "Graphic Design",
    title: "Interaction Design",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    category: "Website Design",
    title: "Interaction Design",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const categories = [
  "All Project",
  "Website Design",
  "Mobile App",
  "Live Projects",
  "Case Study's",
  "Graphic Design",
];

export default function ProjectFile() {
  const [activeCategory, setActiveCategory] = useState("All Project");

  const filteredProjects =
    activeCategory === "All Project"
      ? projects
      : projects.filter((project) => {
          if (activeCategory === "Case Study's") {
            return project.category === "Case Study";
          }
          return project.category === activeCategory;
        });

  return (
    <div className="">
      <div className="flex flex-wrap gap-3 justify-center mt-10 bg-[#00184C] py-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-transparent text-gray-300 border border-gray-600 hover:border-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="max-w-7xl mx-auto bg-[#0a1628] py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a2942] rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="bg-[#2d3e57] h-64 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="px-6 py-2 border border-gray-600 text-gray-300 text-xs font-semibold rounded hover:border-blue-500 hover:text-blue-500 transition-all">
                  CASE STUDY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
