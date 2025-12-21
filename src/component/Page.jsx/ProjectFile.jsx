"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "Website Design",
    title: "Interaction Design",
    headline: "CASE STUDY",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image:
      "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1760418336/b075a41637a05c9217374a2e411f8a04d536e2da_x1m4np.jpg",
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Interaction Design",
    headline: "CASE ",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image:
      "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1760418336/067134af3ee4b96f623780d3c14577fca6342796_yzsy4q.jpg",
  },
  {
    id: 3,
    category: "Live Projects",
    title: "Interaction Design",
    headline: "CASE STUDY",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image:
      "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1759822517/better-learner-cover_zfyxqo.jpg",
  },
  {
    id: 4,
    category: "Case Study",
    title: "Interaction Design",
    headline: "CASE STUDY",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image:
      "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1759822517/what-type-of-learner-is-your-child-min-scaled_mkm8a1.jpg",
  },
  {
    id: 5,
    category: "Graphic Design",
    title: "Interaction Design",
    headline: "CASE STUDY",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image:
      "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1759822517/1_2LywpPsQnnuRwQpDVrydAQ_cfd3ev.jpg",
  },
  {
    id: 6,
    category: "Website Design",
    title: "Interaction Design",
    headline: "CASE STUDY",
    description:
      "I create designs that are not only visually appealing but also easy to use. My strength lies in combining or I my strength lies in combining or I create designs that are not only visually appealing but also easy to use.",
    image:
      "https://res.cloudinary.com/dfsu0cuvb/image/upload/v1759822516/images_2_gsamts.jpg",
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
      <div className="container mx-auto  py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className=" rounded-2xl overflow-hidden">
              {/* Project Image */}
              <div className=" h-[330px] flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={755}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-6">
                <button className="px-6 py-2 mb-3 rounded-full border border-gray-600 text-gray-300 text-[18px] font-semibold   transition-all">
                  {project.headline}
                </button>
                <h3 className="text-white text-[22px] font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[18px] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
